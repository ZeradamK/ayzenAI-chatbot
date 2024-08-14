import React from 'react';
import './Footer.css';
import yoni from './yoni.JPG';
import zerish from './zerish.JPG';
const Footer = () => {
    return (
        <section className="footer-section py-10"> {/* Added padding */}
            <div className="responsive-container-block outer-container ">
                <div className="responsive-container-block inner-container">
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
                        <p className="text-blk heading-text">Meet the founders</p>
                        <p className="text-blk sub-heading-text">
                            Empowering the future with AI is more than just innovation—it's about seamlessly integrating intelligence into the backend, turning vision into reality. With the OpenAI API, we transform data into decisions, code into creativity, and challenges into opportunities. Together, we build the backbone of tomorrow's technology, where imagination meets implementation.
                        </p>
                    </div>
                    <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container flex flex-row justify-center items-center">
                        <div className="responsive-cell-block card-container">
                            <div className="card">
                                <img
                                    className="card-img"
                                    src={yoni}
                                    alt="Team member 1"
                                />
                                <a href={"https://www.linkedin.com/in/yonatan-eshetu-6b10ba229/"} className="text-blk name">Yonatan Tilahun</a>
                                <p className="text-blk position">Co-founder</p>
                            </div>
                        </div>
                        <div className="responsive-cell-block card-container">
                            <div className="card">
                                <img
                                    className="card-img"
                                    src={zerish}
                                    alt="Team member 2"
                                />
                                <a href={"https://www.linkedin.com/in/zeradamkiflefantaye/"} className="text-blk name mb-4">Zeradam Kifle</a>
                                <p className="text-blk position">Co-founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Footer;
