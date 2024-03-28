import { Canvas } from "@react-three/fiber";
import ShowRoom from "@components/three/ShowRoom";
import { OrbitControls } from "@react-three/drei";

export default function Home(){

    return(
        <>
            <Canvas>   
                {/* <OrbitControls />  */}
                <axesHelper args={[5]} />
                <gridHelper />
                <ShowRoom />
            </Canvas>
        </>
    )
}