import { ListCars } from '../components/ListCars/ListCars';
import { Sidebar } from '../components/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Favorites = ({ cars }) => {
  const favorite = useSelector(state => state.favorite);
  const favoriteCars = cars.filter(car => favorite.includes(car.id));

  const [nameCar, setNameCar] = useState('');
  const [priceCar, setPriceCar] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [filteredCars, setFilteredCars] = useState(favoriteCars);

  const handleSelectChangeName = selected => {
    setNameCar(selected);
  };

  const handleSelectChangePrice = selected => {
    setPriceCar(selected);
  };

  const handleMinMileage = selected => {
    setMinMileage(selected);
  };

  const handleMaxMileage = selected => {
    setMaxMileage(selected);
  };

  const handleSearch = () => {
    const filtered = favoriteCars.filter(car => {
      const carPrice = parseFloat(car.rentalPrice.replace('$', ''));
      const carMileage = parseFloat(car.mileage);

      if (!priceCar && !nameCar && !minMileage && !maxMileage) {
        return true;
      }

      const priceMatch = !priceCar || carPrice <= Number(priceCar.label);
      const nameMatch = !nameCar || car.make === nameCar.label;
      const mileageMatch =
        (!minMileage || carMileage >= parseFloat(minMileage)) &&
        (!maxMileage || carMileage <= parseFloat(maxMileage));

      return priceMatch && nameMatch && mileageMatch;
    });

    setFilteredCars(filtered);
  };

  useEffect(() => {
    setFilteredCars(favoriteCars);
    // eslint-disable-next-line
  }, [favorite]);

  const reset = () => {
    setNameCar('');
    setPriceCar('');
    setMaxMileage('');
    setMinMileage('');
  };

  return (
    <>
      <Sidebar
        cars={favoriteCars}
        handleSelectChangeName={handleSelectChangeName}
        nameCar={nameCar}
        priceCar={priceCar}
        reset={reset}
        handleSelectChangePrice={handleSelectChangePrice}
        handleMinMileage={handleMinMileage}
        handleMaxMileage={handleMaxMileage}
        maxMileage={maxMileage}
        minMileage={minMileage}
        handleSearch={handleSearch}
      />
      <ListCars data={filteredCars} />
    </>
  );
};