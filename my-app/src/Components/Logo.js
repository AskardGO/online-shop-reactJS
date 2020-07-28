import React, {Component} from 'react';
import QW from './images/QW-shop_animated.svg'
import Vivus from 'vivus';



class Logo extends Component {

    componentDidMount() {
        let vivus = new Vivus('graph', {duration: 200, file: QW}, null)
    };

    render() {
        return (
            <div className="logo">
                <div id="graph"></div>
            </div>
        );
    }
}

export default Logo;