import { HeroeList } from '../components/';

export const MarverPage = () => {
  return (
    <div className='m-5'>
      <h1>Marvel Page</h1>
      <HeroeList publisher={'Marvel Comics'} />
    </div>
  );
};
