import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = () => {

    const {id } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        (async () => {
            const mealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            setDetails(await mealsResponse.json());
        })();
    }, [id]);

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">


            {details ? (

                <>

                {details["meals"] ? (

                    <div className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-left">
                        <h3 className="text-2xl font-black pb-4">{details["meals"][0].strMeal}</h3>
                        <div className="w-full h-60 rounded-3xl overflow-hidden">
                            <img src={details["meals"][0].strMealThumb} alt="" className="w-full h-60 object-cover rounded-3xl pb-2 hover:scale-105 duration-500" />
                        </div>
                        <p className="pt-4"><strong>Provenance:</strong> {details["meals"][0].strArea}</p>
                        <p className="pt-4">{details["meals"][0].strInstructions}</p>
                        <Link to="/recettes" className="pt-4 font-black italix">Retour aux recettes &#187;</Link>
                    </div>

                ) : (
                    <h2 className="text-4xl font-black pb-12 text-center">Aucune recette n'a été trouvée avec cet identifiant</h2>
                )}

                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des détails...</h2>
            )}


        </div>

        < Footer />
        </>
      );
    }

export default Details;
