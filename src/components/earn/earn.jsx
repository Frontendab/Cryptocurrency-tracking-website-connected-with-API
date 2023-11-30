import { useState } from 'react';
import IMG_PHONE from '../../assets/trade.png';

export const Earn = () => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    const [emailTrade, setEmailTrade] = useState();
    const handleEmailTrade = (e) => {
        setEmailTrade(e.target.value);
    }
    return (
        <>
        <div className="Earn container">
            <div className="row">
                <div className="first col-lg-6 px-sm-0">
                    <img src={IMG_PHONE} alt="" />
                </div>
                <div className="second col-lg-6 px-sm-0 pt-sm-2">
                    <div className='content'>
                    <h1 className='fw-bold'>Earn passive income with
                        <br />
                        crypto.
                    </h1>
                    <p>Earn up 12% annual rewards on 30+ dujital assets. Simply <br />
                        hold your assets in the app to automatically earn rewards at <br />
                        the end of each month with no lockups and no limits. 
                    </p>
                    <form action="" className='btn-input d-flex' onSubmit={handleForm}>
                        <input type="text" name='email' value={emailTrade} onChange={handleEmailTrade} className='form-control' placeholder='Enter your email' required={emailTrade}/>
                        <button>Learn More</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}