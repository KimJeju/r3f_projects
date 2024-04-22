import { Canvas } from "@react-three/fiber";
import ShowRoom from "./three/ShowRoom";
// import { OrbitControls } from "@react-three/drei";
import ColorComp from "./ColorComp";

export default function ShoesHome(){

    return(
        <>
            <Canvas>   
                {/* <OrbitControls />  */}
                {/* <axesHelper args={[5]} />
                <gridHelper /> */}
                <color attach={'background'} args={['#008F8C']}/>   
                <ShowRoom />
            </Canvas>
            <ColorComp />
        </>
    )
}