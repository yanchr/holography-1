import * as THREE from 'three'
import { DoubleSide } from 'three'
import {getElapsedTime} from './script'


export class Models {


    mainMaterial() {
        return new THREE.MeshBasicMaterial({ color: 0x4d8aeb })
    }

    material(color) {
        return new THREE.MeshBasicMaterial({ color })
    }

    addToScene(scene) {
       // scene.add(new THREE.AxesHelper(5))
        scene.add(this.getLine(Math.PI / 4), this.getLine(-Math.PI / 4))
        
    }

    setMirroredBox(object) {
        const object1 = object.clone()
        const object2 = object.clone()
        const object3 = object.clone()
        const object4 = object.clone()
        object1.position.x += 10
        object2.position.y += 10
        object3.position.x += -10
        object4.position.y += -10
       //this.rotateObject(object1)
       //this.rotateObject(object2)
       //this.rotateObject(object3)
       //this.rotateObject(object4)
        return [object1, object2, object3, object4]
       
    }

    rotateObject(object) {
        const clock = new THREE.Clock()
        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            object.rotation.y = - elapsedTime

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }


    getBox() {
        const object = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5, 1), this.material(0xff0000))
        return object
    }

    getTorus(radius, dicke) {
        const object = new THREE.Mesh(new THREE.TorusGeometry( radius, dicke, 16, 100 ), this.material(0xff0000))
        return object
    }

    getLine(rotation) {
        const size = 0.5
        const length = 30
        const object = new THREE.Mesh(new THREE.CylinderGeometry(size, size, length, 32), this.mainMaterial())
        object.rotation.z = rotation
        return object
    }
}