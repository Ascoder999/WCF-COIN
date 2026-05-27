// components/ThreeBackground.tsx
'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    scene.background = null
    scene.fog = new THREE.FogExp2(0x03050b, 0.008)

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 2, 12)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404060)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffaa44, 1.5, 30)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)
    const backLight = new THREE.PointLight(0x4466ff, 0.6)
    backLight.position.set(-2, 1, -4)
    scene.add(backLight)
    const fillLight = new THREE.DirectionalLight(0xffcc88, 0.8)
    fillLight.position.set(1, 2, 1)
    scene.add(fillLight)

    // Trophy Group
    const trophyGroup = new THREE.Group()
    
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffcc44, emissive: 0x442200, metalness: 0.85, roughness: 0.3 })
    const mainRing = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.12, 64, 200), goldMat)
    mainRing.rotation.x = Math.PI / 2
    trophyGroup.add(mainRing)

    const secondRing = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 64, 200), goldMat)
    secondRing.rotation.z = Math.PI / 3
    secondRing.rotation.x = Math.PI / 3
    trophyGroup.add(secondRing)

    const coreMat = new THREE.MeshStandardMaterial({ color: 0xff6600, emissive: 0xff3300, emissiveIntensity: 0.5 })
    const coreSphere = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), coreMat)
    trophyGroup.add(coreSphere)

    const orbCount = 8
    const orbs: THREE.Mesh[] = []
    for (let i = 0; i < orbCount; i++) {
      const orbMat = new THREE.MeshStandardMaterial({ color: 0xffaa55, emissive: 0x442200 })
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), orbMat)
      const angle = (i / orbCount) * Math.PI * 2
      const radius = 1.9
      orb.position.x = Math.cos(angle) * radius
      orb.position.z = Math.sin(angle) * radius
      orb.position.y = Math.sin(angle * 2) * 0.5
      trophyGroup.add(orb)
      orbs.push(orb)
    }

    // Stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 800
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      starPositions[i*3] = (Math.random() - 0.5) * 200
      starPositions[i*3+1] = (Math.random() - 0.5) * 100
      starPositions[i*3+2] = (Math.random() - 0.5) * 80 - 40
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xffdd99, size: 0.12, transparent: true, opacity: 0.6 }))
    scene.add(stars)

    // Dust particles
    const dustCount = 1500
    const dustGeo = new THREE.BufferGeometry()
    const dustPositions = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i*3] = (Math.random() - 0.5) * 35
      dustPositions[i*3+1] = (Math.random() - 0.5) * 20
      dustPositions[i*3+2] = (Math.random() - 0.5) * 20 - 5
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))
    const dustParticles = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: 0xffaa66, size: 0.05, transparent: true, blending: THREE.AdditiveBlending }))
    scene.add(dustParticles)

    scene.add(trophyGroup)

    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.05, 64, 200), new THREE.MeshStandardMaterial({ color: 0xffaa44, emissive: 0xff4400, emissiveIntensity: 0.3 }))
    outerRing.rotation.x = Math.PI / 2
    scene.add(outerRing)

    const tiltedRing = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.06, 64, 200), goldMat)
    tiltedRing.rotation.z = Math.PI / 4
    tiltedRing.rotation.x = 0.8
    scene.add(tiltedRing)

    let time = 0
    function animate() {
      requestAnimationFrame(animate)
      time += 0.012

      trophyGroup.rotation.y = time * 0.4
      trophyGroup.rotation.x = Math.sin(time * 0.3) * 0.2
      trophyGroup.rotation.z = Math.cos(time * 0.2) * 0.1

      orbs.forEach((orb, idx) => {
        const angle = time * 1.2 + idx
        const rad = 2.0
        orb.position.x = Math.cos(angle) * rad
        orb.position.z = Math.sin(angle) * rad
        orb.position.y = Math.sin(angle * 1.8) * 0.6
      })

      outerRing.rotation.z = time * 0.2
      outerRing.rotation.y = time * 0.15
      tiltedRing.rotation.x = time * 0.3
      tiltedRing.rotation.z = time * 0.25

      stars.rotation.y += 0.0005
      stars.rotation.x += 0.0003
      dustParticles.rotation.y += 0.001
      dustParticles.rotation.x = Math.sin(time * 0.1) * 0.1

      camera.position.x += (0 - camera.position.x) * 0.05
      camera.position.y += (Math.sin(time * 0.2) * 0.1 - camera.position.y) * 0.05
      camera.lookAt(0, 0.5, 0)

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
}