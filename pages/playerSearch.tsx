import { NextPage } from 'next'
import Layout from '@/components/Layout';
import Dota from '@/components/Dota';
import PlayerInfo from '@/components/DotaPlayer';

interface Props {}

const Heroes: NextPage<Props> = ({}) => {
  return (
    <>
     <Layout>
      <div className="container mx-auto">
        <PlayerInfo />
      </div>
    </Layout>
    </>
  );
}

export default Heroes