import React from 'react'
import img1 from './images/2.jpg'
import img2 from './images/3.jpg'
import img3 from './images/4.jpg'
const Portfolio=()=>{
    const [state] = React.useState([
        {id:1,img:img1,name:"Shakil Khan",expert:"Fulter"},
        {id:2,img:img2,name:"Fayad",expert:"React"},
        {id:3,img:img3,name:"Fatma",expert:"View js"}])
    return(
        <div className="portfolio">
            <div className="container">
                <div className="portfolio_section">
                    <div className="row">
                        <div className='col4'>
                            <div className="portfolio_content">
                                <h6 className='portfolio_content-h6'>EMPLOYESS</h6>
                                <h3 className='portfolio_content-h3'>OUR TEAM.</h3>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='row'>
                                    {state.map(image=>(
                                        <div className="col-4 pl-15 " key={image.id}>
                                            <div className="portfolio_card">
                                                <div className="portfolio_card-image">
                                                    <img className='imgg'  src={image.img} alt='card'/>
                                                </div>
                                                <h5 className="portfolio_card-name">{image.name}</h5>
                                                <p className="portfolio_card-expert">{image.expert}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Portfolio