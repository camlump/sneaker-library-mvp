import React, {useEffect, useState} from 'react';

import api from '../api';

import '../stylesheets/brand.css'
// import axios from "axios";

const Brand = () => {

    const [brands, setBrands]= useState([]);

    

  useEffect(() => {
      const fetchData = () => {
          api.getBrand().then((response)=>{
              setBrands(response.data.results);
              console.log(response.data.results);
          });
      };

      fetchData();
  }, [])

    
    return (
        <div className="container">
            <div className="title-container">
            <h2>List of popular trending shoe brands.</h2>
            <p>There are many popular companies that make 
                timeless and high in demand sneakers that have
            </p>
             </div>
            <div className="brand-container">
        {brands && (
            <ul style={font} className="brand_list">
                {brands.map((brand)=>{
                    return(
                        <ul key={brand}>  
                            <li >{brand}</li>
                        </ul>
                    )
                })}
            </ul>
        ) }
            </div>
        </div>
    )
}


const font  = {

    fontFamily: 'Source Sans Pro',
    fontSize: '22px',
    color: '#111',
    fontWeight: "700",

}


export default Brand;
