import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

const Home = () => {
  return (
    <section className='relative h-screen w-full'>
      {/* <div className='absolute left-0 right-0 top-28 z-10 flex items-center justify-center'>
        POPUP
      </div> */}
      <Canvas
        className='h-screen w-full bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>{/* 3D 场景内容 */}</Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
