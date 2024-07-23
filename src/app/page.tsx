import React from 'react'
import Introduction from './components/introduction/Introduction';

const Home = () => {
  return (
    <main>

    <Introduction name={'Simon Kern'} location={'Sweden/Stockholm'} role={'Software'} />
    </main>
  );
}

export default Home;