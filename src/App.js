import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom';

import Home from './components/Home'; 
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import SneakerId from './components/SneakerId';
import About from './components/About'
import Brand from './components/Brand'
import Poys from './components/Poys'


 const App = () => {


    return (
        <Router>
                    <Navbar />
            <Switch>
                <Route exact path="/poys" component={Poys} />
                <Route exact path="/about" component={About} />
                <Route exact path="/brands" component={Brand}/>
                <Route exact path="/">
                   
                    <Home />
                </Route>
                <Route exact path="/:id">
                <SneakerId  />
                </Route>
               
               
                
                
            </Switch>
        </Router>
    )
}

export default App;

