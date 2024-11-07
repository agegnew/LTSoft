import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

const HumanAvatarModel = ({ position, rotation, delay }) => {
  const { scene } = useGLTF("/placeholder-human-avatar.glb");
  const meshRef = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (meshRef.current) {
      gsap.from(meshRef.current.position, {
        x: position[0] < 0 ? -10 : (position[0] > 0 ? 10 : position[0]),
        y: position[1] < 0 ? -10 : (position[1] > 0 ? 10 : position[1]),
        z: position[2],
        duration: 2,
        delay: delay,
        ease: "power3.out"
      });
    }
  }, [position, delay]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.lookAt(camera.position);
    }
  });

  return <primitive object={scene} ref={meshRef} scale={[0.5, 0.5, 0.5]} position={position} rotation={rotation} />;
};

export default HumanAvatarModel;