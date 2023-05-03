import { Stage, OrbitControls } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import Table from "./Table";
import Room from "./LowPolyRoom";
import Kast from "./Kast";
import Closet from "./Closet";
import NewKast from "./NewKast";
import { Kast4 } from "./Kast4";
import Kast5 from "./Kast5";
import Kast6 from "./Kast6";
import Kast7 from "./Kast7";

export const Experience = () => {
  const { legs } = useConfigurator();
  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#ececec",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={3}
      >
        <Table />
        {/* <Room /> */}
        {/* <Closet /> */}
        {/* <Closet /> */}
        {/* <NewKast /> */}
        {/* <Kast4 /> */}
        {/* <Kast5 /> */}
        {/* <Kast7 /> */}
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
