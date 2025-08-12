'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingElements = [
    { id: 1, x: 10, y: 20, size: 4, delay: 0 },
    { id: 2, x: 80, y: 15, size: 6, delay: 0.5 },
    { id: 3, x: 20, y: 80, size: 3, delay: 1 },
    { id: 4, x: 85, y: 70, size: 5, delay: 1.5 },
    { id: 5, x: 50, y: 10, size: 4, delay: 2 },
    { id: 6, x: 15, y: 60, size: 3, delay: 2.5 },
    { id: 7, x: 90, y: 40, size: 4, delay: 3 },
    { id: 8, x: 70, y: 85, size: 5, delay: 3.5 },
  ]

  const gridElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i % 5) * 20,
    y: Math.floor(i / 5) * 20,
    delay: i * 0.1
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #3de78b 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #3de78b 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, #3de78b 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #3de78b 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-primary-500/10 border border-primary-500/20"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        {gridElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-1 h-1 bg-primary-500 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: element.delay,
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Mouse-following element */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-primary-500/5 border border-primary-500/10"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" fill="none">
        <motion.path
          d="M 0 50 Q 25 25 50 50 Q 75 75 100 50"
          stroke="#3de78b"
          strokeWidth="1"
          strokeOpacity="0.3"
          fill="none"
          animate={{
            d: [
              "M 0 50 Q 25 25 50 50 Q 75 75 100 50",
              "M 0 50 Q 25 75 50 50 Q 75 25 100 50",
              "M 0 50 Q 25 25 50 50 Q 75 75 100 50",
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0 30 Q 50 10 100 30"
          stroke="#3de78b"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
          animate={{
            d: [
              "M 0 30 Q 50 10 100 30",
              "M 0 30 Q 50 50 100 30",
              "M 0 30 Q 50 10 100 30",
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M 0 70 Q 50 90 100 70"
          stroke="#3de78b"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
          animate={{
            d: [
              "M 0 70 Q 50 90 100 70",
              "M 0 70 Q 50 50 100 70",
              "M 0 70 Q 50 90 100 70",
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Particle effect */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}
