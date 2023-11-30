import { useEffect, useState } from "react";
import axios from 'axios';
import { BsArrowUpRight , BsArrowDownLeft} from 'react-icons/bs';

export const TopCrypto = () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";
    const [data, setData] = useState();

    useEffect(() =>{
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    if(!data) return null;

    return (
        <div className="crypto container-fluid">
            <div className="bg-style"></div>
        <div className="container">
        <div className="row">
        <div className="first col-lg-6 py-5 py-lg-0">
            <h1>Exporte top Crypto's Like <br />
                Bitcoin, Ethereum, and <br />
                Dogecoin
            </h1>
                <p>See all available assets: Cryptocurrencies and NET'S</p>
                <button cnpm lassName="btn btn-primary">See More Coins</button>
        </div>
        <div className="second col-lg-6">
        <div className="boxs">
            <div className="box shadow bg-body rounded">
                <img src={data[0].image} alt={data[0].name} />
                <p>{data[0].name}</p>
                <p>${data[0].current_price.toLocaleString()}</p>
                <p>{data[0].price_change_percentage_24h > 0 ? (
                    <span className="price_change_percenter_green"><BsArrowUpRight />{data[0].price_change_percentage_24h.toFixed(2)}%</span>
                ) : (
                    <span className="price_change_percenter_red"><BsArrowDownLeft />{data[0].price_change_percentage_24h.toFixed(2)}%</span>
                )}</p>            
            </div>
            <div className="box shadow bg-body rounded">
                <img src={data[1].image} alt={data[1].name} />
                <p>{data[1].name}</p>
                <p>${data[1].current_price.toLocaleString()}</p>
                <p>{data[1].price_change_percentage_24h > 0 ? (
                    <span className="price_change_percenter_green"><BsArrowUpRight />{data[1].price_change_percentage_24h.toFixed(2)}%</span>
                ) : (
                    <span className="price_change_percenter_red"><BsArrowDownLeft />{data[1].price_change_percentage_24h.toFixed(2)}%</span>
                )}</p>            
            </div>
            <div className="box shadow bg-body rounded">
                <img src={data[2].image} alt={data[2].name} />
                <p>{data[2].name}</p>
                <p>${data[2].current_price.toLocaleString()}</p>
                <p>{data[2].price_change_percentage_24h > 0 ? (
                    <span className="price_change_percenter_green"><BsArrowUpRight />{data[2].price_change_percentage_24h.toFixed(2)}%</span>
                ) : (
                    <span className="price_change_percenter_red"><BsArrowDownLeft />{data[2].price_change_percentage_24h.toFixed(2)}%</span>
                )}</p>            
            </div>
            <div className="box shadow bg-body rounded">
                <img src={data[3].image} alt={data[3].name} />
                <p>{data[3].name}</p>
                <p>${data[3].current_price.toLocaleString()}</p>
                <p>{data[3].price_change_percentage_24h > 0 ? (
                    <span className="price_change_percenter_green"><BsArrowUpRight />{data[3].price_change_percentage_24h.toFixed(2)}%</span>
                ) : (
                    <span className="price_change_percenter_red"><BsArrowDownLeft />{data[3].price_change_percentage_24h.toFixed(2)}%</span>
                )}</p>            
            </div>
            <div className="box shadow bg-body rounded">
                <img src={data[4].image} alt={data[4].name} />
                <p>{data[4].name}</p>
                <p>${data[4].current_price.toLocaleString()}</p>
                <p>{data[4].price_change_percentage_24h > 0 ? (
                    <span className="price_change_percenter_green"><BsArrowUpRight />{data[4].price_change_percentage_24h.toFixed(2)}%</span>
                ) : (
                    <span className="price_change_percenter_red"><BsArrowDownLeft />{data[4].price_change_percentage_24h.toFixed(2)}%</span>
                )}</p>
            </div>
            <div className="box shadow bg-body rounded">
                <img src={data[5].image} alt={data[5].name} />
                <p>{data[5].name}</p>
                <p>${data[5].current_price.toLocaleString()}</p>
                <p>{data[5].price_change_percentage_24h > 0 ? (
                    <span className="price_change_percenter_green"><BsArrowUpRight />{data[5].price_change_percentage_24h.toFixed(2)}%</span>
                ) : (
                    <span className="price_change_percenter_red"><BsArrowDownLeft />{data[5].price_change_percentage_24h.toFixed(2)}%</span>
                )}</p>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}