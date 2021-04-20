import React from 'react'

const Header=()=>{
    const[state]=React.useState({heading:"About As",link1:"About As",link2:"Home"})
    return(
        <div className='header'>
          <div className="header_content">
              <h1 className="header_content-h1">{state.heading}</h1>
              <div className="header_content-links">
                  <a href="">{state.link2}</a>
                  <span className="header_content-span"></span>
                  <a href="">{state.link1}</a>
              </div>
          </div>
        </div>
    )
}

export default Header