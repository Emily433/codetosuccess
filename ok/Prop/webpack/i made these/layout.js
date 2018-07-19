import react,{Component}from 'react';
import HeaderBar from './headerBar';
import { Header } from './header';

function Header() {
    return (
        <div className='layout-grid'>
        <div className='header-wrapper'>
        <h1 className='header-wrapper_title'>WHATS UP</h1>
        <p className='header-wrapper_subtitle'> login </p>
        </div>
        </div>
    )
}
class layout extends Component{
    render(){
        return(
       <div>
           
       <Header/>
       <HeaderBar/>
            {this.props.children}
            </div>
        )   
    }
}
export default Layout;