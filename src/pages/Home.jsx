import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Bird from '../models/Bird';
import { Island } from '../models/island';
import Plane from '../models/Plane';
import Sky from '../models/Sky';

const adjustPlaneForScreenSize = () => {
  const rotation = [0, 0.2, 0];

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return {
      screenScale: [1.5, 1.5, 1.5],
      screenPosition: [0, -1.5, 0],
      rotation,
    };
  }

  return {
    screenScale: [3, 3, 3],
    screenPosition: [-1, 3, -28],
    rotation,
  };
};

const adjustBirdForScreenSize = () => {
  const rotation = [0, 0, 0];

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return {
      screenScale: [1.2, 1.2, 1.2],
      screenPosition: [1, 0, 0.5],
      rotation,
    };
  }

  return {
    screenScale: [2, 2, 2],
    screenPosition: [2, 0, 1],
    rotation,
  };
};

const Home = () => {
  const [plane, setPlane] = useState(() => adjustPlaneForScreenSize());
  const [bird, setBird] = useState(() => adjustBirdForScreenSize());

  useEffect(() => {
    const update = () => {
      setPlane(adjustPlaneForScreenSize());
      setBird(adjustBirdForScreenSize());
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className='relative h-screen w-full'>
      <Canvas
        className='h-screen w-full bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Sky />
          <Bird
            position={bird.screenPosition}
            scale={bird.screenScale}
            rotation={bird.rotation}
          />
          <Plane
            position={plane.screenPosition}
            scale={plane.screenScale}
            rotation={plane.rotation}
          />
          <Island
            position={[0, -6.5, -43]}
            scale={[1.1, 1.1, 1.1]}
            rotation={[0.1, 4.7, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
