const cart = receipt()


for (let key in cart){
    console.log(key);

    for (let newKey in cart[key]){
        console.log(cart[key][newKey]);
        
    }
}

