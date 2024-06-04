import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Earth = () => {

  const earth = useGLTF('./planet_earth/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={6} groundColor='black' />
      <pointLight intensity={0.7} />
      <spotLight
        intensity={200}
        position={[8, 3, 1]}
        penumbra={1}
        shadow-mapSize={124}
      />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={-3}
        rotation-y={0}
      />
    </mesh>


  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 20,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;