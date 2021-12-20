import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export class Soldier {

    loadRunningMan() {
        const gltfLoader = new GLTFLoader()
        const group = new THREE.Group()
        gltfLoader.load(
            '/Soldier.glb',
            (gltf) => {
                group.add(gltf.scene)
                //gltf.scene.scale.set(4, 4, 4)
                group.position.y = -10
                group.rotateY(Math.PI)
                //const mixer = new THREE.AnimationMixer(gltf.scene)
                //const action = mixer.clipAction(gltf.animations[0])
                // action.play()
                console.log('1')
            })
            return group
    }
}