import React from "react";
import './old-headerMarkUp.css'

function OldHeader() {
    return (
        <div className='head'>
            <div className='admin-menu'></div>
            <div className='title'>
                <a href='#' className='title-value'>QWShop</a>
            </div>
            <nav className='navigation'>
                <ul>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Cart</a></li>
                    <li><a href=''>Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default OldHeader;