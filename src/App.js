import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/HomePage';
import MealsPage from './page/MealsPage';
import CategoriesPage from './page/CategoriesPage';
import ProvenancesPage from './page/ProvenancesPage';
import Ingredients from './page/IngredientsPage';
import Details from './page/MealsDetailsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recettes" element={<MealsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/provenances" element={<ProvenancesPage />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/recettes/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
