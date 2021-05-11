import React from "react";
import '../stylesheets/sneaker.css';
import placeholder from '../images/cooming.jpeg';
import { Link } from 'react-router-dom';


const SingleSneaker = ({ id, name, shoe, img }) => {
  return (
 
      <div  className="single_sneaker">
        <div className="img_container">
          <h2 className="sneaker_name">
            {shoe} {name}
          </h2>

         <Link to={`/${id}`} id ={id}><img
            src={img ? img : placeholder}
            alt=""
          /></Link> 
        </div>
      </div>
    
  );
};

export default SingleSneaker;
