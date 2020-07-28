import React from "react";
import './itemMarkUp.css'
import Item from "./item";

function ShowCaseItem({carts, addToCart}) {

    return (
        <div className='cart-place'>
            <Item carts={carts} addToCart={addToCart}/>
        </div>
)
}

export default ShowCaseItem;
