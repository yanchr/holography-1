import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export class Soldier {

    loadRunningMan() {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)
        const group = new THREE.Group()
        gltfLoader.load(
            '/Soldier.glb',
            (gltf) => {
                group.add(gltf.scene)
                gltf.scene.scale.set(5, 5, 5)
                group.rotateY(Math.PI)
                const mixer = new THREE.AnimationMixer(gltf.scene)
                const action = mixer.clipAction(gltf.animations[1])
                action.play()
                console.log('1')
            })
        return group
    }
}