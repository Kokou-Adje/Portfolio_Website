import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";

const Node = ({ position, size = 0.025, color = "#692c94" }) => {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 1.5 + position[0] * 4) * 0.3;
    meshRef.current.scale.setScalar(scale);
  });
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 10, 10]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
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
    const opacity = 0.04 + Math.sin(t * 1.0 + pulseOffset) * 0.03;
    lineRef.current.material.opacity = Math.max(0.01, opacity);
  });
  return (
    <line ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#8b5ec2" transparent opacity={0.04} toneMapped={false} />
    </line>
  );
};

const Pulse = ({ start, end, speed = 0.25, offset = 0 }) => {
  const meshRef = useRef();
  const startVec = useMemo(() => new THREE.Vector3(...start), [start]);
  const endVec = useMemo(() => new THREE.Vector3(...end), [end]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const progress = ((t * speed + offset) % 1);
    const pos = startVec.clone().lerp(endVec, progress);
    meshRef.current.position.copy(pos);
    const fade = Math.sin(progress * Math.PI);
    meshRef.current.material.opacity = fade * 0.5;
    meshRef.current.scale.setScalar(0.3 + fade * 0.7);
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.012, 8, 8]} />
      <meshStandardMaterial color="#c9a0f0" emissive="#c9a0f0" emissiveIntensity={3} transparent opacity={0.3} toneMapped={false} />
    </mesh>
  );
};

const ConnectionSphere = () => {
  const groupRef = useRef();

  const { nodes, connections, pulses } = useMemo(() => {
    const nodes = [];
    const connections = [];
    const pulses = [];
    const rng = (seed) => { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; };
    const random = rng(123);

    // Generate nodes on a sphere surface
    const nodeCount = 60;
    const radius = 1.2;
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = radius * Math.sin(phi) * Math.cos(theta) + (random() - 0.5) * 0.1;
      const y = radius * Math.sin(phi) * Math.sin(theta) + (random() - 0.5) * 0.1;
      const z = radius * Math.cos(phi) + (random() - 0.5) * 0.1;

      const brightness = 0.3 + random() * 0.7;
      const r = Math.floor(105 * brightness);
      const g = Math.floor(44 * brightness);
      const b = Math.floor(148 * brightness);
      const color = `rgb(${r},${g},${b})`;

      nodes.push({ position: [x, y, z], color, size: 0.015 + random() * 0.02 });
    }

    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].position[0] - nodes[j].position[0];
        const dy = nodes[i].position[1] - nodes[j].position[1];
        const dz = nodes[i].position[2] - nodes[j].position[2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.7 && random() > 0.4) {
          connections.push({
            start: nodes[i].position,
            end: nodes[j].position,
            pulseOffset: random() * Math.PI * 2,
          });
          if (random() > 0.75) {
            pulses.push({
              start: nodes[i].position,
              end: nodes[j].position,
              speed: 0.1 + random() * 0.25,
              offset: random(),
            });
          }
        }
      }
    }

    return { nodes, connections, pulses };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (<Node key={`n-${i}`} position={node.position} color={node.color} size={node.size} />))}
      {connections.map((conn, i) => (<Connection key={`c-${i}`} start={conn.start} end={conn.end} pulseOffset={conn.pulseOffset} />))}
      {pulses.map((pulse, i) => (<Pulse key={`p-${i}`} start={pulse.start} end={pulse.end} speed={pulse.speed} offset={pulse.offset} />))}
    </group>
  );
};

const ConnectionSphereCanvas = () => {
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
      <ConnectionSphere />
      <Preload all />
    </Canvas>
  );
};

export default ConnectionSphereCanvas;
