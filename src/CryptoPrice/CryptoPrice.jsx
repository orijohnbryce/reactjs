import React, { useState } from 'react'
import { fetchPrice } from '../api/cryptoPricesApi'

const CryptoPrice = () => {

    const [coin, setCoin] = useState("")
    const [price, setPrice] = useState(-1)
    const [err, setErr]= useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setPrice(-1)
        setErr("")
        try {
            const res = await fetchPrice(coin);
            console.log(res);

            if (res.Response === "Error"){
                setErr(res.Message);
                return;
            }
            
            // parse the return format to extract the price
            const price_ = res[coin].USD
            console.log(price_);
            
            setPrice(price_)
        } catch (error) {
            console.log(error);
            setErr(error.Message)
        }
    }
    return (
        <div>
            <h1> Crypto price finder </h1>
            <form onSubmit={handleSubmit}>
                <input required min={3} max={5} value={coin} onChange={(e) => setCoin(e.target.value)} />
                <button> Find Price </button>
            </form>

            {price !== -1 && <h4> {price }</h4>}
            {err?.length > 0 && <p> {err}</p>}
        </div>
    )
}

export default CryptoPrice