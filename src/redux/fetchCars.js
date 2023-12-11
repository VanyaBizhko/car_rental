import axios from 'axios';

const BASE_URL = 'https://6575fd3f0febac18d4038b0b.mockapi.io';

export const fetchCars = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/Adverts`);

    return data;
  } catch (error) {
    console.error(error);
  }
};