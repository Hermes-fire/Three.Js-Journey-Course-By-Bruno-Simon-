import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
) 
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0})
) 
group.add(cube2)

cube2.position.set(-2,0,0)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff090})
) 
group.add(cube3)

cube3.position.set(2,0,0)

group.position.y = 1.5
group.position.z = 2
group.scale.y = 3


//Show Axes
const axesHelper = new THREE.AxesHelper( 4 );
scene.add( axesHelper );

//Sizes
const sizes = {
    width: 600,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//camera.position.z = 3
camera.position.set(2,5,7)
scene.add(camera)

camera.lookAt(0,0,0)

//mesh.position.normalize()

//renderer

console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene,camera)
