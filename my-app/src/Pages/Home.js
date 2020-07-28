import React, {Component} from 'react';
import ShowCaseItem from "../Components/showCase";
import itemList from "../Cart/ItemList";
import {CartBlock} from "../Cart/CartBlock";
import './Home.css';

class Home extends Component {
    //этот компонент является parent для ShowCaseItem и CartBlock, поэтому можно хранить state тут
    constructor(state) {
        super(state);
        this.state = {
            data: []
        };

        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
    }

    componentDidMount() {
        //при загрузки страницы мы получаем список из localStorage и если там есть данные, то
        // записываем в state

        //cartList лист сейчас сохраняется как массив объектов

        const cartList = JSON.parse(localStorage.getItem('cart'));
        if (cartList && cartList.length) {
            this.setState({data: cartList});
        }
    }

    addToCart(product) {
        //получаем товары в корзине из localStorage
        const cartList = JSON.parse(localStorage.getItem('cart'));

        //делаем проверку, есть ликорзина в localStorage и есть ли в ней товары
        if (cartList && cartList.length) {
            //если корзина с товарами есть, то делаем проверку, есть ли в ней уже наш товар
            const productIndex = cartList.findIndex(item => item.ID === product.ID);

            //если товар есть в корзине, то увеличим его count
            if (productIndex !== -1) {
                //если значения count еще нет, то значит товар в корзине в одном экземляре и мы
                // записываем значение 2
                //если count уже есть, то просто наростим значение на 1
                cartList[productIndex].count = cartList[productIndex].count ? ++cartList[productIndex].count : 2;

                //запишем наш измененный массив в state и localStorage
                this.setState({data: cartList}, () => {
                    localStorage.setItem('cart', JSON.stringify(cartList));
                });
                return;
            }
        }

        //если корзина пуста или в ней еще нет нашего товара, то добавляем в массив новый товар
        this.setState({data: [...this.state.data, product]}, () => {
            localStorage.setItem('cart', JSON.stringify([...this.state.data]));
        });

    }

    deleteFromCart(el) {
        let cartList = JSON.parse(localStorage.getItem('cart'));
        cartList.splice(cartList.findIndex(item => item.ID === el.ID), 1)
        this.setState({data: cartList}, () => {
            localStorage.setItem('cart', JSON.stringify(cartList));
        });
    }


    render() {
        return (
            <div className="home">
                <ShowCaseItem carts={itemList} addToCart={this.addToCart}/>
                <CartBlock deleteFromCart={this.deleteFromCart} cart={this.state.data}/>
                <div className="padding"/>
            </div>
        );
    }
}

export default Home;
