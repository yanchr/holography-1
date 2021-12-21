import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()
const group = new THREE.Group()
const mirroredGroup = new THREE.Group()

export function loadSoldier() {
        gltfLoader.load(
            '/Soldier.glb',
            (gltf) => {
                group.add(gltf.scene)
                gltf.scene.scale.set(4, 4, 4)
                group.rotateY(Math.PI)
                group.position.y -= 4
                //const mixer = new THREE.AnimationMixer(gltf.scene)
                //const action = mixer.clipAction(gltf.animations[0])
                // action.play()
                console.log('1')
            })
        }
export function getGroup(){
    return group
}

export function getMirroredGroup() {
    return mirroredGroup
}

export function duplicateToMirror() {
    mirroredGroup.add(group)
}