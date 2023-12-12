import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';

const Provenances = () => {

    const [provenances, setProvenances] = useState(null);
    useEffect(() => {
        (async () => {
            const provenancesResponse = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            setProvenances(await provenancesResponse.json());
        })();
    }, []);

    return (
        <>
        < Header />

        <div className="flex p-6 my-16 items-center justify-center flex-col">

            {provenances ? (
                <>
                <h2 className="text-4xl font-black text-center mb-20">Nos provenances</h2>
                {provenances["meals"].map((meal, index) => (
                    <div key={index} className="flex flex-col w-1/2 shadow-lg rounded-xl p-8 mb-6 items-center">
                        <h3 className="text-2xl font-black pb-4">{meal.strArea}</h3>
                    </div>
                ))}
                </>
            ) : (
                <h2 className="text-4xl font-black pb-12 text-center">Chargement des provenances...</h2>
            )}


        </div>


        < Footer />
        </>
      );
    }

export default Provenances;
