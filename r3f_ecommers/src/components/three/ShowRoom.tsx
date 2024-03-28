import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { useLoader } from '@react-three/fiber'
import { useThree } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';
import { useRef } from 'react';


export default function ShowRoom(){

    const { raycaster, camera } = useThree()

    const gltf = useLoader(GLTFLoader, "./models/custom.glb");
    const camearaControlRef = useRef<CameraControls>(null);

    const shoesClick = () => {
        console.log("shoes Click");

        // 현재 클릭하고 있는 레이케스트로 매쉬 가져오기
        const intersects = raycaster.intersectObjects(gltf.scene.children, true);

        console.log(intersects);

        if(intersects.length > 0){
            // 클릭한 매쉬의 가장 최상단 오브젝트
            // 아래 처럼 할 시 클릭 시 공유하는 모든 머테리얼의 색상이 변함
            // const firstObject = intersects[0].object as THREE.Mesh;
            // const firstMat = firstObject.material as THREE.MeshStandardMaterial
            // firstMat.color = new THREE.Color("red");

            const firstObject = intersects[0].object as THREE.Mesh;

            console.log(firstObject.name)
            const firstMat = firstObject.material as THREE.MeshStandardMaterial;
            const cloneMat = firstMat.clone();

            firstObject.material = cloneMat; // 기존 머테리얼에 복사한 머테리얼을 넣어준다.
            const mat = firstObject.material as THREE.MeshStandardMaterial
            mat.color = new THREE.Color("orange");
            
            // 오브젝트 클릭 후 카메라 이동
            // camearaControlRef.current?.setLookAt(
            //     0,5,0, 
            //     firstObject.position.x, 
            //     firstObject.position.y,
            //     firstObject.position.z,
            //     true,
            // )
            
            //내가 클릭한 위치로 카메라 이동
            camearaControlRef.current?.fitToBox(
                firstObject,
                true
            )
            
        }
    }

    return(
        <>  
            {/* <primitive object={obj} />  */}
            <directionalLight position={[3,3,3]}/>
            <CameraControls 
                ref={camearaControlRef}
                enabled={true}
                dollyToCursor={true} // 마우스가 가르키는 방향으로 확대,축소
                onChange={() => {
                    // console.log("on change");
                    // console.log(camera.position);                    
                }}
                // minDistance={2} //카메라가 갈 수 있는 최소거리
                // maxDistance={15} // 카메라가 갈 수 있는 최대거리
            />
            <primitive 
                object={gltf.scene}
                onClick={shoesClick}
            />
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