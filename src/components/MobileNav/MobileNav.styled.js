import styled from 'styled-components';

export const MobileButtonsContainer = styled.div`
  position: absolute;
  display: none;
  max-width: 100%;
  height: 100px;
  top: 0;
  left: 120px;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    display: flex;
    gap: 20px;
    height: 50px;
    margin-right: 20px;
  }
`;

export const MobileButton = styled.button`
  height: 30%;
  border-radius: 14px;
`;