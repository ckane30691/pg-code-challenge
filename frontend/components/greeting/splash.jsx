import React from 'react';

class Splash extends React.Component {

    render() {
        return (
            <div className="splash-body">
              
                <div className="splash-header">
                    <div className="header-links-ctnr">
                      <a href=''>Products</a>
                      <a href=''>Membership</a>
                      <a href=''>Our Mission</a>
                    </div>

                    <h1>Public Goods</h1>

                      <div className="header-links-ctnr">
                        <a href=''>Sign Up</a>
                        <a href=''>Login</a>
                        <a href=''>Cart</a>
                      </div>
                </div>

                <div className='hero-ctnr'>
                    <h1 className='hero-title'>
                      We make healthy products,
                      minus the unhealthy profits.
                    </h1>

                    <h2>
                      Care about your health and the planet,
                      but don't want to pay the inflated price?
                      You've come to the right place
                    </h2>

                    <button>Join Today</button>

                </div>
            </div>
        );
    }
}

export default Splash;
