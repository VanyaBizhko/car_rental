import React from 'react';
import {
 ImgButton,
  ButtonCar,
  HeroText,
  HeroTitle,
  HeroBox,
  Advantages,
  QualityTitle,
  ContainerHome,
} from './Home.styled';
import buttonImg from '../images/key.png';

export const Home = () => {
  return (
    <ContainerHome>
      <HeroBox>
        <HeroText>Cars_UKR </HeroText>
        <HeroTitle>ПРОКАТ АВТОМОБІЛІВ</HeroTitle>
        <HeroText></HeroText>
      <ButtonCar to={'/catalog'}>
        <ImgButton src={buttonImg} alt="button" />
      </ButtonCar>
      <Advantages>
        <QualityTitle>Найкращий сервіс для оренди авто</QualityTitle>
        </Advantages>
        </HeroBox>
    </ContainerHome>
  );
};