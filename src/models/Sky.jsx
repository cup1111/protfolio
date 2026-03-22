import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

export default function Sky({ isRotating, setIsRotating, ...props }) {
  const { scene } = useGLTF(skyScene)
  const skyRef = useRef()
  const { gl, viewport } = useThree()

  const lastX = useRef(0)
  const rotationSpeed = useRef(0)
  const dampingFactor = 0.95

  const handlePointerDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    lastX.current = clientX
  }

  const handlePointerUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(false)
  }

  const handlePointerMove = (event) => {
    event.stopPropagation()
    event.preventDefault()
    if (!isRotating || !skyRef.current) return
    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    const delta = (clientX - lastX.current) / viewport.width
    skyRef.current.rotation.y += delta * 0.01 * Math.PI
    lastX.current = clientX
    rotationSpeed.current = delta * 0.01 * Math.PI
  }

  const handleKeyDown = (event) => {
    if (!skyRef.current) return
    if (event.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true)
      skyRef.current.rotation.y += 0.005 * Math.PI
      rotationSpeed.current = 0.007
    } else if (event.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true)
      skyRef.current.rotation.y -= 0.005 * Math.PI
      rotationSpeed.current = -0.007
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setIsRotating(false)
    }
  }

  const handleTouchStart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    lastX.current = clientX
  }

  const handleTouchEnd = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)
  }

  const handleTouchMove = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (!isRotating || !skyRef.current) return
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const delta = (clientX - lastX.current) / viewport.width
    skyRef.current.rotation.y += delta * 0.01 * Math.PI
    lastX.current = clientX
    rotationSpeed.current = delta * 0.01 * Math.PI
  }

  useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener('pointerdown', handlePointerDown)
    canvas.addEventListener('pointerup', handlePointerUp)
    canvas.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    canvas.addEventListener('touchstart', handleTouchStart)
    canvas.addEventListener('touchend', handleTouchEnd)
    canvas.addEventListener('touchmove', handleTouchMove)

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown)
      canvas.removeEventListener('pointerup', handlePointerUp)
      canvas.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      canvas.removeEventListener('touchstart', handleTouchStart)
      canvas.removeEventListener('touchend', handleTouchEnd)
      canvas.removeEventListener('touchmove', handleTouchMove)
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  useFrame(() => {
    if (!skyRef.current) return
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0
      }
      skyRef.current.rotation.y += rotationSpeed.current
    }
  })

  return (
    <group ref={skyRef} {...props}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(skyScene)
