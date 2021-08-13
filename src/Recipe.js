import React from 'react';
import style from './recipe.module.css';
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h2>{title}</h2>
            <p><b>Calories:</b> {calories}</p>
            <img src={image} alt=""/>
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>

    );
};
export default Recipe;