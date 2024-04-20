import { Canvas } from "@react-three/fiber";
import ShowRoom from "./three/ShowRoom";
import { OrbitControls } from "@react-three/drei";
import ColorComp from "./ColorComp";

export default function ShoesHome(){

    return(
        <>
            <Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}>   
                {/* <OrbitControls />  */}
                {/* <axesHelper args={[5]} />
                <gridHelper /> */}
                <color attach={'background'} args={['#b7f2f1']}/>   
            </Canvas>
            <ColorComp />
        </>
    )
}