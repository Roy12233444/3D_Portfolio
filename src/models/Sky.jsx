import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { Mesh } from 'three'

import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber'


const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()

    useFrame((_, delta) => {
      if(isRotating) {
        skyRef.current.rotation.y += 0.20 * delta
      }
    })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky