import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

export default function Box() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.2;
  });
    
    const PATH = "/static/textures/box/"; //objeto

    const props = useTexture({
      map: PATH + "color.jpg",
      normalMap: PATH + "normal.jpg",
      roughnessMap: PATH + "roughness.jpg",
      aoMap: PATH + "ao.jpg",
    });

  return (
    <mesh ref={cubeRef} castShadow position-x={2} position-y={-1} scale={1}>
      <boxGeometry />
      <meshStandardMaterial {...props} color={"mediumpurple"} />
    </mesh>
  );
}
