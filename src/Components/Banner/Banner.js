import React from 'react';
import slider1 from '../../Images/slider-large-1.jpg'
import slider3 from '../../Images/slider-large-3.jpg'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> */}
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Smartphone Studio</h5>
                            <p>Mobile gadgets in smartphone warehouse can be found by brands, price range and so on. A blog section is also there to keep you informed about the latest news from the mobile phone industry. You may also check our where to buy page to get some idea about different buying possibilities.</p>
                        </div>
                    </div>
                    {/* <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Smartphone Studio</h5>
                            <p>Mobile gadgets in smartphone warehouse can be found by brands, price range and so on. A blog section is also there to keep you informed about the latest news from the mobile phone industry. You may also check our where to buy page to get some idea about different buying possibilities.</p>
                        </div>
                    </div> */}
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Smartphone Studio</h5>
                            <p>Mobile gadgets in smartphone warehouse can be found by brands, price range and so on. A blog section is also there to keep you informed about the latest news from the mobile phone industry. You may also check our where to buy page to get some idea about different buying possibilities.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;