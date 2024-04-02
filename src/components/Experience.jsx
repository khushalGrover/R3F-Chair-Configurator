import { OrbitControls, PresentationControls, Stage, MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { Chairs_2 } from "./Chairs_2";

export const Experience = ({ arg }) => {
	// const props = useTexture({
	//   map: 'PavingStones092_1K_Color.jpg',
	//   displacementMap: 'PavingStones092_1K_Displacement.jpg',
	//   normalMap: 'PavingStones092_1K_Normal.jpg',
	//   roughnessMap: 'PavingStones092_1K_Roughness.jpg',
	//   aoMap: 'PavingStones092_1K_AmbientOcclusion.jpg',
	// })
	let textureMap = arg ? `${arg}.jpg` : "1.jpg";

	const props = useTexture({
		map: textureMap,
	});
	return (
		<>
    		{/* <PresentationControls speed={1.5} global={false} zoom={0.8} polar={[0, Math.PI / 4]}> */}
				<Stage environment="city" intensity={0.5} contactShadow={false}>
					<OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} minDistance={1} maxDistance={2} />
					{/* <ambientLight intensity={0.5} /> */}
					{/* <mesh >
						<boxGeometry />
						<meshStandardMaterial {...props} />
					</mesh> */}
					<Chairs_2 />

				</Stage>
				<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-0.4, 0]}>
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
				</mesh>

    		{/* </PresentationControls> */}
		</>
	);
};
