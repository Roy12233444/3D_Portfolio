import React, { useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Bird = ({isRotating}) => {
    const birdRef = useRef()
    const { scene, animations } = useGLTF(birdScene)
    const { actions } = useAnimations(animations, birdRef)

    useEffect(() => {
        actions['Take 001'].play()
    }, [])

    useFrame(({ clock , camera }) => {
      // Update Y position simulate the flight moving in a sin wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      // Smoothly rotate the bird when changing directions
      if(birdRef.current.position.x > camera.position.x + 10) {
        // Gradually rotate towards PI over time
        birdRef.current.rotation.y += (Math.PI - birdRef.current.rotation.y) * 0.05;
      } else if(birdRef.current.position.x < camera.position.x - 10) {
        // Gradually rotate towards 0 over time
        birdRef.current.rotation.y += (0 - birdRef.current.rotation.y) * 0.05;
      }

      // Update X and Z positions based on current rotation
      const moveSpeed = 0.01;
      const rotationThreshold = Math.PI / 2; // Threshold to determine direction

      if(birdRef.current.rotation.y < rotationThreshold) {
        // Moving forward
        birdRef.current.position.x += moveSpeed;
        birdRef.current.position.z -= moveSpeed;
      } else {
        // Moving backward with smooth transition based on rotation
        const transitionFactor = Math.min(1, (birdRef.current.rotation.y - rotationThreshold) / (Math.PI - rotationThreshold));
        birdRef.current.position.x -= moveSpeed * transitionFactor;
        birdRef.current.position.z += moveSpeed * transitionFactor;
      }
    })

    

    return (
        <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

// Make sure to add this line to preload the model
useGLTF.preload(birdScene)

export default Bird