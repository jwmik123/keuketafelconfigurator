import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { useFrame } from "@react-three/fiber";

export function Closet(props) {
  const { nodes, materials } = useGLTF("/models/closet.gltf");

  const { closetWidth } = useConfigurator();

  const bottomWidth = useRef();
  const topWidth = useRef();
  const backWidth = useRef();
  const leftSide = useRef();
  const rightSide = useRef();

  const closetWidthScale = closetWidth / 60;

  useFrame((_state, delta) => {
    const shelfWidth = closetWidth - 3.6;
    // Bottom, top and back width
    const targetBottomWidthScale = new THREE.Vector3(
      100,
      100,
      100 * closetWidthScale + 6.4 * (closetWidthScale - 1)
    );
    bottomWidth.current.scale.lerp(targetBottomWidthScale, delta * 12);

    const targetTopWidthScale = new THREE.Vector3(
      100,
      100,
      100 * closetWidthScale + 6.4 * (closetWidthScale - 1)
    );
    topWidth.current.scale.lerp(targetTopWidthScale, delta * 12);

    const targetBackWidthScale = new THREE.Vector3(
      100,
      100,
      100 * closetWidthScale
    );
    backWidth.current.scale.lerp(targetBackWidthScale, delta * 12);

    // Left and right side
    const targetLeftPosition = new THREE.Vector3(
      1.3,
      30,
      -30 * closetWidthScale
    );
    leftSide.current.position.lerp(targetLeftPosition, delta * 12);

    const targetRightPosition = new THREE.Vector3(
      1.3,
      30,
      30 * closetWidthScale
    );
    rightSide.current.position.lerp(targetRightPosition, delta * 12);
  });

  return (
    <group {...props} dispose={null} rotation={[0, Math.PI * 1.5, 0]}>
      <mesh
        castShadow
        geometry={nodes.boven.geometry}
        material={materials.groen}
        position={[1.3, 60, 0]}
        ref={topWidth}
      />
      <mesh
        castShadow
        geometry={nodes.onder.geometry}
        material={materials.groen}
        position={[1.3, 0, 0]}
        ref={bottomWidth}
      />

      <mesh
        castShadow
        geometry={nodes.achter.geometry}
        material={materials.rood}
        position={[31.8, 30, 0]}
        scale={[100, 100, 100]}
        ref={backWidth}
      />

      <mesh
        castShadow
        geometry={nodes.links.geometry}
        material={materials.blauw}
        position={[1.3, 30, -30]}
        scale={100}
        ref={leftSide}
      />

      <mesh
        castShadow
        geometry={nodes.rechts.geometry}
        material={materials.blauw}
        position={[1.3, 30, 30]}
        scale={100}
        ref={rightSide}
      />
    </group>
  );
}

useGLTF.preload("/models/closet.gltf");

export default Closet;
