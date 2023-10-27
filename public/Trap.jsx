/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 trap.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/trap.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.box.geometry} material={nodes.box.material} position={[0.001, -0.304, 0.122]} />
      <mesh geometry={nodes.doorl.geometry} material={nodes.doorl.material} position={[-0.178, 0.177, -0.205]} />
      <mesh geometry={nodes.doorr.geometry} material={nodes.doorr.material} position={[0.178, 0.177, -0.205]} />
      <mesh geometry={nodes.glow.geometry} material={nodes.glow.material} />
    </group>
  )
}

useGLTF.preload('/trap.glb')