/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/Laptop.glb 
*/

import React, { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Laptop.glb");
  const { actions, names, mixer } = useAnimations(animations, group);
  const router = useRouter();
  mixer.addEventListener("finished", (e) => router.push("/featuredwork"));

  useLayoutEffect(() => {
    names.forEach((animation) => {
      if (actions?.[animation]) {
        actions[animation].setLoop(THREE.LoopOnce);
        actions[animation].clampWhenFinished = true;
        // actions[animation].play();
      }
    });
  }, [names, actions, router]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube002"
          position={[-0.512, 0.003, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.168, 0.005, 0.153]}
        >
          <mesh
            name="Cube009"
            geometry={nodes.Cube009.geometry}
            material={materials["Material.040"]}
          />
          <mesh
            name="Cube009_1"
            geometry={nodes.Cube009_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Cube009_2"
            geometry={nodes.Cube009_2.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group
          name="Cube004"
          position={[-0.52, 0, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.168, 0.005, 0.153]}
        >
          <mesh
            name="Cube004_1"
            geometry={nodes.Cube004_1.geometry}
            material={materials["Material.040"]}
          />
          <mesh
            name="Cube004_2"
            geometry={nodes.Cube004_2.geometry}
            material={materials["Material.041"]}
          />
          <mesh
            name="Cube004_3"
            geometry={nodes.Cube004_3.geometry}
            material={materials["Material.042"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Laptop.glb");
