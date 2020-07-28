import React from "react";
import './itemMarkUp.css';
import './itemElements.css';


function Item({carts, addToCart}) {
  
    const elements = carts.map((cart, index) => {
        return (
            <div className='cart' onClick={ () => {addToCart(cart)} } key={index}>
                <span className='itemPicture'>
                    <img alt='' src={cart.image}/>
                </span>
                <span className='itemData'>
                    <span className='itemName'>
                        {cart.title}
                    </span>
                    <span className='itemPrice' id='addToCart'>
                        {cart.prise}
                    </span>
                </span>

            </div>
        )
    });

    return (
        <div className='elements'>
            {elements}
        </div>
    )


}

export default Item;
