import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const Neuron = ({ position, size = 0.03, color = "#692c94" }) => {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 2 + position[0] * 5 + position[1] * 3) * 0.2;
    meshRef.current.scale.setScalar(scale);
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
    </mesh>
  );
};

const Connection = ({ start, end, pulseOffset = 0 }) => {
  const lineRef = useRef();
  const geometry = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const opacity = 0.06 + Math.sin(t * 1.2 + pulseOffset) * 0.04;
    lineRef.current.material.opacity = Math.max(0.02, opacity);
  });
  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#8b5ec2" transparent opacity={0.06} toneMapped={false} />
    </line>
  );
};

const Pulse = ({ start, end, speed = 0.3, offset = 0 }) => {
  const meshRef = useRef();
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const progress = ((t * speed + offset) % 1);
    const pos = startVec.clone().lerp(endVec, progress);
    meshRef.current.position.copy(pos);
    const fade = Math.sin(progress * Math.PI);
    meshRef.current.material.opacity = fade * 0.6;
    meshRef.current.scale.setScalar(0.3 + fade * 0.7);
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshStandardMaterial color="#c9a0f0" emissive="#c9a0f0" emissiveIntensity={3} transparent opacity={0.4} toneMapped={false} />
    </mesh>
  );
};

const NeuralBrain = () => {
  const groupRef = useRef();
  const { neurons, connections, pulses } = useMemo(() => {
    const neurons = [];
    const connections = [];
    const pulses = [];
    const rng = (seed) => { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; };
    const random = rng(42);

    // Spread nodes evenly across a sphere using Fibonacci distribution
    const nodeCount = 55;
    const radius = 1.1;
    const layerColors = ["#4a1d72", "#5a2d82", "#692c94", "#7b3fa7", "#8e52ba", "#a165cd"];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = radius * Math.sin(phi) * Math.cos(theta) + (random() - 0.5) * 0.1;
      const y = radius * Math.sin(phi) * Math.sin(theta) + (random() - 0.5) * 0.1;
      const z = radius * Math.cos(phi) + (random() - 0.5) * 0.1;

      // Color gradient based on vertical position
      const colorIndex = Math.floor(((y / radius) + 1) / 2 * (layerColors.length - 1));
      const color = layerColors[Math.min(colorIndex, layerColors.length - 1)];

      neurons.push({ position: [x, y, z], color, size: 0.01 + random() * 0.01 });
    }

    // Connect nearby neurons (proximity-based, like ConnectionSphere)
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const dx = neurons[i].position[0] - neurons[j].position[0];
        const dy = neurons[i].position[1] - neurons[j].position[1];
        const dz = neurons[i].position[2] - neurons[j].position[2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.65 && random() > 0.45) {
          connections.push({
            start: neurons[i].position,
            end: neurons[j].position,
            pulseOffset: random() * Math.PI * 2,
          });
          if (random() > 0.75) {
            pulses.push({
              start: neurons[i].position,
              end: neurons[j].position,
              speed: 0.15 + random() * 0.3,
              offset: random(),
            });
          }
        }
      }
    }
    return { neurons, connections, pulses };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
    groupRef.current.position.y = Math.sin(t * 0.4) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {neurons.map((neuron, i) => (<Neuron key={`n-${i}`} position={neuron.position} color={neuron.color} size={neuron.size} />))}
      {connections.map((conn, i) => (<Connection key={`c-${i}`} start={conn.start} end={conn.end} pulseOffset={conn.pulseOffset} />))}
      {pulses.map((pulse, i) => (<Pulse key={`p-${i}`} start={pulse.start} end={pulse.end} speed={pulse.speed} offset={pulse.offset} />))}
    </group>
  );
};

const NeuralNetworkCanvas = () => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3.5], fov: 40 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[3, 3, 3]} intensity={0.3} color="#692c94" />
      <pointLight position={[-3, -3, -3]} intensity={0.2} color="#b57edc" />
      <NeuralBrain />
      <Preload all />
    </Canvas>
  );
};

export default NeuralNetworkCanvas;
