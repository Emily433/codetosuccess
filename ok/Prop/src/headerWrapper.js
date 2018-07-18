import React,{Component}from 'react'
class HeaderWrapper extends Component{
    render(){
        return (
            <div className='header-wrapper'>
            <h1 className='header-wrapper_title'> Welcome!</h1>
            <p className= 'header-wrapper_subtitle'> Login to countinue</p>
            <div className='header-wrapper_bar'></div>
            </div>
        )
    }
}
export default HeaderWrapper;