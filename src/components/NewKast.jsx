import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useConfigurator } from "../contexts/Configurator";

export function NewKast(props) {
  const { nodes, materials } = useGLTF("/models/newKast.gltf");

  const { closetWidth } = useConfigurator();
  const scale = closetWidth / 60;
  useFrame((_state, delta) => {});

  return (
    <group {...props} dispose={null} rotation={[0, Math.PI * 0.5, 0]}>
      <mesh
        geometry={nodes.boven.geometry}
        material={materials.groen}
        position={[0, 0.58, -0.02]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 1]}
      />
      <mesh
        geometry={nodes.onder.geometry}
        material={materials.groen}
        position={[0, 0, -0.02]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.achter.geometry}
        material={materials.rood}
        position={[-0.59, 0, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />

      <mesh
        geometry={nodes.links.geometry}
        material={materials.blauw}
        position={[0, 0, 0]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        geometry={nodes.rechts.geometry}
        material={materials.blauw}
        position={[0, 0, -0.58 * scale]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/models/newKast.gltf");

export default NewKast;
