import React from 'react';
import './cartMarkUP.css';
import './deleteButton.css';


export const CartBlock = ({cart, deleteFromCart}) => {
    const cartItem = cart.map((objects, index) => {
        let prise; let count;
        if(objects.count === undefined){
            prise = objects.prise;
            count = 1;
        } else {
            prise = (objects.prise * objects.count)
            count = objects.count;
        }
        return (
            <div className='cartBox' key={index}>
                <div className="cart-box__item">
                    <div className="cart__info">
                        <img src={objects.image}/>
                        <span className="cartItemTitle"> {objects.title} </span>
                    </div>
                    <div className="cart-user__info">
                        <span className="cartItemPrise user__item">Prise: {prise} </span>
                        <span className="cartItemCount user__item">Count: {count} </span>
                    </div>
                    <div className="cart__menu">
                        <span className="edit__button" href="#">EDIT</span>
                        <span className="delete__button" onClick={()=> {deleteFromCart(objects)}}>DELETE</span>
                    </div>
                </div>
            </div>
        )
    });

    return (

        <div id="cartComp">
            <div className="cartList">
                <div className="list">
                    {cartItem}
                </div>
            </div>
        </div>


    )

};
