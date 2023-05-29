import { NextPage } from 'next'
import Layout from '@/components/Layout';
import Dota from '@/components/Dota';

interface Props {}

const Heroes: NextPage<Props> = ({}) => {
  return (
    <>
     <Layout>
      <div className="container mx-auto">
        <Dota />
      </div>
    </Layout>
    </>
  );
}

export default Heroes