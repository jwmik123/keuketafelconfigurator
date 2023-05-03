/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/kast5.gltf
*/
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";

export function Kast5(props) {
  const { nodes, materials } = useGLTF("/models/kast5.gltf");

  const { closetWidth } = useConfigurator();

  return (
    <group {...props} dispose={null} rotation={[0, Math.PI * 0.5, 0]}>
      <mesh geometry={nodes.links.geometry} material={nodes.links.material} />
      <mesh
        geometry={nodes.rechts.geometry}
        material={nodes.rechts.material}
        position={[0, 0, -0.58]}
      />
      <mesh
        geometry={nodes.standaard.geometry}
        material={nodes.standaard.material}
      />
      <mesh
        geometry={nodes.onder.geometry}
        material={nodes.onder.material}
        position={[0, 0, -0.02]}
      />
      <mesh
        geometry={nodes.boven.geometry}
        material={nodes.boven.material}
        position={[0, 0.58, -0.02]}
      />
      <mesh
        geometry={nodes.achter.geometry}
        material={nodes.achter.material}
        position={[-0.59, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/kast5.gltf");

export default Kast5;