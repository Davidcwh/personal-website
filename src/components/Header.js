import React from 'react';
import { Link } from 'gatsby';
import headerStyles from '../styles/header.module.scss';
import Title from './Title'

const Header = ({ isHome }) => {
    return (
        <header className={headerStyles.header}>
           <Title styles={headerStyles} isHome={isHome}/>
            <nav className={headerStyles.navContainer}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;