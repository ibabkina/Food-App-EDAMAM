import React from 'react'
import Axios from 'axios'
import './App.css';

const App = () => {
    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    // const url = `/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const headers = {
        'Content-Type': 'text/plain'
    };
    const getData = async() => {
        const result = await Axios.get(url);
       
        console.log(result);
    }
    
    return (
        <div className='App'>
            <h1 onClick={getData}>Food Searching App</h1>
        </div>
    )
}

export default App
