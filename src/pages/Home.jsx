import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island } from '../models/island';

function useIslandTransform() {
  const [transform, setTransform] = useState(() => ({
    islandPosition: [0, -6.5, -43],
    islandRotation: [0.1, 4.7, 0],
    islandScale: [1.1, 1.1, 1.1],
  }));

  useEffect(() => {
    const update = () => {
      const islandScale =
        window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1.1, 1.1, 1.1];
      setTransform({
        islandPosition: [0, -6.5, -43],
        islandRotation: [0.1, 4.7, 0],
        islandScale,
      });
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return transform;
}

const Home = () => {
  const { islandPosition, islandScale, islandRotation } = useIslandTransform();
  const [isRotating, setIsRotating] = useState(false);
  const [, setCurrentStage] = useState(null);

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
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
