"use client"

import { useEffect, useRef } from "react"

export function QRCode() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create simple QR code representation
    const size = 200
    const cellSize = Math.floor(size / 25)

    canvas.width = size
    canvas.height = size

    // Clear canvas
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, size, size)

    // Draw a fake QR code pattern
    ctx.fillStyle = "black"

    // Draw positioning squares
    // Top-left
    ctx.fillRect(cellSize * 2, cellSize * 2, cellSize * 3, cellSize * 3)
    ctx.fillRect(cellSize * 3, cellSize * 3, cellSize * 1, cellSize * 1)

    // Top-right
    ctx.fillRect(cellSize * 20, cellSize * 2, cellSize * 3, cellSize * 3)
    ctx.fillRect(cellSize * 21, cellSize * 3, cellSize * 1, cellSize * 1)

    // Bottom-left
    ctx.fillRect(cellSize * 2, cellSize * 20, cellSize * 3, cellSize * 3)
    ctx.fillRect(cellSize * 3, cellSize * 21, cellSize * 1, cellSize * 1)

    // Draw random QR code-like pattern
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; j++) {
        // Skip positioning markers
        if ((i < 7 && j < 7) || (i > 17 && j < 7) || (i < 7 && j > 17)) {
          continue
        }

        // Randomly fill cells
        if (Math.random() > 0.6) {
          ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
        }
      }
    }

    // Add a border
    ctx.strokeStyle = "black"
    ctx.lineWidth = 1
    ctx.strokeRect(0, 0, size, size)
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg">
      <canvas ref={canvasRef} className="w-[200px] h-[200px]" />
    </div>
  )
}

