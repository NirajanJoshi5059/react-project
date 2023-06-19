import React from 'react'
import { useNavigate } from 'react-router'
import { meals } from '../dumy/meal_data';

const HomePage = () => {
    const nav = useNavigate();
    return (
        <div className='grid grid-cols-4'>
            {meals.map((meal) => {
                return <div onClick={() => nav(`detail/${meal.idMeal}`, { state:meal})} className="h-[250px] w-[300px] shadow cursor-pointer">
                    <img className='h-[200px] w-[300px]' src={meal.strMealThumb} alt='Loading...' />
                    <h1>{ meal.strMeal}</h1>
                    <p>{ meal.strInstructions.substring(0,15)+'...'}</p>
                </div>

            })}
        </div>
    )
}

export default HomePage
