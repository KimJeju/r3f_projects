import * as THREE from 'three'
import { FBXLoader, OBJLoader, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useLoader } from '@react-three/fiber'

export default function ShowRoom(){

    // const obj = useLoader(OBJLoader, './models/custom.obj');
    // const fbx = useLoader(FBXLoader, './models/custom.fbx');
    const gltf = useLoader(GLTFLoader, "./models/custom.glb")

    return(
        <>  
            {/* <primitive object={obj} />  */}
            <primitive object={gltf.scene} />
            {/* <primitive object={fbx} /> */}
            {/* <mesh 
                rotation={[
                    THREE.MathUtils.degToRad(45),
                    THREE.MathUtils.degToRad(45),
                    0
                ]}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh> */}
        </>
    )
}