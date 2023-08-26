import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from 'three';
import CanvasLoader from '../Loader';

interface CustomGLTF extends GLTF {
  materials: Record<string, THREE.Material>;
  nodes: Record<string, Object3D>;
}

const Earth = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    '/planet/scene-transformed.glb'
  ) as CustomGLTF;
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='GLTF_SceneRootNode' rotation={[0.031, 0, 0.064]}>
          <group name='Clouds_1'>
            <mesh
              name='Object_4'
              geometry={(nodes.Object_4 as THREE.Mesh).geometry}
              material={materials.Clouds}
            />
          </group>
          <group name='Planet_2'>
            <mesh
              name='Object_6'
              geometry={(nodes.Object_6 as THREE.Mesh).geometry}
              material={materials.Planet}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

const EarthCanvas = () => {
  useGLTF.preload('/planet/scene-transformed.glb');
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
