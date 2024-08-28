import './sidebar.css'
import search from '../assets/img/icon.png'


export default function SideBar(){
    return(
        <div className="sidebar">
            <img className='searchIcon' src={search} alt=""/>
        </div>
    );
}