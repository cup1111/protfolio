import { useGLTF } from '@react-three/drei'
import React from 'react'

import planeScene from '../assets/3d/plane.glb'

const Plane = (props) => {
  const { scene } = useGLTF(planeScene)

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

useGLTF.preload(planeScene)

export default Plane
