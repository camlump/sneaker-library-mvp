import React, {useState, useEffect} from "react";
import api from '../api';
import '../stylesheets/shoeList.css';
import placeholder from '../images/cooming.jpeg'
// import Navbar from '../components/Navbar';
// import SearchBar from '../components/SearchBar';
import SingleSneaker from './SingleSneaker';
import SideBarNav from './SideBarNav'
import {  PulseLoader } from 'react-spinners';

const Home = () => {
// const [data, SetData] = useState([]);
  const [sneakers, setSneakerData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchData = () => {
      api.getData().then((response) => {
        setSneakerData(response.data.results);
        setFiltered(response.data.results);
        setLoading(true)
        console.log(response.data.results);
        
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
      const results = filtered.filter(sneaker=> sneaker.shoe.toLowerCase().includes(result));
      setSneakerData(results);
      
    
  },[result]);

  const onChange =(e)=> {
    setResult(e.target.value);
}

  return (
    <>
      {loading ? (
    <div className="sneakerList-container">
    
    
          <div className="searchBar__container">
            <div className="searchBar_field">
                <div className="searchText_phrase">
                <h3>Search shoes <span className="color">below</span></h3>
                </div>
                <div className="search_input">
                    <input type="text" placeholder="Search..." value={result} onChange={onChange}/>
                </div>
            </div>
            
        </div>
      
      {sneakers && (
        <div className="sneakerlist">
          {sneakers.map((sneaker) => {
            return (
              <SingleSneaker key={sneaker.id} id={sneaker.id} name={sneaker.name} shoe={sneaker.shoe} img={sneaker.media.imageUrl}/>
              
              );
            })}
        </div>
      )}
      <SideBarNav />
          
       
    </div>
      ) : ( <PulseLoader style={{flex: 1,
        marginTop:240,
        justifyContent: 'center.',
        alignItems:'center'}} />)}
    </>
    
  );
};

const spinnerStyle = {
  flex: 1,
  marginTop:240,
  justifyContent: 'center',
  alignItems:'center'
}
export default Home;
