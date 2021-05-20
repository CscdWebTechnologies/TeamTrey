import React from 'react'
import './Footer.css'
import footer_logo from './Assets/logo.svg'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-wrapper'>
                    <div className='footer-link1'>
                        <div className='footer-inner-wrapper1'>
                            <img className='footer-logo' src={footer_logo} alt="coinbase logo" />
                            <select className='select-language'>
                                <option className="Language" value='de'>Deutsch</option>
                                <option className='Language' selected value='en'> English</option>
                                <option className='Language' value='es'>Español - España</option>
                                <option className='Language' value='es-LA'>Español - América Latina</option>
                                <option className='Language' value='fr'>Français - France</option>
                                <option className='Language' value='id'>Bahasa Indonesia</option>
                                <option className='Language' value='it'>Italiano</option>
                                <option className='Language' value='ko'>한국어</option>
                                <option className='Language' value='p1'>Polski</option>
                                <option className='Language' value='pt'>Português - Brasil</option>
                                <option className='Language' value='pt-PT'>Português - Portugal</option>
                                <option className='Language' value='ru'>Pусский</option>
                                <option className='Language' value='th'>ไทย</option>
                                <option className='Language' value='tr'>Türkçe</option>
                            </select>
                            <div className='div-link1'>
                                <div className="copyright-side"><a>© 2021 Coinbase</a> </div>
                                <div className="social">
                                    <a href="https://blog.coinbase.com/" title="The Coinbase Blog" className="coinbase-blog" color="slate" rel="noopener" target="_blank">Blog</a>
                                    <span className='dot1'>•</span>
                                    <a href="https://twitter.com/coinbase" title="Coinbase Twitter account" className="twitter" color="slate" rel="noopener" target="_blank">Twitter</a>
                                    <span className="dot1">•</span>
                                    <a href="https://www.facebook.com/Coinbase" title="Coinbase Facebook page" class="facebook" color="slate" rel="noopener" target="_blank">Facebook</a>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='footer-columns'>
                        <div>
                            <div className='footer-column1_1'>
                                <h2 className="footer_column_head">Company</h2>
                                <a className="footer_page">About</a>
                                <a className="footer_page">Careers</a>
                                <a className="footer_page">Affiliates</a>
                                <a className="footer_page">Blog</a>
                                <a className="footer_page">Press</a>
                                <a className="footer_page">Investors</a>
                                <a className="footer_page">Legal &amp; privacy</a>
                                <a className="footer_page">Cookie policy</a>
                            </div>
                            <div className='footer-column1_1'>
                                <h2 className="footer_column_head">Learn</h2>
                                <a className="footer_page">Browse Crypto prices</a>
                                <a className="footer_page">Crypto basics</a>
                                <a className="footer_page">Tips &amp; tutorials</a>
                                <a className="footer_page">Market updates</a>
                                <a className="footer_page">What is Bitcoin?</a>
                                <a className="footer_page">What is crypto?</a>
                                <a className="footer_page">What is a blockchain?</a>
                                <a className="footer_page">How to set up a crypto wallet</a>
                                <a className="footer_page">How to send crypto</a>
                                <a className="footer_page">Taxes</a>
                            </div>
                        </div>
                        <div>
                            <div className='footer-column1_1'>
                                <h2 className="footer_column_head">Individuals</h2>
                                <a className="footer_page">Buy &amp; sell</a>
                                <a className="footer_page">Earn free crypto</a>
                                <a className="footer_page">Wallet</a>
                                <a className="footer_page">Card</a>

                            </div>
                            <div className='footer-column1_1'>
                                <h2 className="footer_column_head">Businesses</h2>
                                <a className="footer_page">Prime</a>
                                <a className="footer_page">Custody</a>
                                <a className="footer_page">Asset Hub</a>
                                <a className="footer_page">Commerce</a>

                            </div>
                            <div className='footer-column1_1'>
                                <h2 className="footer_column_head">Developers</h2>
                                <a className="footer_page">Coinbase Cloud</a>
                                <a className="footer_page">Connect</a>
                                <a className="footer_page">Commerce</a>
                                <a className="footer_page">Pro</a>
                                <a className="footer_page">Bison Trails</a>
                                <a className="footer_page">WalletLink</a>
                                <a className="footer_page">Rosetta</a>
                                <a className="footer_page">USDC</a>

                            </div>
                        </div>
                        <div>
                            <div className='footer-column1_1'>
                                <h2 className="footer_column_head">Support</h2>
                                <a className="footer_page">Help center</a>
                                <a className="footer_page">Contact us</a>
                                <a className="footer_page">Create account</a>
                                <a className="footer_page">ID verification</a>
                                <a className="footer_page">Account information</a>
                                <a className="footer_page">Payment methods</a>
                                <a className="footer_page">Account access</a>
                                <a className="footer_page">Status</a>

                            </div>
                        </div>
                    </div>

                </div>
                <span className='footer-handle'></span>

            </div>


        </footer>
    )
}

export default Footer
