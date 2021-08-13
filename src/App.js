import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';
const App=()=>{
  const APP_ID="a76fe93b";
  const APP_KEY="bb9daa58f1dbd049bda1d8ebb668771b";
  const [recipes , setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("");

  useEffect(()=>{
    getRecipes();
  },[query]);


  const getRecipes=async ()=>{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
  setRecipes(data.hits);
  };

  const searchUpdate=e=>{
    setSearch(e.target.value);
  };

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
return(
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={searchUpdate}/>
      <button className="search-button" type="submit">
       Search
      </button>
    </form>
    <div className="recipes" >
    {recipes.map(recipe=>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
    </div>

  </div>
);
};
export default App;
