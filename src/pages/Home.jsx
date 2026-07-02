import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";

import CTA from "../components/CTA";
import Loader from "../components/Loader";
import Island from "../models/island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import { experiences, personal } from "../constants";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [, setCurrentStage] = useState(1);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -30];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -30];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='max-container flex flex-col gap-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-6 animate-fade-up'>
          <p className='eyebrow'>
            {experiences[0]?.title ?? "Software Engineer"}
          </p>

          <h1 className='head-text'>
            Hi, I&apos;m{" "}
            <span className='blue-gradient_text font-semibold drop-shadow'>
              {personal.displayName}
            </span>{" "}
            👋
          </h1>

          <p className='max-w-lg leading-relaxed text-slate-500'>
            A Software Engineer from China 🇨🇳, pursuing opportunities in
            Australia 🇦🇺
          </p>

          <div className='flex flex-wrap gap-4 pt-2'>
            <Link to='/about' className='btn !w-auto'>
              About Me
            </Link>
            <Link to='/projects' className='btn-outline !w-auto'>
              View Projects
            </Link>
          </div>
        </div>

        <div
          className={`relative w-full h-[380px] sm:h-[460px] lg:h-[560px] rounded-3xl border border-gray-200/80 bg-gradient-to-b from-blue-50 to-white overflow-hidden ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <Canvas
            className='w-full h-full bg-transparent'
            camera={{ near: 0.1, far: 1000 }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 5, 10]} intensity={2} />
              <spotLight
                position={[0, 50, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />
              <hemisphereLight
                skyColor='#b1e1ff'
                groundColor='#000000'
                intensity={1}
              />

              <Sky isRotating={isRotating} setIsRotating={setIsRotating} />
              <Island
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
                position={islandPosition}
                rotation={[0.1, 4.7077, 0]}
                scale={islandScale}
              />
              <Plane
                isRotating={isRotating}
                position={biplanePosition}
                rotation={[0, 20.1, 0]}
                scale={biplaneScale}
              />
            </Suspense>
          </Canvas>

          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent sm:h-32' />

          <p className='pointer-events-none absolute bottom-4 right-4 text-xs font-medium text-slate-400'>
            Drag to explore
          </p>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Home;
