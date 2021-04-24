import React, { useState, useEffect,  } from "react";
import { useParams, withRouter } from 'react-router-dom';
import api from "../api";
import Navbar from '../components/Navbar';
import '../stylesheets/SingleShoe.css'

const SneakerId = () => {

    let { id } = useParams();
    console.log(id);
  const [sneaker, setSneaker] = useState("");
    
    useEffect(() => {
    const fetchData = () => {
      api.getDataId(id).then((response) => {
        setSneaker(response.data.results);
         console.log(response.data.results);
        
      });
    };

    fetchData();
  }, [id]);

  return (
      <div className="single_sneaker_container">
       
        {sneaker && (
            <div className="sneaker_info">
                <h2>{sneaker[0].title }</h2>
                
                    <img src={sneaker[0].media.imageUrl} alt=""/>
               
                <div className="text_container">
                    <p>{sneaker[0].shoe}</p>
                    <p>Retail Price: $ {sneaker[0].retailPrice}</p>
                    <p>Gender: {sneaker[0].gender}</p>
                    <p>release date: {sneaker[0].releaseDate}</p>

                </div>
            </div>
        )}
        
      
    </div>
  );
};

export default withRouter(SneakerId);
