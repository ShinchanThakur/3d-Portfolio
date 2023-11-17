import { useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../assets/3d/bird.glb';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions["Take 001"].play();
    }, []);

    useFrame(({ clock, camera }) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
    });

    return (
        <mesh
            position={[-5, 2, 1]}
            scale={[0.003, 0.003, 0.003]}
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    );
};

export default Bird;