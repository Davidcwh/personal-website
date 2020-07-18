import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/index.scss';
import layoutStyles from '../styles/layout.module.scss';

const Layout = ({ children, isHome }) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header isHome={isHome}/>
                {children}
            </div>
            <Footer/>
        </div>   
    )
}

export default Layout;