import React, {useState, useEffect }from 'react'
import api from '../api';

import '../stylesheets/SingleShoe.css'


 const Poys = () => {

    const [shoe, setShoe] = useState("")

useEffect(()=>{
    const fetchData = () =>{
        api.getData().then((response)=>{
            console.log(response.data.results)
            let shoes = response.data.results
            let randomShoe = shoes[Math.floor(Math.random()* shoes.length)]
            console.log(randomShoe)
            setShoe(randomShoe);
            

        })
        
    }
    fetchData();
}, [])

    return (
        <div className="single_sneaker_container">
            {shoe && (
                <div className="sneaker_info">
                <h2>{shoe.title}</h2>
                <img src={shoe.media.imageUrl} alt=""/>

                <div className="text_container">
                <p>Retail Price: $ {shoe.retailPrice}</p>
                <p>Release Date: {shoe.releaseDate}</p>
                <p>Style Code: {shoe.styleId}</p>


                </div>
                    
                </div>
            )}
            
        </div>
    )
}


export default Poys;
