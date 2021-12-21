import * as THREE from 'three'

let group = new THREE.Group()
const allGroups = new THREE.Group() 
let scene = new THREE.Scene()

export function setGroup(group) {
    group = group
}

export function dublicateGroup() {
    const group1 = group.clone()
    allGroups.add(group1)
    scene.add(allGroups)
    return allGroups
}

export function setScene() {
    scene = scene
}