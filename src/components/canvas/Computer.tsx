import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Object3D } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface CustomGLTF extends GLTF {
  materials: Record<string, THREE.Material>;
  nodes: Record<string, Object3D>;
  animations: THREE.AnimationClip[];
}

const Model = (props) => {
  const { nodes, materials } = useGLTF(
    '/desktop_pc/scene-transformed.glb'
  ) as CustomGLTF;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Cube_Material_0 as THREE.Mesh).geometry}
        material={materials.Material}
        position={[-0.61, -0.006, 1.561]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-3.689, 7.316, 0.26]}
      />
      <mesh
        geometry={(nodes.Cube011_Material010_0 as THREE.Mesh).geometry}
        material={materials['Material.074']}
        position={[-0.859, 1.997, -3.537]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.735, 0.9, 1.573]}
      />
      <mesh
        geometry={(nodes.Cylinder_Material009_0 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
        position={[0.742, 0.512, -2.629]}
        scale={[0.061, 0.063, 0.023]}
      />
      <mesh
        geometry={(nodes.Cube015_Material016_0 as THREE.Mesh).geometry}
        material={materials['Material.074_1']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.894, 0.007, 1.064]}
      />
      <mesh
        geometry={(nodes.Cube020_Material020_0 as THREE.Mesh).geometry}
        material={materials['Material.074_2']}
        position={[-0.961, 0.788, -3.634]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.607, 0.739, 0.343]}
      />
      <mesh
        geometry={(nodes.IOSHIELD_IOSHIELD_0 as THREE.Mesh).geometry}
        material={materials['Material.074_3']}
        position={[-2.597, 2.848, -4.225]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.265, 0.309, 0.318]}
      />
      <mesh
        geometry={
          (nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0 as THREE.Mesh)
            .geometry
        }
        material={materials['Material.074_4']}
        position={[-2.356, 2.877, -4.239]}
        rotation={[0, 0, 0.651]}
        scale={0.063}
      />
      <mesh
        geometry={(nodes.Cube025_Material023_0 as THREE.Mesh).geometry}
        material={materials['Material.023']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.894, 0.007, 1.064]}
      />
      <mesh
        geometry={(nodes.Cube026_Material024_0 as THREE.Mesh).geometry}
        material={materials['Material.024']}
        position={[-1.655, 2.241, -4.408]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.894, 0.007, 1.064]}
      />
      <mesh
        geometry={
          (nodes['metal-mesh-500x500_metal-mesh-500x500_0'] as THREE.Mesh)
            .geometry
        }
        material={materials['Material.074_5']}
        position={[-0.423, 3.57, -3.542]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1, 1.337, 1]}
      />
      <mesh
        geometry={(nodes.Cube027_Material008_0 as THREE.Mesh).geometry}
        material={materials['Material.074_6']}
        position={[-0.964, 2.71, -4.309]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.015, 0.109, 0.443]}
      />
      <mesh
        geometry={(nodes.Cube028_Material026_0 as THREE.Mesh).geometry}
        material={materials['Material.074_7']}
        position={[-0.957, 2.71, -4.324]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.011, 0.097, 0.444]}
      />
      <mesh
        geometry={(nodes.Cube045_Material027_0 as THREE.Mesh).geometry}
        material={materials['Material.074_8']}
        position={[-2.121, 0.794, -2.982]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.355, 0.052, 0.206]}
      />
      <mesh
        geometry={
          (
            nodes[
              'rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0'
            ] as THREE.Mesh
          ).geometry
        }
        material={materials['Material.074_9']}
        position={[-0.935, 0.832, -2.888]}
        scale={0.369}
      />
      <mesh
        geometry={
          (nodes['maxresdefault_(1)_maxresdefault_(1)_0'] as THREE.Mesh)
            .geometry
        }
        material={materials['Material.074_10']}
        position={[0.877, 0.836, -3.553]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.394}
      />
      <mesh
        geometry={(nodes.Cylinder001_Material028_0 as THREE.Mesh).geometry}
        material={materials['Material.074_11']}
        position={[-1.692, 1.144, -0.716]}
        rotation={[-1.571, 1.554, 0]}
        scale={[0.194, 0.194, 0.025]}
      />
      <mesh
        geometry={(nodes.NVIDIA_LOGO_NVIDIA_LOGO_0 as THREE.Mesh).geometry}
        material={materials['Material.074_12']}
        position={[0.006, 0.704, -2.891]}
        scale={0.452}
      />
      <mesh
        geometry={(nodes.psuback_psuback_0 as THREE.Mesh).geometry}
        material={materials['Material.074_13']}
        position={[-2.603, 0.78, -3.528]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.595}
      />
      <mesh
        geometry={(nodes.usb_usb_0 as THREE.Mesh).geometry}
        material={materials['Material.074_14']}
        position={[0.705, 3.571, -2.897]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.073}
      />
      <mesh
        geometry={(nodes.Cube048_Material035_0 as THREE.Mesh).geometry}
        material={materials['Material.074_15']}
        position={[-1.614, 2.682, -3.682]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.174, 0.394, 0.401]}
      />
      <mesh
        geometry={(nodes.Cube049_Material040_0 as THREE.Mesh).geometry}
        material={materials['Material.074_16']}
        position={[-1.614, 2.682, -3.682]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.174, 0.394, 0.401]}
      />
      <mesh
        geometry={(nodes.Cylinder005_Material041_0 as THREE.Mesh).geometry}
        material={materials['Material.074_17']}
        position={[-1.611, 2.687, -3.69]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.327, 0.327, 0.342]}
      />
      <mesh
        geometry={
          (
            nodes[
              'test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0'
            ] as THREE.Mesh
          ).geometry
        }
        material={materials['Material.074_18']}
        position={[-1.159, 1.507, -4.352]}
        scale={0.352}
      />
      <mesh
        geometry={(nodes.Cylinder006_Material050_0 as THREE.Mesh).geometry}
        material={materials['Material.074_19']}
        position={[-2.095, 1.846, -3.701]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.364, 0.382, 0.106]}
      />
      <mesh
        geometry={(nodes.Cylinder007_Material051_0 as THREE.Mesh).geometry}
        material={materials['Material.074_20']}
        position={[-1.244, 1.846, -3.701]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.364, 0.382, 0.106]}
      />
      <mesh
        geometry={(nodes.Plane_Material053_0 as THREE.Mesh).geometry}
        material={materials['Material.074_21']}
        position={[1.172, 0.256, -0.292]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.244, 1.541, 1.199]}
      />
      <mesh
        geometry={(nodes.Cube057_Material059_0 as THREE.Mesh).geometry}
        material={materials['Material.074_22']}
        position={[-1.272, 2.001, -3.706]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.281, 0.524, 0.127]}
      />
      <mesh
        geometry={(nodes.Cube058_Material063_0 as THREE.Mesh).geometry}
        material={materials['Material.074_23']}
        position={[-1.226, 2.137, -3.704]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.333, 0.545, 0.008]}
      />
      <mesh
        geometry={
          (nodes.aorus_logotranspa_aorus_logotranspa_0 as THREE.Mesh).geometry
        }
        material={materials['Material.074_24']}
        position={[-1.824, 1.817, -3.158]}
        scale={[0.086, 0.086, 0.091]}
      />
      <mesh
        geometry={(nodes.Cube064_Material074_0 as THREE.Mesh).geometry}
        material={materials['Material.074_25']}
        position={[1.114, 0.324, -0.274]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[-0.429, 0.429, 0.229]}
      />
      <mesh
        geometry={(nodes.Cube075_Material086_0 as THREE.Mesh).geometry}
        material={materials['Material.074_26']}
        position={[-2.58, 1.955, -3.715]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.012, 0.524, 0.177]}
      />
      <mesh
        geometry={
          (nodes['Color-PewDiePie-Logo_Color-PewDiePie-Logo_0'] as THREE.Mesh)
            .geometry
        }
        material={materials['Material.074_27']}
        position={[1.295, 0.466, -0.275]}
        rotation={[-Math.PI / 2, 0.284, Math.PI / 2]}
        scale={0.124}
      />
      <mesh
        geometry={(nodes.gallerymodel_gallerymodel_0 as THREE.Mesh).geometry}
        material={materials['Material.074_28']}
        position={[-1.42, 1.648, 5.961]}
        rotation={[0.441, -1.284, 0.441]}
        scale={0.807}
      />
      <mesh
        geometry={(nodes.bg2_bg2_0 as THREE.Mesh).geometry}
        material={materials['Material.074_29']}
        position={[-1.537, 1.949, 0.83]}
        rotation={[1.572, -1.442, 1.567]}
        scale={1.13}
      />
      <mesh
        geometry={(nodes.MY_SCREEN_MY_SCREEN_0 as THREE.Mesh).geometry}
        material={materials['Material.074_30']}
        position={[-1.362, 3.001, 3.004]}
        rotation={[-Math.PI / 2, 1.501, Math.PI / 2]}
        scale={[3.316, 3.481, 3.316]}
      />
      <mesh
        geometry={
          (nodes['gigabyte-logo_gigabyte-logo_0'] as THREE.Mesh).geometry
        }
        material={materials['Material.074_31']}
        position={[-1.615, 4.494, 0.821]}
        rotation={[1.571, -1.501, 1.571]}
        scale={0.237}
      />
      <mesh
        geometry={(nodes.Cube004_Material002_0 as THREE.Mesh).geometry}
        material={materials['Material.002']}
        position={[-1.487, 1.81, 2.992]}
        rotation={[-Math.PI / 2, -0.07, Math.PI / 2]}
        scale={[1.676, 0.178, 1.935]}
      />
      <mesh
        geometry={(nodes.Object_47_Material005_0 as THREE.Mesh).geometry}
        material={materials['Material.074_32']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_49_Tasten_2_0 as THREE.Mesh).geometry}
        material={materials.Tasten_2}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_55_Material057_0 as THREE.Mesh).geometry}
        material={materials['Material.074_33']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_59_Material060_0 as THREE.Mesh).geometry}
        material={materials['Material.074_34']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_65_Material066_0 as THREE.Mesh).geometry}
        material={materials['Material.074_35']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_67_Material067_0 as THREE.Mesh).geometry}
        material={materials['Material.074_36']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_81_Material068_0 as THREE.Mesh).geometry}
        material={materials['Material.074_37']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_93_Material069_0 as THREE.Mesh).geometry}
        material={materials['Material.074_38']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes.Object_103_Material070_0 as THREE.Mesh).geometry}
        material={materials['Material.074_39']}
        position={[1.477, 0.326, 4.031]}
        rotation={[-Math.PI / 2, -1.481, Math.PI / 2]}
        scale={0.914}
      />
      <mesh
        geometry={(nodes['Object_782_OnTheFly-bg_0'] as THREE.Mesh).geometry}
        material={materials['Material.074_40']}
        position={[1.016, 0.406, 2.44]}
        rotation={[-Math.PI / 2, 0.078, Math.PI / 2]}
        scale={0.219}
      />
      <instancedMesh
        args={[
          (nodes.Cube018_Material017_0 as THREE.Mesh).geometry,
          materials.PaletteMaterial001,
          5,
        ]}
        instanceMatrix={
          (nodes.Cube018_Material017_0 as THREE.InstancedMesh).instanceMatrix
        }
      />
      <instancedMesh
        args={[
          (nodes.aorus_case_fans_aorus_case_fans_0 as THREE.Mesh).geometry,
          materials['Material.074_0'],
          10,
        ]}
        instanceMatrix={
          (nodes.aorus_case_fans_aorus_case_fans_0 as THREE.InstancedMesh)
            .instanceMatrix
        }
      />
      <instancedMesh
        args={[
          (nodes.Cube033_Material025_0 as THREE.Mesh).geometry,
          materials.PaletteMaterial001,
          10,
        ]}
        instanceMatrix={
          (nodes.Cube033_Material025_0 as THREE.InstancedMesh).instanceMatrix
        }
      />
      <instancedMesh
        args={[
          (nodes.Object_784_Material057_0 as THREE.Mesh).geometry,
          materials['Material.074_33'],
          6,
        ]}
        instanceMatrix={
          (nodes.Object_784_Material057_0 as THREE.InstancedMesh).instanceMatrix
        }
      />
      <instancedMesh
        args={[
          (nodes.Object_974_Material057_0 as THREE.Mesh).geometry,
          materials['Material.074_33'],
          7,
        ]}
        instanceMatrix={
          (nodes.Object_974_Material057_0 as THREE.InstancedMesh).instanceMatrix
        }
      />
      <instancedMesh
        args={[
          (nodes.Object_976_Material070_0 as THREE.Mesh).geometry,
          materials['Material.074_39'],
          6,
        ]}
        instanceMatrix={
          (nodes.Object_976_Material070_0 as THREE.InstancedMesh).instanceMatrix
        }
      />
    </group>
  );
};

useGLTF.preload('/desktop_pc/scene-transformed.glb');

export default Model;
