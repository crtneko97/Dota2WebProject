import axios from 'axios';

const fetchDotaPlayer = async (accountId: number) => {
  try {
    const response = await axios.get(`https://api.opendota.com/api/players/{account_id}`);
    console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
  }
};

export default fetchDotaPlayer;
