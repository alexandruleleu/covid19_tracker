import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

//components
import Header from '../components/Header';
import Playground from '../containers/playground';
import Loader from '../components/Loader';

const Home = () => {
  let { currentDate } = useParams();

  const lazyLoadDetailsComponent = () => {
    if (!currentDate) return null;
    const Details = lazy(() => import('../containers/details'));
    return (
      <Suspense fallback={<Loader containerHeight="medium" />}>
        <Details />
      </Suspense>
    );
  };

  return (
    <>
      <Header />
      <Playground />
      {lazyLoadDetailsComponent()}
    </>
  );
};

export default Home;
