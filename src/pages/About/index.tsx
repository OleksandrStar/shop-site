import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <div>
            <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><img
                style={{height: '100px', width: '100px'}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s'/>
                <div style={{display: "flex", gap: '20px'}}>
                    <div onClick={() => navigate("/")}>Home</div>
                    <div onClick={() => navigate("/about")}>About</div>
                    <div onClick={() => navigate("/services")}>Services</div>
                    <div onClick={() => navigate("/products")}>Products</div>
                </div>
            </header>
            <div style={{fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6'}}>
                <h1 style={{textAlign: 'center', color: '#555'}}>About Us: Fashion Destination</h1>
                <p style={{marginBottom: '20px', textAlign: 'justify'}}>
                    Welcome to <strong>Fashion Destination</strong>, where style meets individuality! We are an online
                    clothing store dedicated
                    to helping you express your unique personality through fashion. Whether you're searching for
                    everyday essentials,
                    trendy outfits, or statement pieces, our collection has something for everyone.
                </p>
                <h2 style={{color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '5px'}}>Why Choose
                    Us?</h2>
                <ul style={{listStyle: 'disc', paddingLeft: '20px', marginBottom: '20px'}}>
                    <li>
                        <strong>Curated Collections</strong>: We handpick every item to ensure the highest quality
                        and the latest trends.
                    </li>
                    <li>
                        <strong>Affordable Style</strong>: Fashion should be accessible to all. We offer competitive
                        prices without
                        compromising on quality.
                    </li>
                    <li>
                        <strong>Sustainability Matters</strong>: We care about the planet and prioritize
                        eco-friendly practices, from
                        sourcing to packaging.
                    </li>
                    <li>
                        <strong>Customer-Centric</strong>: Your satisfaction is our priority. We provide seamless
                        shopping experiences,
                        fast shipping, and exceptional support.
                    </li>
                </ul>
                <h2 style={{color: '#444', borderBottom: '2px solid #ddd', paddingBottom: '5px'}}>Our Vision</h2>
                <p style={{marginBottom: '20px', textAlign: 'justify'}}>
                    At <strong>[Store Name]</strong>, we believe that clothing is more than just fabric—it's a way
                    to tell your story.
                    Our mission is to empower you with styles that make you feel confident, bold, and authentic.
                </p>
                <p style={{marginBottom: '20px', textAlign: 'justify'}}>
                    Thank you for choosing us as your fashion partner. Let’s redefine your wardrobe, one outfit at a
                    time!
                </p>
            </div>
        </div>
    );
};

export default Index;