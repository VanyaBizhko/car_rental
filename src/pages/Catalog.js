import { ListCars } from '../components/ListCars/ListCars';
import { Sidebar } from '../components/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';

export const Catalog = ({ cars }) => {
  const [nameCar, setNameCar] = useState('');
  const [priceCar, setPriceCar] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [filteredCars, setFilteredCars] = useState(cars);

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
    const filtered = cars.filter(car => {
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
    setFilteredCars(cars);
  }, [cars]);

  const reset = () => {
    setNameCar('');
    setPriceCar('');
    setMaxMileage('');
    setFilteredCars(cars);
    setMinMileage('');
  };

  return (
    <>
      <Sidebar
        cars={cars}
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