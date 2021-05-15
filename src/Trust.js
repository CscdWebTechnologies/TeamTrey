import React from 'react';

const Trust = () => {
    return (
        <section className="trust">
            <div className="header">
                <h3>The most trusted cryptocurrency platform</h3>
                <p>Here are a few reasons why you should choose Coinbase</p>
            </div>
            <div className="body">
                <div className="item">
                    <img src="images/secure.svg" alt="Secure" />
                    <h3>Secure storage</h3>
                    <p>We store the vast majority of the digital assets in secure offline storage.</p>
                    <a href="#">Learn how Coinbase keeps your funds safe and secure {">"}</a>
                </div>
                <div className="item">
                    <img src="images/insurance.svg" alt="Insurance" />
                    <h3>Protected by insurance</h3>
                    <p>Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                    <a href="#">Learn how your crypto is covered by our insurance policy {">"}</a>
                </div>
                <div className="item">
                    <img src="images/practices.svg" alt="Practices" />
                    <h3>Industry best practices</h3>
                    <p>Coinbase supports a variety of the most popular digital currencies.</p>
                    <a href="#">Learn how we implement industry best practices for account security {">"}</a>
                </div>
            </div>
        </section>
    );
}

export default Trust;
