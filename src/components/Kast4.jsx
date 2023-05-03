import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useConfigurator } from "../contexts/Configurator";

export function Kast4(props) {
  const { nodes, materials } = useGLTF("/models/kast4.gltf");
  const { closetWidth } = useConfigurator();
  const closetGroup = useRef();

  useFrame(() => {
    // Set the scale of the top, bottom, and back meshes based on closetWidth
    nodes.onder.scale.x = closetWidth / 100;
    nodes.boven.scale.x = closetWidth / 100;
    nodes.achter.scale.x = closetWidth / 100;

    // Calculate the new position of the left and right meshes based on closetWidth
    const sideWidth = (closetWidth - 18) / 2;
    nodes.links.position.x = -sideWidth;
    nodes.rechts.position.x = sideWidth;
  });

  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, Math.PI * 0.5, 0]}
      ref={closetGroup}
    >
      <mesh
        geometry={nodes.links.geometry}
        material={nodes.links.material}
        scale={[1, 1, 1]}
      />
      <mesh
        geometry={nodes.rechts.geometry}
        material={nodes.rechts.material}
        position={[0, 0, -0.58]}
        scale={[1, 1, 1]}
      />
      <mesh
        geometry={nodes.onder.geometry}
        material={nodes.onder.material}
        position={[0, 0, -0.02]}
        scale={[1, 1, 1]}
      />
      <mesh
        geometry={nodes.boven.geometry}
        material={nodes.boven.material}
        position={[0, 0.58, -0.02]}
        scale={[1, 1, 1]}
      />
      <mesh
        geometry={nodes.achter.geometry}
        material={nodes.achter.material}
        position={[-0.59, 0, 0]}
        scale={[1, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/kast4.gltf");
