import react,{Component}from 'react';
import HeaderBar from './headerBar';


class layput extends Component{
    render(){
        return (
            <div>
            <div className='header-wrapper'>
            <h1 className='header-wrapper_title'>WHATS UP</h1>
            <p className='header-wrapper_subtitle'> login </p>

            </div>
            {HeaderBar()}
            {this.props.children}
            </div>
        )
    }
}
export default Layout;