import { Link } from 'react-router-dom';
import styled from 'styled-components';
import hero from '../images/Hero.jpg';


export const ContainerHome = styled.div`
width: 100%;
height: 100%;
z-index:99999999;

background-image: url(${hero});
background-size: cover; 
  background-position: center;
`;


export const ImgButton = styled.img`
  width: 250px;
  height: 180px;
  position: absolute;
 

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

export const ButtonCar = styled(Link)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 30%;
  right: -70%;
  cursor: pointer;
  

  @media (max-width: 767px) {
    width: 100px;
    height: auto;
    top: 200px;
    right: 10%;
  }

  @media (max-width: 365px) {
    width: 60px;
    height: auto;
    top: 150px;
    right: 10%;
  }
`;


export const HeroBox = styled.div`
  width: 100vh;
  height: 100vh;
  background-image: url(${hero});
background-size: cover; 
  background-position: center;

  @media (max-width: 767px) {
    top: 70px;
    left: 40px;
  }
`; 

export const HeroText = styled.p`
padding-top:150px;

  font-size: 30px;
  font-weight: 600;
  color: white;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const HeroTitle = styled.h2`
padding-top: 20px;
  font-size: 60px;
  text-align: center;
  color: #3470ff;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QualityTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;