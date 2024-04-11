import { Canvas } from "@react-three/fiber";
import ShowRoom from "@components/three/ShowRoom";
import { OrbitControls } from "@react-three/drei";
import ResponsiveAppBar from "./AppBar";

export default function Home(){

    return(
        <>
            <ResponsiveAppBar />
            <Canvas>   
                {/* <OrbitControls />  */}
                {/* <axesHelper args={[5]} />
                <gridHelper /> */}
                <color attach={'background'} args={['#b7f2f1']}/>   
                <ShowRoom />
            </Canvas>
        </>
    )
}