export function addProductToCart(product, cart, setCart) {    
    const cartCopy = [...cart]
        // check if already exists
        const exists = cart.filter((p) => p.data.id === product.id)[0];
        if (exists) {
            // update amount
            exists.amount += 1;
        } else {
            // push
            cartCopy.push({ data: product, amount: 1 });
        }
        setCart(cartCopy);
}