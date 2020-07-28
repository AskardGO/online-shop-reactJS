// import React, {Component} from "react";
// import './cartMarkUP.css';
//
// function addCart(props) {
// /*    const raw = localStorage.getItem('cart');
//     if (raw != null && this.state.data.length === 0) {
//         this.state.data = JSON.parse(raw);
//     }
//
//     if (this.state.data.length === 0) {
//         addNewElement();
//     } else {
//         for (let i = 0; i < this.state.data.length; i++) {
//             if (this.state.data[i].ID === props.ID && this.state.data[i].ID !== undefined) {
//                 this.state.data[i].count++;
//                 console.log(this.state.data);
//                 console.log(this.state.data[i].ID)
//
//                 cartUpdate();
//                 return;
//             } else {
//                 var dataUndef = this.state.data[i].ID;
//             }
//         }
//
//         if(dataUndef !== undefined){
//             addNewElement();
//             cartUpdate();
//         } else {
//             console.log("ID is undefined")
//         }
//
//     }
//
//
//     function addNewElement() {
//         props['count'] = 1;
//         this.state.data.push(props);
//     }
//
//     function cartUpdate() {
//         localStorage.setItem('cart', JSON.stringify(this.state.data));
//     }*/
//
//
// }
//
// class CartBlock extends Component {
// /*
//     constructor(state) {
//         super(state);
//         this.state = {
//             data: []
//         }
//     }
//
//
//
//     componentDidMount() {
//         this.setState({data: JSON.parse(localStorage.getItem('cart'))});
//     }
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return this.state.data !== nextState.data
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//         console.log("Hi, pupsik")
//     }
//
//     addCart (){
//       console.log('addCart');
//     };*/
//     render() {
//
//         const cartItem = this.state.data.map((objects) => {
//             return (
//                 <li className='cartBox'>
//                     <span className="cartItemTitle"> {objects.title} </span>
//                     <span className="cartItemPrise"> {objects.prise} </span>
//                     <span className="cartItemCount"> {objects.count} </span>
//                 </li>
//             )
//         });
//
//
//         return (
//             <ul className="cartList">
//               {cartItem}
//             </ul>
//         );
//     }
// }
//
// export {addCart, CartBlock}
