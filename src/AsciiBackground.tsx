import { useEffect, useRef } from 'react'
import { OceanEngine } from './vendor/ascii-sharks/engine'

export function AsciiBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current!
    const engine = new OceanEngine(canvas)
    return () => engine.destroy()
  }, [])

  return <canvas ref={ref} className="ascii-background" aria-hidden="true" />
}
