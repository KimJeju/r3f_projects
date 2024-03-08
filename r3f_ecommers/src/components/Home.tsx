import { Canvas } from "@react-three/fiber";
import ShowRoom from "./ShowRoom";
import { OrbitControls } from "@react-three/drei";

export default function Home(){

    return(
        <>
            <Canvas>   
                <OrbitControls /> 
                <directionalLight position={[3,3,3]}/>
                <axesHelper args={[5]} />
                <gridHelper />
                <ShowRoom />
            </Canvas>
        </>
    )
}