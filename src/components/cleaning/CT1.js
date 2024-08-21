import React, { useState, useEffect, useContext } from 'react';
import "../../styles/clt1.css";
import ColorContext from '../../context/ColorContext';
import gridLinesImage from "../../assets/images/univ/grid_lines.svg";
import Navbar from "../hero/components/Navbar";
import UCMenu from "../UCMenu";
import Klenco from "../slider/Klenco";
import PageContext from '../../context/PageContext';
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import CT1S from "../dotparts/CT1S";

const CT1 = () => {
  const { color } = useContext(ColorContext); // Get color from ColorContext
  const [glitch, setGlitch] = useState(false);
  const [imageSet, setImageSet] = useState('cif1'); // 'g' for g1-g4 and 's' for s1-s4
  const [clickedLink, setClickedLink] = useState(null); // Track clicked link index
  const [nextLinkIndex, setNextLinkIndex] = useState(null); // Track next link index for automatic change
  const [timeoutId, setTimeoutId] = useState(null); // Track timeout ID for clearing
  const [isHovered, setIsHovered] = useState(false); // Track hover state




  const linkTexts = [
    { text: 'Industrial facility', set: 'cif1' },
    { text: 'Factories', set: 'cf1' },
  ];

  const handleGlitchChange = (newSet, index) => {
    setImageSet(newSet);
    setGlitch(true);
    setClickedLink(index);
    clearTimeout(timeoutId); // Clear any existing timeout
    setTimeout(() => setGlitch(false), 500); // Duration of the glitch animation

    const timeout = setTimeout(() => {
      const nextIndex = (index + 1) % linkTexts.length;
      setNextLinkIndex(nextIndex);
    }, 4000);

    setTimeoutId(timeout);
  };

  useEffect(() => {
    if (nextLinkIndex !== null) {
      const timeout = setTimeout(() => {
        if (!isHovered) {
          const nextLink = linkTexts[nextLinkIndex];
          handleGlitchChange(nextLink.set, nextLinkIndex);
        }
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [nextLinkIndex, isHovered]);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };



    // Scroll to top on component mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Automatically click the first featured link on page load
  useEffect(() => {
    if (linkTexts.length > 0) {
      handleGlitchChange(linkTexts[0].set, 0);
    }
  }, []);
  

  return (
    <div className="text-table-wglitch-wj3 cleaning-bg">
      <UCMenu />
      <div className="center-container">
        <div>
          <table className="rajdhani-regular">
            <div
              className="grid-lines-overlay-wj4"
              style={{ zIndex: -2, backgroundImage: `url(${gridLinesImage})`, backgroundSize: '100%', opacity: 0.5 }}
            />
            <tbody>
              <tr>
                <td className="featured-text" style={{ color: color.color }}>Featured Use Cases</td>
              </tr>
              {linkTexts.map((link, index) => (
                <tr key={index}>
                  <td>
                    <span
                      onClick={() => handleGlitchChange(link.set, index)}
                      onMouseEnter={() => handleHover(true)}
                      onMouseLeave={() => handleHover(false)}
                      className={`featured-link ${clickedLink === index ? 'loading-underline' : ''}`}
                      style={{
                        '--loading-line-color': color.color, // Set loading line color from context
                        '--hover-color': color.color // Set the hover color from context
                      }}
                    >
                      {link.text}
                    </span>
                    {clickedLink === index && <div className="loading-line"></div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={`glitch-ct1 ${glitch ? `glitch-active-${imageSet}` : `glitch-static-${imageSet}`}`}></div>
          <h3 className="sub-heading orbitron" style={{ color: color.color }}>- - - </h3>
          <h1 className="main-heading rajdhani-medium">VACUUM SOLUTION</h1>
        </div>

        <div className="divider"></div>
        <Klenco />
        <div className="divider"></div>








        <div className="product-content">
        <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode left-spacing nlb-spacing'>TYPHOON R590</p>
          <img src={require("../../assets/images/cleaning/ct1/ct11.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1 left-spacing-1'>Designed to keep high-pressure water jetting equipment operating at peak performance. A powerful tool for heavy-duty cleaning and hydro demolition tasks, ensuring reliable and efficient operation in the most demanding environments</p>
          <ul>
            <li className='bullet-list left-spacing-1'>High Pressure: Delivers powerful water jets for demolition</li>
            <li className='bullet-list left-spacing-1'>Precision Control: Ensures accurate and efficient operations</li>
            <li className='bullet-list left-spacing-1'>Robust Build: Withstands harsh industrial conditions reliably</li>
            <li className='bullet-list left-spacing-1'>Automated Features: Streamlines tasks with minimal manual input.</li>
          </ul>
        </div>
      </div>


      <div className="divider"></div>
      <div className="section section-ct2">
      <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-2 left-spacing-2'>A versatile, cordless vacuum designed for both mobility and performance. With powerful suction and HEPA filtration, it effectively handles demanding cleaning tasks while its compact, durable design ensures ease of use in any environment.</p>
          <ul>
            <li className='bullet-list left-spacing-2'>Cordless Operation: Offers mobility without power cords</li>
            <li className='bullet-list left-spacing-2'>HEPA Filtration: Captures fine dust particles efficiently</li>
            <li className='bullet-list left-spacing-2'>Powerful Suction: Ensures thorough cleaning performance</li>
            <li className='bullet-list left-spacing-2'>Quiet Operation: Minimizes noise during use effectively</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode'>MAKITA DVC862LZ</p>
          <img src={require("../../assets/images/cleaning/ct1/ct12.png")} alt="Placeholder" className='p-image1'/>
        </div>
      </div>

      
      <div className="divider"></div>

      <div className="product-content">
      <div className="section section-ct1">
        <div className="column image-column">
        <p className='barcode left-spacing nlb-spacing'>KIEKENS dmf/s</p>
          <img src={require("../../assets/images/cleaning/ct1/ct13.png")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
        </div>
        <div className="column text-column rajdhani-semibold">
          <p  className='list-paragraph-1 left-spacing-1'>Powerful, high-airflow units designed for versatile industrial applications, including metalworking, plastics, electronics, and more. Featuring high-efficiency filtration, large dust collection capacity, and flexible configuration options.</p>
          <ul>
            <li className='bullet-list left-spacing-1'>High Filtration: Captures fine particles with precision</li>
            <li className='bullet-list left-spacing-1'>Modular System: Easily customizable for various needs</li>
            <li className='bullet-list left-spacing-1'>Low Maintenance: Designed for easy and infrequent upkeep</li>
            <li className='bullet-list left-spacing-1'>Energy Efficient: Optimizes power usage during operation</li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>






    <CT1S />
      </div>





      

      
      </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default CT1;
