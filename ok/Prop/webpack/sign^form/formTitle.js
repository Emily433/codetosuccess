import React from'react'
export function Header(){
    return(
        <div className='header'>
        <h1 className='header_title'> Welcome</h1>
        <p className='header_subtitle'>login </p>
        </div>
    )
}
export function FormTitle(props) {
    const { className, text } = props;
    return (
        <h1 className={`${props.className} form-title`}>{text}</h1>
    )
}