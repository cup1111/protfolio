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
    screenPosition: [-1, -4, -4],
    rotation,
  };
};

const adjustBirdForScreenSize = () => {
  const rotation = [0, 0, 0];

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return {
      screenScale: [1.2, 1.2, 1.2],
      screenPosition: [0, 4, 0.5],
      rotation,
    };
  }

  return {
    screenScale: [2, 2, 2],
    screenPosition: [0, 4, 0.5],
    rotation,
  };
};

const adjustIslandForScreenSize = () => {
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return {
      islandScale: [0.9, 0.9, 0.9],
      islandPosition: [0, -6.5, -43],
      islandRotation: [0.1, 4.7, 0],
    };
  }

  return {
    islandScale: [1.1, 1.1, 1.1],
    islandPosition: [0, -6.5, -43],
    islandRotation: [0.1, 4.7, 0],
  };
};

const Home = () => {
  const [plane, setPlane] = useState(() => adjustPlaneForScreenSize());
  const [bird, setBird] = useState(() => adjustBirdForScreenSize());
  const [island, setIsland] = useState(() => adjustIslandForScreenSize());

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);

  useEffect(() => {
    const update = () => {
      setPlane(adjustPlaneForScreenSize());
      setBird(adjustBirdForScreenSize());
      setIsland(adjustIslandForScreenSize());
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className='relative h-screen w-full'>
      <Canvas
        className={`h-screen w-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
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
          <Bird
            position={bird.screenPosition}
            scale={bird.screenScale}
            rotation={bird.rotation}
          />
          <Sky />
          <Island
            position={island.islandPosition}
            scale={island.islandScale}
            rotation={island.islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={plane.screenPosition}
            scale={plane.screenScale}
            rotation={plane.rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
