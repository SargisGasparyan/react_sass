import React from 'react'
import logo from './images/2.png'

const Navbar=()=>{
    const[state,setState]=React.useState(false)
    React.useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])
    const handleScroll=()=>{
        if (window.scrollY>300) {
            setState(true)
        }else{setState(false)}
    }
    return(
<div className={`navbar ${state ? 'whiteBg':'transparent'}`}>
    <div className="container">
        <div className="navbar_content">
            <div className = "navbar_left">
                <img src= {logo} alt='logo' className="img"/>
            </div>
            <ul className="navbar_right ">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Showcases</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</div>
    )
}
export default Navbar