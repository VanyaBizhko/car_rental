import React, { useEffect } from 'react';
import {
  Backdrop,
  CarImage,
  CloseIcon,
  Conditions,
  ConditionsList,
  Description,
  InfoTitle,
  ModalCar,
  RentalButton,
  List,
  Item,
  Title,
} from './Modal.styled';

export const Modal = ({ car, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const city = car.address.split(',')[1].trim();
  const country = car.address.split(',')[2].trim();
  const rental = car.rentalConditions.split('\n');
  const mileage = car.mileage.toLocaleString('en-US');

  const rentalPart = rental[0].split(' ');

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalCar>
        <CloseIcon onClick={onClose} />
        <CarImage src={car.img} alt={car.make} />
        <Title>{`${car.make} ${car.model}, ${car.year}`}</Title>
        <List>
          <Item>{country}</Item>
          <Item>id: {car.id}</Item>
          <Item>Year: {car.year}</Item>
          <Item>Type: {car.type}</Item>
          <Item>Fuel Consumption: {car.fuelConsumption}</Item>
          <Item>Type: {car.engineSize}</Item>
          <Item>{city}</Item>
        </List>
        <Description>{car.description}</Description>
        <InfoTitle>Accessories and functionalities:</InfoTitle>
        <List>
          {car.accessories.map(accessories => (
            <Item key={accessories}>{accessories}</Item>
          ))}
        </List>
        <InfoTitle>Rental Conditions: </InfoTitle>
        <ConditionsList>
          <Conditions>
            Minimum age: <span style={{ color: 'blue' }}>{rentalPart[2]}</span>
          </Conditions>
          <Conditions> {rental[1]}</Conditions>
          <Conditions>{rental[2]}</Conditions>

          <Conditions>
            Mileage: <span style={{ color: 'blue' }}>{mileage}</span>
          </Conditions>
          <Conditions>
            Price: <span style={{ color: 'blue' }}>{car.rentalPrice}</span>
          </Conditions>
        </ConditionsList>

        <a href={`tel:++380730000000`}>
          <RentalButton type="button">Rental car</RentalButton>
        </a>
      </ModalCar>
    </Backdrop>
  );
};