import {
  Sky,
  ContactShadows,
  RandomizedLight,
  AccumulativeShadows,
  SoftShadows,
  BakeShadows,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import Door from "./Door";
import Floor from "./Floor";
import Box from "./Box";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import {
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  PointLight,
  PointLightHelper,
  RectAreaLight,
  SpotLight,
  SpotLightHelper,
} from "three";

export default function Experience() {
  const directionalLightRef = useRef();
  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const rectAreaLightRef = useRef();
  const spotLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 1);
  useHelper(hemisphereLightRef, HemisphereLightHelper, 1);
  useHelper(pointLightRef, PointLightHelper, 1);
  useHelper(spotLightRef, SpotLightHelper, 1);

  const hemisphereLight = new HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemisphereLight.position.set(0, 5, 0);
  hemisphereLight.castShadow = true;

  const pointLight = new PointLight(0xffff00, 1, 100);
  pointLight.position.set(0, 5, 2);
  pointLight.castShadow = true;

  const rectAreaLight = new RectAreaLight(0xffffff, 1, 10, 10);
  rectAreaLight.position.set(5, 1, 0);
  rectAreaLight.castShadow = true;

  const spotLight = new SpotLight(0xffffff, 1);
  spotLight.position.set(2, 5, 0);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.05;
  spotLight.decay = 2;
  spotLight.distance = 200;
  spotLight.castShadow = true;

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#000000",
    opacity: { value: 1, min: 0, max: 10 },
    blur: { value: 1, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Door />

      <Box />

      <Floor />

      {/** luces de la tarea */}

      {/*<ambientLight intensity={0.5} />*/}

      {/*<directionalLight
          ref={directionalLightRef}
          //sunPosition={sunPosition}
          position={[1, 2, 3]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
      />*/}

      {/*<group>
        <primitive object={hemisphereLight} ref={hemisphereLightRef} />
      </group>*/}

      {/*<group>
          <primitive
            object={pointLight}
            ref={pointLightRef}
            shadow-mapSize={[1024, 1024]}
          />
      </group>*/}

      {/*<group>
            <primitive object={rectAreaLight} />
      </group>*/}

      <group>
        <primitive object={spotLight} ref={spotLightRef} />
      </group>

      {/** luces y sombras del video  */}

      <BakeShadows />

      {/*difumina la sombra */}
      {/*<SoftShadows />*/}

      {/*<AccumulativeShadows
          position-y={[-1.61]}
          scale={8}
          color="red"
          opacity={1}
          frames={Infinity}
          temporal
          blend={100}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            ambient={0.5}
            intensity={1}
            position={[3, 20, 1]}
            bias={0.001}
          />
        </AccumulativeShadows>

        <ContactShadows
          position-y={[-1.61]}
          scale={8}
          resolution={512}
          far={5}
          color={color}
          opacity={opacity}
          blur={blur}
        /> /*}

        {/*<Sky sunPosition={sunPosition} />*/}
    </>
  );
}
