import { Stage, OrbitControls } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import Table from "./Table";

export const Experience = () => {
  const { legs } = useConfigurator();
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#85ffbd",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        <Table />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
