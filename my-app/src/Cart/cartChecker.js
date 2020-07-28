function cartVisibility(e) {
    const cartBlock = document.querySelector("#cartComp");
    const cartList = document.querySelector(".cartList");
    const cartPlace = document.querySelector(".cart-place");

    if(e.target.checked){
        cartList.style.transform = "translateX(0)";
        cartBlock.style.opacity = "1";
        cartPlace.style.transform = "translateX(0)";

    } else {
        cartList.style.transform = "translateX(100%)";
        cartBlock.style.opacity = "0";

        window.setTimeout(()=>{cartPlace.style.transform = "translateX(10%)"}, 200);
    }
}

export default cartVisibility;