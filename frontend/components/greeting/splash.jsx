import React from 'react';

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-body">

                <div className="splash-header">
                    <div className="header-links-ctnr">
                      <a href=''>PRODUCTS</a>
                      <a href=''>MEMBERSHIP</a>
                      <a href=''>OUR MISSION</a>
                    </div>

                    <h1>PUBLIC <br></br> GOODS</h1>

                      <div className="header-links-ctnr">
                        <a href=''>SIGN UP</a>
                        <a href=''>LOGIN</a>
                        <a href=''>CART</a>
                      </div>
                </div>

                <div className='hero-ctnr'>
                  <img className="hero-img"
                    alt="hero image"
                    src="https://s3.amazonaws.com/public-goods/Screen+Shot+2018-07-01+at+2.46.03+PM.png"/>

                    <h1 className='hero-title'>
                      We make healthy <br></br> products,
                      minus the <br></br> unhealthy profits.
                    </h1>

                    <h2 className="hero-description">
                      Care about your health and the planet, <br></br>
                      but don't want to pay the inflated price? <br></br>
                      You've come to the right place
                    </h2>

                    <button className="join-today">Join Today</button>

                </div>

                <div className="promise-ctnr">
                  <h1>THE PUBLIC GOODS PROMISE</h1>
                  <ul className="promise-list">
                    <li className="promise-item-ctnr">
                      <img className="promise-img"
                        src="https://s3.amazonaws.com/public-goods/Screen+Shot+2018-07-01+at+3.34.54+PM.png"
                        alt="star" />
                      <h2>Premium Products At Cost</h2>
                      <p>We create healthy premium products— <br></br>
                        starting with bathroom essentials—and
                        then <br></br> sell them to members with zero markup.
                      </p>
                    </li>

                    <li className="promise-item-ctnr">
                      <img className="promise-img"
                        src="https://s3.amazonaws.com/public-goods/Screen+Shot+2018-07-01+at+3.35.03+PM.png"
                        alt="piggy bank" />
                      <h2>Astounding Savings</h2>
                      <p>We’ve done the math, and you’ll save <br></br> as much
                        as $70 a month—just with our <br></br>
                        personal care products.
                      </p>
                    </li>

                    <li className="promise-item-ctnr">
                      <img className="promise-img"
                        src="https://s3.amazonaws.com/public-goods/Screen+Shot+2018-07-01+at+3.35.17+PM.png"
                        alt="calendar" />
                      <h2>Launching New Products Every Month</h2>
                      <p>We’re already developing toxin-free <br></br> household
                        cleaners, baby products and <br></br> organic cotton
                        linens. The more we add, <br></br> the more you save.
                      </p>
                    </li>

                    <button className="promise-button">Join Today</button>
                  </ul>
                </div>
            </div>
        );
    }
}

export default Splash;
