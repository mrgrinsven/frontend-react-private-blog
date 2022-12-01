import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css'

const Navigation = ({auth, authToggle}) => {
    return (
        <nav>
            <ul className='nav-list'>
                <li className='nav-list-item'>
                    <NavLink
                        className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                        to="/"
                    >
                        home
                    </NavLink>
                </li>

                <li className='nav-list-item'>
                    {auth &&
                        <NavLink
                            className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                            to="/blogposts"
                        >
                            blog overzicht
                        </NavLink>

                    }
                </li>

                <li className='nav-list-item'>
                    {auth ?
                        <button
                            type='button'
                            onClick={() => authToggle(false)}
                        >
                            uitloggen
                        </button>
                        :
                        <NavLink
                            className={({isActive}) => isActive ? 'active-nav-link' : 'nav-link'}
                            to="/login"
                        >
                            login
                        </NavLink>
                    }
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;