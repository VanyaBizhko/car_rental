
import { Home } from '../pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Catalog } from '../pages/Catalog';
import { Favorites } from '../pages/Favorites';
import { fetchCars } from '../redux/fetchCars';
import { useEffect, useState } from 'react';

export const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (error) {
        console.error('Помилка:', error);
      }
    };

    loadCars();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog cars={cars} />} />
        <Route path="/favorites" element={<Favorites cars={cars} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};