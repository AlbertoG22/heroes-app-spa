import { HeroeList } from '../components';

export const DcPage = () => {
  return (
    <div className='m-5'>
      <h1>Marvel Page</h1>
      <HeroeList publisher={'DC Comics'} />
    </div>
  );
};
