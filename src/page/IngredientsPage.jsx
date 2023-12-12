import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Ingredients = () => {

    const [ingredients, setIngredients] = useState(null);
    useEffect(() => {
        (async () => {
            const ingredientsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
            setIngredients(await ingredientsResponse.json());
        })();
    }, []);

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">

            {ingredients ? (
                <>
                <h2 className="text-4xl font-black text-center mb-20">Nos ingrédients</h2>
                {ingredients["meals"].map((meal, index) => (
                    <div key={index} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center">
                        <h3 className="text-2xl font-black pb-4">{meal.strIngredient}</h3>
                    </div>
                ))}
                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des ingrédients...</h2>
            )}


        </div>


        < Footer />
        </>
      );
    }

export default Ingredients;
