import '../../styles/styles.css';

export default function H2Sec() {

    return (
            <div className="product-content">
      <div className="section section-bg-prst1">
            <div className="column">
              <p className='barcode left-spacing nlb-spacing'>NLB 225 SERIES WATER JETTING PUMP</p>
              <img src={require("../../assets/images/univ/x1.webp")} alt="Placeholder" className='p-image1 p-image1-spacing'/>
            </div>
            <div className="column1 text-column rajdhani-semibold">
              <p className='list-paragraph-1 left-spacing-1'>powerhouse in hydro demolition, expertly engineered to deliver water efficiently to the accessory for precise material removal. Its robust design ensures consistent high-pressure performance, making it an ideal choice for demanding demolition projects. </p>
              <ul>
                <li className='bullet-list left-spacing-1'>High Efficiency: Powerful, high-pressure water for material removal</li>
                <li className='bullet-list left-spacing-1'>Durable Construction: Built for demanding, long-lasting reliability</li>
                <li className='bullet-list left-spacing-1'>Advanced Technology: Features cutting-edge precision and performance</li>
                <li className='bullet-list left-spacing-1'>Versatile Applications: Suitable for maintenance and demolition tasks</li>
              </ul>
            </div>
          </div>


      <div className="divider"></div>
      <div className="section section-bg-prst2">
      <div className="section-imgtxt2 text-column rajdhani-semibold">
          <p  className='list-paragraph-2 left-spacing-2'>Durable and flexible accessory for manual hydro demolition, ensuring precise water delivery and reliable performance in tough environments. Lightweight and easy to handle, it enhances productivity and maintains safety standards.</p>
          <ul>
            <li className='bullet-list left-spacing-2'>High Flexibility: Enables precise, efficient water delivery in tasks</li>
            <li className='bullet-list left-spacing-2'>Lightweight Design: Easy handling, reduces fatigue, boosts productivity</li>
            <li className='bullet-list left-spacing-2'>User-Friendly: Simplifies operation, accessible for all skill levels.</li>
            <li className='bullet-list left-spacing-2'>Reliable Performance: Consistently delivers high-pressure water for demolition</li>
          </ul>
        </div>
        <div className="column image-column spir-barcode">
            <p className='barcode'>SPIR STAR HIGH PRESSURE HOSE</p>
          <img src={require("../../assets/images/univ/x2.webp")} alt="Placeholder" className='p-image2'/>
        </div>
      </div>
        </div>
    )
}