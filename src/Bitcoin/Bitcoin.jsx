import { useEffect, useState } from "react"
import { getBitcoinPrice } from "../client";
import Spinner from "../Spinner/Spinner";

const Bitcoin = ({ x = 5 }) => {
    const [price, setPrice] = useState();
    const [showSpinner, setShowSpinner] = useState(false)

    const fetchPrice = async () => {
        setShowSpinner(true)
        const updatedPrice = await getBitcoinPrice();
        setShowSpinner(false)
        setPrice(updatedPrice);
        document.title = updatedPrice;
    }

    useEffect(() => {
        // getBitcoinPrice().then((updatedPrice) => {
        //     setPrice(updatedPrice);
        // }).catch((e) => alert("Error fetching price"));      
        
        fetchPrice();
        document.title = "ביטקוין";

        setInterval(() => {
            fetchPrice();
        }, x * 1000)
    }, [])
    console.log(showSpinner);

    return (<>
        {/* {!price && <div>Loading... </div>} */}
        {showSpinner && <Spinner />}

        {price && <div>
            Bitcoin price: {price}
        </div>}

    </>
    )
}

export default Bitcoin