import React from 'react';

import { InputFrom, InputTo, Aside, BtnSearch, Label } from './Sidebar.styled';
import Select from 'react-select';

export const Sidebar = ({
  cars,
  handleSelectChangeName,
  nameCar,
  reset,
  priceCar,
  handleSelectChangePrice,
  handleMinMileage,
  handleMaxMileage,
  maxMileage,
  minMileage,
  handleSearch,
}) => {
  if (!cars || cars.length === 0) {
    return [];
  }

  const uniqueMakes = [...new Set(cars.map(car => car.make))];

  const selectOptionsCar = uniqueMakes.map(make => ({
    value: make,
    label: make,
  }));

  const moneyStep = Array.from({ length: 50 }, (_, index) => ({
    value: `option${(index + 1) * 10}`,
    label: `${(index + 1) * 10}`,
  }));

  return (
    <Aside>
      <div style={{ marginRight: '20px' }}>
        <Label>Car Brand</Label>
        <Select
          isSearchable={true}
          onChange={handleSelectChangeName}
          value={nameCar}
          options={selectOptionsCar}
          placeholder="Enter the text"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: 'none',
              backgroundColor: '#F7F7FB',
              width: '224px',
              height: '48px',
              borderRadius: '14px',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '20px',
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: 'grey',
            }),
          }}
        />
      </div>
      <div style={{ marginRight: '20px' }}>
        <Label>Price/ 1 hour</Label>

        <Select
          onChange={handleSelectChangePrice}
          value={priceCar}
          options={moneyStep}
          placeholder="To $"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: 'none',
              backgroundColor: '#F7F7FB',
              width: '125px',
              height: '48px',
              borderRadius: '14px',
              fontWeight: '500',
              fontSize: '18px',
              lineHeight: '20px',
            }),

            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: 'grey',
            }),
          }}
        />
      </div>
      <div>
        <Label>Сar mileage / km</Label>
        <div>
          <InputFrom
            placeholder="From"
            onChange={e => handleMinMileage(e.target.value)}
            value={minMileage}
          />
          <InputTo
            placeholder="To"
            onChange={e => handleMaxMileage(e.target.value)}
            value={maxMileage}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <BtnSearch type="button" onClick={reset}>
            Reset
          </BtnSearch>
          <BtnSearch type="button" onClick={handleSearch}>
            Search
          </BtnSearch>
        </div>
      </div>
    </Aside>
  );
};