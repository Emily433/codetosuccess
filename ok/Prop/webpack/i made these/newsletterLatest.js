import React, { Component } from 'react';

function Button({className, callback, text, icon}) {
    if(icon) {
        return (
            <a onClick={callback} className={`${classname} button`}>
            <i className={icon}></i>
        </a>  

        )
    } 
}
class NewsletterLatest extends Component {

    handleEdit = () => {
        this.props.history.push('/newsletter/edit')
    }

    render() {
        const { title, imageUrl, body } = this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className='newsletter-latest__image' src={imageUrl}/>
                <Button className='newsletter-latest__button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/> 
                <div className='newsletter-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}