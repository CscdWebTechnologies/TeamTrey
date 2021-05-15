import classes from './GetStarted.module.css'
import account from './images/Account.png'
import bank from './images/Bank.png'
import hand from './images/Hand.png'

function GetStarted() {
    return (
        <section className={classes.sections}>
            <div className={classes.mainDiv}>
                <h2 className={classes.heading1}>Get started in a few minutes</h2>
                <h2 className={classes.heading2}>Coinbase supports a variety of the most popular digital currencies.</h2>
                <div className={classes.divIcons}>
                    <div>
                        <img src={account} className={classes.center} alt="Account"></img>
                        <h2 className={classes.innerText}>Create an account </h2>
                    </div>
                    <div className={classes.horizontalbar}></div>
                    <div>
                        <img src={bank} className={classes.center} alt="Bank"></img>
                        <h2 className={classes.innerText}>Link your bank account</h2>
                    </div>
                    <div className={classes.horizontalbar}></div>
                    <div>
                        <img src={hand} className={classes.center} alt="Hand"></img>
                        <h2 className={classes.innerText}>Start buying & selling</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;