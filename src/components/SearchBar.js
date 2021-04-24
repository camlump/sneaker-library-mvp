// import React from 'react';
// import {useHistory } from 'react-router-dom';
// import '../stylesheets/SearchBar.css';
// import api from '../api';


//  const SearchBar = () => {

//    const [searchTerm, setSearchTerm] = useState("");

//    const [sneakers, setSneakerData] = useState([]);
//    const [showLoading, setShowLoading] = useState(true);
 
//    useEffect(() => {
//      const fetchData = () => {
//        api.getData().then((response) => {
//          setSneakerData(response.data.results);
//          console.log(response.data.results);
//          setShowLoading(false);
//        });
//      };
 
//      fetchData();
//    }, []);



    
//     return (
//         <div className="searchBar__container">
//             <div className="searchBar_field">
//                 <div className="searchText_phrase">
//                 <h3>Search shoes <span className="color">below</span></h3>
//                 </div>
//                 <div className="search_input">
//                     <input type="text" placeholder="Search..."/>
//                 </div>
//             </div>
            
//         </div>
//     )
// }


// export default SearchBar;
