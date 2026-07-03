import useDragYaw from "../hooks/useDragYaw";

/**
 * Invisible scene driver: owns the home scene's drag-to-rotate interaction and
 * applies it to every ref in `targets`. Renders nothing.
 */
export default function DragYawControl({ targets, setIsRotating }) {
  useDragYaw({ targets, setIsRotating });
  return null;
}
