import { useEffect, useState } from 'react'
import { fetchProducts } from '../productsApi'
import "./ProductsPage.css"
import { useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '../../../app/redux/cartSelectors'
import { setCart } from '../../../app/redux/cartSlice'
import { useTranslation } from 'react-i18next'
// import { Button } from 'react-bootstrap'
import { Button } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import toast from 'react-hot-toast'

const ProductsPage = () => {
    const { t } = useTranslation()
    const nav = useNavigate();
    const dispatch = useDispatch();

    // const { cart, setCart } = useContext(AppContext);
    const cart = useSelector(selectCart);

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts().then((products_) => {
            setProducts(products_)
        })
    }, [])

    const addProductToCart = (product) => {
        const cartCopy = [...cart]
        // check if already exists
        const index = cartCopy.findIndex((p) => p.data.id === product.id);

        if (index !== -1) { // if exists!
            // create copy of the product, with updated amount

            const productCopy = { ...cartCopy[index] }
            productCopy.amount += 1;
            cartCopy[index] = productCopy;

            // const updatedProduct = {
            //     ...cartCopy[index],
            //     amount: cartCopy[index].amount + 1,
            // };
            // cartCopy[index] = updatedProduct;
        } else {
            // push
            cartCopy.push({ data: product, amount: 1 });
        }

        // setCart(cartCopy);
        dispatch(setCart(cartCopy))
    }

    const removeProductFromCart = (product) => {
        let cartCopy = [...cart]

        const index = cartCopy.findIndex((p) => p.data.id === product.id);

        if (index !== -1) { // exists

            const productCopy = { ...cartCopy[index] }
            productCopy.amount -= 1;

            if (productCopy.amount > 0) {
                // override product
                cartCopy[index] = productCopy;
            } else {
                // delete 
                cartCopy.splice(index, 1);
            }
            dispatch(setCart(cartCopy));
        }
    }

    const getAmountInCart = (id) => {
        const pInCart = cart.filter((p) => p.data.id === id)[0];

        if (pInCart)
            return pInCart.amount;
        else
            return 0;
    }
    const handleAdd = (p) => {
        addProductToCart(p)

        toast(t("product-added"), {
            duration: 4000,
            position: 'bottom-right',
            icon: '👏',
            removeDelay: 1000,
            })
    }
    return (
        <div>
            {products?.map((p) => {
                return <ProductCard key={p.id}>
                    <div className='p-row'>
                        <p onClick={() => { nav("/product/" + p.id) }}> {p.id} - {p.name} </p>
                        <div>
                            {/* <img className='clickable' onClick={() => addProductToCart(p)} style={{ width: "20px" }} src='data:image/png;base64,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' /> */}
                            <AddShoppingCartIcon onClick={()=>handleAdd(p)} />
                            <span> {getAmountInCart(p.id)}</span>
                            {getAmountInCart(p.id) !== 0 &&
                                <Button variant="contained" color="error" onClick={() => removeProductFromCart(p)} >  {t("remove-from-cart")}
                                </Button>
                            }
                        </div>
                    </div>
                </ProductCard>
            })}
        </div>
    )
}

export default ProductsPage