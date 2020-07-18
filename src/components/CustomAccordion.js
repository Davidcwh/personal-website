import React, { Component } from 'react';
import accordionStyles from '../styles/CustomAccordion.module.scss';

export default class CustomAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false, title: props.title, content: props.content};
    }
    

    handleClick = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen })
    }

    render() {
        const { isOpen, title, content } = this.state

        return (
            <>
            <div className={accordionStyles.title} onClick={this.handleClick}>{isOpen ? `Hide ${title}` : `View ${title}`}</div>
            {isOpen ? <div>{content}</div> : null}
            </>
        )
    }
}