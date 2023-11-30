import { useState } from 'react';
import img_home from '../../assets/hero-img.png';

export const Home = () => {
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleForm = (e) => {
        e.preventDefault();
    }
    return (
        <>
        <div className="HOME container">
            <div className="row">
            <div className="col-lg-6 px-4 py-2">
            <p>Buy & Sell Crypto 24/7 using your retirement account</p>
            <h1>Invest in <br />
                Cryptocurreny with <br />
                Your IRA
            </h1>
            <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>
                <form onSubmit={handleForm} className="btn-input d-flex">
                    <input type="email" name='Email User' className="form-control" value={email} onChange={handleEmail} placeholder="Enter your email" require={email}/>
                    <button>Learn More</button>
                </form>
            </div>
            <div className="col-lg-6 px-4 py-2">
                <img src={img_home} style={{width: '100%'}} alt="" />
            </div>
            </div>
        </div>
        </>
    )
}