import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <>
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
            <div style={{fontFamily: 'Arial, sans-serif', lineHeight: '1.5', padding: '20px'}}>
                <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                    {/* First Offer */}
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px'
                    }}>
                        <img
                            src="https://fractus.com.ua/wp-content/uploads/2018/06/tovar_dlya_prodazhi.jpg"
                            alt="Special Offer 1"
                            style={{width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px'}}
                        />
                        <span style={{color: '#555'}}>
        <strong>Special Offer 1:</strong> Get 50% off on our best-selling product! Hurry, limited time only!
      </span>
                    </li>

                    {/* Second Offer */}
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px'
                    }}>
                        <img
                            src="https://www.e-comon.org.ua/test/img/2020-09-23-16.jpg"
                            alt="Special Offer 2"
                            style={{width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px'}}
                        />
                        <span style={{color: '#555'}}>
        <strong>Special Offer 2:</strong> Buy one, get one free on select items. Stock up and save today!
      </span>
                    </li>

                    {/* Third Offer */}
                    <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px'
                    }}>
                        <img
                            src="https://ukrainepravo.com/upload/iblock/8cc/8ccc60468938f5c089aa3127b30bbbb2.png"
                            alt="Special Offer 3"
                            style={{width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px'}}
                        />
                        <span style={{color: '#555'}}>
        <strong>Special Offer 3:</strong> Free shipping on all orders over $50! Shop now and save big.
      </span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Index;