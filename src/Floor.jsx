import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {
  const PATH = "/static/textures/floor/";

  const props = useTexture({
    map: PATH + "color.jpg",
    displacementMap: PATH + "height.png",
    normalMap: PATH + "normal.jpg",
    roughnessMap: PATH + "roughness.jpg",
    aoMap: PATH + "aO.jpg",
  });

  {
    /* para ver AccumulativeShadows y ContactShadows colocar receiveShadow={false}  */
  }
  return (
    <mesh receiveShadow={true} position-y={-1.86} rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial {...props} side={DoubleSide} />
    </mesh>
  );
}
