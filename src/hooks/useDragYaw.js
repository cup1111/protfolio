import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import { KEYBOARD_YAW_SPEED } from "../constants/scene";

const DAMPING_FACTOR = 0.95;

/**
 * Drives the home scene's drag-to-rotate interaction (pointer, touch, arrow keys)
 * and applies the resulting yaw directly to every ref in `targets`.
 *
 * Single owner of the interaction: individual scene objects (Island, Sky, ...)
 * stay pure renderers and know nothing about rotation.
 */
export default function useDragYaw({ targets, setIsRotating }) {
  const { gl, viewport } = useThree();

  const isRotatingRef = useRef(false);
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const keyLeftDown = useRef(false);
  const keyRightDown = useRef(false);

  const applyYaw = (delta) => {
    targets.forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.y += delta;
      }
    });
  };

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    isRotatingRef.current = true;
    setIsRotating(true);
    lastX.current = event.touches ? event.touches[0].clientX : event.clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    isRotatingRef.current = false;
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (!isRotatingRef.current) return;

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const delta = ((clientX - lastX.current) / viewport.width) * 0.01 * Math.PI;

    applyYaw(delta);
    lastX.current = clientX;
    rotationSpeed.current = delta;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      keyLeftDown.current = true;
      isRotatingRef.current = true;
      setIsRotating(true);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      keyRightDown.current = true;
      isRotatingRef.current = true;
      setIsRotating(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft") {
      keyLeftDown.current = false;
    } else if (event.key === "ArrowRight") {
      keyRightDown.current = false;
    } else {
      return;
    }
    if (!keyLeftDown.current && !keyRightDown.current) {
      isRotatingRef.current = false;
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handlePointerUp);
    canvas.addEventListener("touchmove", handlePointerMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // Keyboard hold applies a continuous step; releasing everything decays via damping.
  useFrame((_, delta) => {
    const keyDir =
      (keyLeftDown.current ? 1 : 0) - (keyRightDown.current ? 1 : 0);

    if (keyDir !== 0) {
      const step = keyDir * KEYBOARD_YAW_SPEED * delta;
      applyYaw(step);
      rotationSpeed.current = step;
      return;
    }

    if (!isRotatingRef.current) {
      rotationSpeed.current *= DAMPING_FACTOR;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      applyYaw(rotationSpeed.current);
    }
  });
}
