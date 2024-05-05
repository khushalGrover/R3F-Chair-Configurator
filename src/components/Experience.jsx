import {
	OrbitControls,
	PresentationControls,
	Stage,
	MeshReflectorMaterial,
	useTexture,
	Html,
} from "@react-three/drei";

export const Experience = ({ arg }) => {
	let textureMap = "1.jpg";

	const props = useTexture({
		map: textureMap,
	});
	return (
		<>
			<Stage environment="city" intensity={0.5} contactShadow={false}>
				<PresentationControls
					speed={1.5}
					global={false}
					zoom={0.8}
					polar={[0, 0]}
					azimuth={[-Math.PI / 4, Math.PI / 4]}
				>
					{/* <OrbitControls
					makeDefault
					minPolarAngle={-Math.PI / 4}
					maxPolarAngle={Math.PI / 2}
					minDistance={1}
					maxDistance={2}
				/> */}
					{/* <ambientLight intensity={0.5} /> */}
					<mesh scale={0.5}>
						<boxGeometry />
						<meshStandardMaterial {...props} />
					</mesh>
				</PresentationControls>
			</Stage>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.251, 0]}>
				<planeGeometry args={[100, 100]} />
				<MeshReflectorMaterial
					blur={[400, 400]}
					resolution={1024}
					mixBlur={1}
					mixStrength={40}
					reoughness={1}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#101010"
					matalness={0.5}
				/>
				{/* <Html
					scale={0.2}
					rotation={[Math.PI /2, Math.PI / 2, 0]}
					position={[0,0,1]}
					transform
					// occlude
				>
					<div className="annotation">
						Chair #1
					</div>
				</Html> */}
			</mesh>
		</>
	);
};
