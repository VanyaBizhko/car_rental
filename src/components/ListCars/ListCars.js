import React, { useState } from 'react';
import { SectionContainer, List, ListItem, BtnLoad } from './ListCars.styled';

import { Car } from '../Car/Car';

export const ListCars = ({ data, handleMore }) => {
  const itemsPerPage = 8;
  const [loadedItems, setLoadedItems] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setLoadedItems(prevLoadedItems => prevLoadedItems + itemsPerPage);
  };
  return (
    <>
      <SectionContainer>
        <List>
          {data.slice(0, loadedItems).map(car => (
            <ListItem key={car.id}>
              <Car car={car} />
            </ListItem>
          ))}
        </List>
        {data.length >= 8 ? (
          <BtnLoad onClick={handleLoadMore}>Load more</BtnLoad>
        ) : (
          <></>
        )}
      </SectionContainer>
    </>
  );
};