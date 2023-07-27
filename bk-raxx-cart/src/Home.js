import React from 'react';
import Itemcard from "./Itemcard";

const Home = ()=> {
  return (
    <div>
     <h1 className="text-center mt-3">All Items</h1>
      <section className='py-4 container'></section>
        <div className='row justify-coontent-center'>

          <Itemcard img="" title="title" desc="desc" />

        </div>
    </div>
  );
};

export default Home
