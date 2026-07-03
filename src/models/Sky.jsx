import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

/**
 * Pure renderer: rotation is driven externally via `ref` by useDragYaw
 * (see models/DragYawControl.jsx). This component knows nothing about
 * pointer/touch/keyboard input.
 */
export default function Sky({ ref, ...props }) {
  const { scene } = useGLTF(skyScene)

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(skyScene)
