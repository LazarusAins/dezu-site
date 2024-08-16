import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ1S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/cleaning/ct4/ct43.png"),
        require("../../assets/images/cleaning/ct4/ct43.png"),
        require("../../assets/images/cleaning/ct4/ct43.png"),
    ];

    const slideTexts = [
        {
            conjet: "CONJET ROBOT 557",
            paragraph: "Advanced accessory for automated robotic hydro demolition, allowing operators to achieve precise control and efficient material removal using a sophisticated controller. Its cutting-edge design ensures effective performance in challenging environments, blending automation with user-friendly operation.",
            listItems: [
                "Automated Operation: Advanced robotic automation for demolition",
                "Controller Integration: Intuitive controller for precise operation",
                "Robust Construction: Withstands harsh industrial conditions effectively",
                "Efficient Material Removal: Powerful jets for effective material removal",
            ]
        },
        {
            conjet: "CONJET ROBOT 101 NALTA",
            paragraph: "Offers precise, efficient hydro demolition with its semi-automated control and advanced technology. Its rugged construction and intuitive design ensure reliable performance and reduced operator fatigue in demanding industrial environments.",
            listItems: [
                "Advanced Technology: Incorporates state-of-the-art technology for precise, efficient hydro demolition",
                "Rugged Construction: Built to endure harsh conditions for lasting performance",
                "Semi-Automated Control: Enables precise operation with a controller, enhancing efficiency and accuracy",
                "Versatile Applications: Ideal for various hydro demolition tasks, both manual and automated",
            ]
        },
        {
            conjet: "NLB NCG24-535 HAND LANCE",
            paragraph: "Premium tool for semi-automated hydro demolition, offering enhanced precision and efficiency with its advanced controller. Its robust construction, ergonomic design, and high-pressure capabilities make it ideal for demanding industrial tasks.",
            listItems: [
                "Ergonomic Design: Reduces fatigue and enhances comfort during use",
                "High-Pressure Capability: Delivers powerful jets for effective material removal",
                "Durable Construction: Engineered to endure rigorous industrial environments.",
                "Semi-Automated Control: Allows precise control with a controller, improving efficiency",
            ]
        },
    ];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setPage(() => "");
    }, [setPage]);

    return (
        <div className="App">
            <div className="section section-bg">
                <div className="column slider-column">
                    <div className='slider-container'>
                        <div className="slider">
                            <p className='barcode conjet-spacing'>{slideTexts[currentSlide].conjet}</p>
                            {slides.map((image, index) => (
                                <div
                                    key={index}
                                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="slider-dots">
                            {slides.map((_, index) => (
                                <React.Fragment key={index}>
                                    <span
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></span>
                                    {index < slides.length - 1 && <div className="line"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="column text-column rajdhani-semibold">
                    <p className='list-dotparts-wj1'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list left-spacing-3'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
