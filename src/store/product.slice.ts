import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    loading: boolean;
    selectedProduct: Product | null;
    selectedCategory: string;
    sortOrder: "asc" | "desc";
    searchTerm: string;
}

const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    loading: true,
    selectedProduct: null,
    selectedCategory: "",
    sortOrder: "asc",
    searchTerm: "",
};

export const fetchProducts = createAsyncThunk<Product[]>(
    "products/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        return data;
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        selectProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
        setCategoryFilter: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredProducts = state.products.filter(
                (product) =>
                    !action.payload || product.category === action.payload
            );
        },
        setPriceSortOrder: (state, action) => {
            state.sortOrder = action.payload;
            state.filteredProducts.sort((a, b) =>
                action.payload === "asc" ? a.price - b.price : b.price - a.price
            );
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
            const cleanProducts = [...state.products];
            state.filteredProducts = cleanProducts.filter((product) => {
                const matches = product.title
                    .toLowerCase()
                    .includes(action.payload.toLowerCase());
                return matches;
            });

            console.log("Filtered Products:", state.filteredProducts);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.filteredProducts = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const {
    selectProduct,
    clearSelectedProduct,
    setCategoryFilter,
    setPriceSortOrder,
    setSearchTerm,
} = productSlice.actions;

export default productSlice.reducer;
