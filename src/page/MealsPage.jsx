import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Meals = () => {

    const [meals, setMeals] = useState(null);
    useEffect(() => {
        (async () => {
            const mealsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            setMeals(await mealsResponse.json());
        })();
    }, []);

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">

            {meals ? (
                <>

                <h2 className="text-4xl font-black pb-12 text-center">Nos recettes</h2>
                {meals["meals"].map((meal, index) => (

                    <div key={index} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 ">
                        <h3 className="text-2xl font-black pb-4">{meal.strMeal}</h3>
                        <div className="w-full h-60 rounded-3xl overflow-hidden">
                            <img src={meal.strMealThumb} alt="" className="w-full h-60 object-cover	rounded-3xl pb-2 hover:scale-105 duration-500" />
                        </div>
                        <p className="pt-4">{meal.strInstructions}</p>
                        <Link to={`/recettes/details/${meal.idMeal}`} className="pt-4 font-black italix">Voir la recette &#187;</Link>
                    </div>

                ))}
                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des recettes...</h2>
            )}


        </div>


        < Footer />
        </>
      );
    }

export default Meals;
