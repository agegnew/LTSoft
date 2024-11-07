import React from 'react';
import { OrbitControls, Environment } from '@react-three/drei';
import HumanAvatarModel from './HumanAvatarModel';

const Scene = () => {
  return (
    <>
      <HumanAvatarModel position={[-2, 0, 0]} rotation={[0, Math.PI / 4, 0]} delay={0} />
      <HumanAvatarModel position={[2, 0, 0]} rotation={[0, -Math.PI / 4, 0]} delay={0.5} />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
    </>
  );
};

export default Scene;