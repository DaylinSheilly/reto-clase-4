import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 0, -6],
};

{
  /* para ver AccumulativeShadows y ContactShadows colocar shadows={false} */
}

root.render(
  <StrictMode>
    <Canvas camera={cameraSettings} shadows={false}>
      <Experience />
    </Canvas>
  </StrictMode>
);
