import styled from 'styled-components';

export const InputFrom = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding: 14px 0 14px 24px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border: none;
  border-right: 1px solid #dbcfcf;
  outline: none;
  background-color: #f7f7fb;
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  @media (max-width: 767px) {
    width: 100%;
    border-radius: 14px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const InputTo = styled.input`
  box-sizing: border-box;
  width: 160px;
  padding: 14px 0 14px 24px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  outline: none;
  border: none;
  background-color: #f7f7fb;
  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  @media (max-width: 767px) {
    width: 100%;
    border-radius: 14px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  margin-bottom: 50px;
  margin-top: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BtnSearch = styled.button`
  width: 150px;
  padding: 10px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 8px 0;
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 14px;
    text-align: center;
  }
`;