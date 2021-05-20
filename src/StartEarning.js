import classes from './StartEarning.module.css'
import coinbg from './images/coinbase_BG.jpg'

function Startearning() {
    return (
        <section className={classes.section}>
            <div className={classes.div}>
                <div className={classes.innerdiv}>
                    <h2 className={classes.heading}>Earn up to $28 worth of crypto</h2>
                    <p className={classes.paragraphs}>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <div>
                        <button type='primary' className={classes.buttons}>
                            <span className={classes.spans}>Start earning</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.div}>
                <div className={classes.imagedivs}>
                    <img src={coinbg} alt="Spaceman"></img>
                </div>
            </div>
        </section>
    )
}

export default Startearning;