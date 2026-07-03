import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Loader from "./Loader";
import DragYawControl from "../models/DragYawControl";
import Island from "../models/island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";

const adjustBiplaneForScreenSize = () => {
  if (window.innerWidth < 768) {
    return [
      [1.5, 1.5, 1.5],
      [0, -1.5, 0],
    ];
  }
  return [
    [3, 3, 3],
    [0, -4, -4],
  ];
};

const adjustIslandForScreenSize = () => {
  if (window.innerWidth < 768) {
    return [
      [0.9, 0.9, 0.9],
      [0, -6.5, -30],
    ];
  }
  return [
    [1, 1, 1],
    [0, -6.5, -30],
  ];
};

/**
 * Home's 3D Accent (see CONTEXT.md): a self-contained decorative scene —
 * island, sky, biplane, drag-to-rotate interaction. Takes no props; the Hero
 * text around it doesn't know or care whether this exists.
 */
const SceneAccent = () => {
  const [isRotating, setIsRotating] = useState(false);
  const islandRef = useRef();
  const skyRef = useRef();

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
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

          <DragYawControl
            targets={[islandRef, skyRef]}
            setIsRotating={setIsRotating}
          />
          <Sky ref={skyRef} />
          <Island
            ref={islandRef}
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
  );
};

export default SceneAccent;
