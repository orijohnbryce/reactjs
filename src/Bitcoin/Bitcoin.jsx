import { useEffect, useState } from "react"
import { getBitcoinPrice } from "../client";

const Bitcoin = () => {
    const [price, setPrice] = useState();

    const fetchPrice = async () => {
        const updatedPrice = await getBitcoinPrice();
        setPrice(updatedPrice);
    }
    
    useEffect(() => {        
        // getBitcoinPrice().then((updatedPrice) => {
        //     setPrice(updatedPrice);
        // }).catch((e) => alert("Error fetching price"));        
        fetchPrice();
        document.title = "ביטקוין";
    }, [])

    return (<>
        {!price && <div>Loading... </div>}

        {price && <div>
            Bitcoin price: {price} 
            
            </div>}

    </>
    )
}

export default Bitcoin