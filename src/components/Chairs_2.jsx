import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../Constants/Customization";

export function Chairs_2(props) {
    const { nodes, materials } = useGLTF("./Models/v2/chairs_2.gltf");
    const { partToMeshMapping } = useCustomization();
    const [hoverObject, setHoverObject] = useState("");

    useEffect(() => {
        console.log(hoverObject);
    }, [hoverObject]);

    const handlePointerOver = (part) => (event) => {
        event.stopPropagation();
        setHoverObject(part);
    };

    const handlePointerOut = () => {
        setHoverObject("");
    };

    const renderMesh = (part, geometry) => {
        if (partToMeshMapping[part] === 0) return null;

        return (
            <mesh
                key={part}
                geometry={geometry}
                material={materials.chair}
                visible={partToMeshMapping[part] === 1}
                onPointerOver={handlePointerOver(part)}
                onPointerOut={handlePointerOut}
            >
                <meshStandardMaterial
                    color={hoverObject === part ? "hotpink" : "orange"}
                />
            </mesh>
        );
    };

    const chairParts = [
        { part: "A", geometry: nodes.classic_Arm.geometry },
        { part: "B", geometry: nodes.classic_Back.geometry },
        { part: "C", geometry: nodes.classic_Cushion.geometry },
        { part: "S", geometry: nodes.classic_Seat.geometry },
        { part: "L", geometry: nodes.classic_Legs.geometry },
    ];

    return (
        <group {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
            {chairParts.map(({ part, geometry }) => renderMesh(part, geometry))}
        </group>
    );
}

useGLTF.preload("./Models/v2/chairs_2.gltf");
