import axios from 'axios';

const fetchDotaHeroes = async () => {
  try {
    const response = await axios.get('https://api.opendota.com/api/heroes');
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export default fetchDotaHeroes;
