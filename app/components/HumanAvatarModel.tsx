'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function HumanAvatarModel() {
  const { scene } = useGLTF("/placeholder-human-avatar.glb")
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return <primitive object={scene} ref={meshRef} scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]} />
}