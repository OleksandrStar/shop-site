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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.5'
            }}>
                {/* First Service */}
                <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                }}>
                    <img
                        src="https://cdn-dclcb.nitrocdn.com/nEJwBnJfMgrepTdEKiQJQkImAnkTSHTG/assets/images/optimized/rev-0c62d12/www.velvetech.com/wp-content/uploads/2021/03/personalization.jpg"
                        alt="Service 1"
                        style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}}
                    />
                    <h3 style={{color: '#444', marginBottom: '10px'}}>Service One</h3>
                    <p style={{color: '#555'}}>Discover cutting-edge solutions tailored to your needs. Service One
                        offers efficiency, reliability, and innovation to help you achieve your goals seamlessly.</p>
                </div>

                {/* Second Service */}
                <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                }}>
                    <img
                        src="https://cdn-dclcb.nitrocdn.com/nEJwBnJfMgrepTdEKiQJQkImAnkTSHTG/assets/images/optimized/rev-0c62d12/www.velvetech.com/wp-content/uploads/2021/03/continuos-support.jpg"
                        alt="Service 2"
                        style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}}
                    />
                    <h3 style={{color: '#444', marginBottom: '10px'}}>Service Two</h3>
                    <p style={{color: '#555'}}>Experience premium features and exceptional customer support. Service Two
                        is designed to provide top-notch results and unmatched satisfaction.</p>
                </div>

                {/* Third Service */}
                <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '8px'
                }}>
                    <img
                        src="https://cdn-dclcb.nitrocdn.com/nEJwBnJfMgrepTdEKiQJQkImAnkTSHTG/assets/images/optimized/rev-0c62d12/www.velvetech.com/wp-content/uploads/2021/03/seamless-integration.jpg"
                        alt="Service 3"
                        style={{width: '100%', borderRadius: '8px', marginBottom: '10px'}}
                    />
                    <h3 style={{color: '#444', marginBottom: '10px'}}>Service Three</h3>
                    <p style={{color: '#555'}}>Simplify your tasks with Service Three. A perfect blend of functionality
                        and style, ensuring that every project is executed effortlessly.</p>
                </div>
            </div>
        </>
    );
};

export default Index;