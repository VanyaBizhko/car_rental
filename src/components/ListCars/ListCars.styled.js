import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: center;
  gap: 29px;
  flex-wrap: wrap;
  list-style: none;
  max-width: 1300px;
`;

export const ListItem = styled.li`
  max-width: 284px;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
`;

export const Warning = styled.h3`
  padding: 16px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #ff9900;
`;

export const BtnLoad = styled.button`
  background-color: inherit;
  width: 200px;
  font-size: 14px;
  height: 48px;
  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 14px;

  &:hover {
    background: #0b44cd;
  }
`;