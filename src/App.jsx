import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Interface from "./components/Interface";
import { Perf } from "r3f-perf";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, -12], fov: 45 }}>
        {/* <Perf position="top-left" /> */}
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
