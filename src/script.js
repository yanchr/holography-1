import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui'
import { Models } from './models'
import { Soldier } from './Soldier'


/**
 * Initialize
 */
const models = new Models()
const soldier = new Soldier()
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const ambientLight = new THREE.AmbientLight(0xffffff, 3)
scene.add(ambientLight)

/**
 * Objects
 */
models.addToScene(scene)
const group = new THREE.Group() 
group.add(new THREE.Mesh(
    new THREE.ConeGeometry(2, 5, 4, 32),
    new THREE.MeshBasicMaterial({color: 0xf0f0ff})
))

let mirrorIndex = 1

const mirrorObjects = [
    models.getBox(), models.getTorus(3, 1), soldier.loadRunningMan(), group
]
let meshes = models.setMirroredBox(mirrorObjects[mirrorIndex])
scene.add(mirrorObjects[mirrorIndex + 1])
scene.add(meshes[1])
setTimeout(() => {
    changedMirrorMesh()
}, 1000)
//meshes.forEach(mesh => scene.add(mesh))
/**
* Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('click', () => 
{
  //changedMirrorMesh()
})

window.addEventListener('touchstart', () => 
{
  //changedMirrorMesh()
})

window.addEventListener('scroll', () => {
    console.log(e)
})

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 30
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
//controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    //controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

export function getElapsedTime() {
    console.log("ddd")
}

function changedMirrorMesh(){
    if(mirrorIndex < mirrorObjects.length - 1) {
        mirrorIndex++
    } else {
        mirrorIndex = 0
    }
    meshes.forEach(mesh => scene.remove(mesh))
    meshes = models.setMirroredBox(mirrorObjects[mirrorIndex])
    console.log(meshes[1])
    meshes.forEach(mesh => scene.add(mesh))
}