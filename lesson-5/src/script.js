import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)

mesh.position.set(2,1,1)
mesh.scale.set(2,1,1)
//mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.9
mesh.rotation.x = Math.PI * 0.2
scene.add(mesh)


//Show Axes
const axesHelper = new THREE.AxesHelper( 4 );
scene.add( axesHelper );

//Sizes
const sizes = {
    width: 400,
    height: 400
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//camera.position.z = 3
camera.position.set(5,5,5)
scene.add(camera)

camera.lookAt(mesh.position)

//mesh.position.normalize()

//renderer

console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)
