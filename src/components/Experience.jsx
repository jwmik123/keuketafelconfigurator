import {
  Stage,
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";
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
    <Stage
      intensity={1.5}
      environment="city"
      shadows={{
        type: "accumulative",
        color: "#e1e1e1",
        colorBlend: 2,
        opacity: 2,
      }}
      adjustCamera={2}
    >
      <Table />
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </Stage>
  );
};
