import { useState } from 'react';
import fetchDotaPlayer from '../API/fetchDotaPlayer';

const DotaPlayer: React.FC = () => {
  const [accountId, setAccountId] = useState<number>(0);
  const [playerData, setPlayerData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setAccountId(isNaN(value) ? 0 : value);
  };
  

  const handleButtonClick = async () => {
    try {
      const data = await fetchDotaPlayer(accountId);
      setPlayerData(data);
      setError('');
    } catch (error) {
      console.error(error);
      setPlayerData(null);
      setError('Failed to fetch player data');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={accountId}
        onChange={handleInputChange}
        placeholder="Enter Account ID"
        className="border border-gray-300 rounded-md p-2 mb-2"
      />
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Get Player Info
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {playerData && playerData.profile && (
          <div>
            <h2 className="text-lg font-bold mt-4">Player Information</h2>
            <p>Account ID: {playerData.profile.account_id}</p>
            <p>Persona Name: {playerData.profile.personaname}</p>
            <p>Real Name: {playerData.profile.name}</p>
            <p>Country Code: {playerData.profile.loccountrycode}</p>
          </div>
        )}

    </div>
  );
};

export default DotaPlayer;
