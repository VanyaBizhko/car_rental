import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

import {
  CarImg,
  CarImgWrap,
  TextBox,
  CardBox,
  MainInfo,
  CarInfo,
  CarText,
  ModelBlue,
  LearnMoreBtn,
  IconBtn,
  SecondaryInfo,
  SecondaryCarText,
} from './Car.styled';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/Favorites/FavoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../Modal/Modal';

export const Car = ({ car }) => {
  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const city = car.address.split(',')[1].trim();
  const country = car.address.split(',')[2].trim();
  const nameCar = car.make.split('-')[0];
  const model = car.model.split(' ').slice(0, 2).join(' ');
  const func = car.functionalities[0].split(' ').slice(0, 3).join(' ');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const toggleFavorite = id => {
    if (favorite.includes(id)) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <div>
      <CardBox key={car.id}>
        <CarImgWrap>
          <CarImg src={car.img} alt={car.make} />
          <IconBtn type="button" onClick={() => toggleFavorite(car.id)}>
            {favorite.includes(car.id) ? (
              <AiFillHeart size={20} color="3470FF" />
            ) : (
              <AiOutlineHeart size={20} color="ffffff" />
            )}
          </IconBtn>
        </CarImgWrap>
        <TextBox>
          <MainInfo>
            <CarInfo>
              <CarText>{nameCar}</CarText>
              <ModelBlue>
                {model}
                <span style={{ color: 'black' }}>,</span>
              </ModelBlue>
              <CarText>{car.year}</CarText>
            </CarInfo>
            <CarText>{car.rentalPrice}</CarText>
          </MainInfo>
          <SecondaryInfo>
            <SecondaryCarText>{city}</SecondaryCarText>
            <SecondaryCarText>{country}</SecondaryCarText>
            <SecondaryCarText>{car.rentalCompany}</SecondaryCarText>
            <SecondaryCarText>{car.type}</SecondaryCarText>
            <SecondaryCarText> {car.make}</SecondaryCarText>
            <SecondaryCarText>{car.id}</SecondaryCarText>
            <SecondaryCarText>{func}</SecondaryCarText>
          </SecondaryInfo>
          {isModalOpen ? (
            <Modal car={car} onClose={() => setIsModalOpen(false)} />
          ) : (
            <></>
          )}
          <LearnMoreBtn onClick={openModal}>Learn more</LearnMoreBtn>
        </TextBox>
      </CardBox>
    </div>
  );
};