import React, {useState} from 'react'
import Axios from 'axios'
import './App.css';

const App = () => {
    //Create a piece of state
    const[query, setQuery] = useState(""); //Set query to empty string
    const[recipes, setRecipes] = useState([]);

    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    
    //To pass query in the url: ${query}
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getData = async() => {
        const result = await Axios.get(url);
        setRecipes(result.data.hits)
        console.log(result);
        setQuery("");
    };

    const onChange = (e) => {
        setQuery(e.target.value);
        // console.log(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    
    return (
        <div className='App'>
            <h1>Food Searching App</h1>
            <form className="search-form" onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Search Food" 
                autocomplete="off" 
                onChange={onChange}
                // To clear the input field after submition
                value={query}
                />
                <input type="submit" value="search"/>
            </form>
        </div>
    )
}

export default App
