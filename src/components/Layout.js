import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/index.scss';
import layoutStyles from '../styles/layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {children}
            </div>
            <Footer/>
        </div>   
    )
}

export default Layout;