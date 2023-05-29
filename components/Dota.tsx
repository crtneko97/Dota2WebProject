import { useEffect, useState } from 'react';
import fetchDotaHeroes from '../API/fetchDotaHeroes';

interface Hero {
  id: number;
  localized_name: string;
  attack_type: string;
  primary_attr: string;
  roles: string[];
  // Add other properties as needed
}

const Dota: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDotaHeroes();
        setHeroes(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold mb-4">Dota Heroes</h1>
    <ul className="space-y-4">
      {heroes.map((hero) => (
        <li
          key={hero.id}
          className="border border-gray-300 p-4 rounded-md shadow-sm"
        >
          <strong className="text-lg">{hero.localized_name}</strong>
          <p className="text-sm text-gray-600 mb-2">Attack Type: {hero.attack_type}</p>
          <p className="text-sm text-gray-600 mb-2">Primary Attribute: {hero.primary_attr}</p>
          <p className="text-sm text-gray-600">Roles: {hero.roles.join(', ')}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Dota;
