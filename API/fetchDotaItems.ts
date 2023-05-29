import axios from 'axios';

const fetchDotaItems = async () => {
  try {
    const response = await axios.get('https://api.opendota.com/api/items');
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export default fetchDotaItems;