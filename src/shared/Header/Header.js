import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 bg-teal-600 p-5">
                <div className="navbar-start">

                    <a href='/' className="btn btn-ghost normal-case text-xl">Daisy's Cooking Service</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link className='font-normal' to="/cart">Cart</Link>
                        <li tabIndex={0}>
                        </li>
                        <Link className='font-normal' to="/order">Order</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="signup" className='btn'>Sign up</Link>
                </div>
            </div>
        </div >
    );
};

export default Header;