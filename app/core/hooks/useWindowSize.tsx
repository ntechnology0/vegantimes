import { useState, useEffect } from "react"

type WindowSizeType = {
  height: number | undefined
  width: number | undefined
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    height: undefined,
    width: undefined,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({ width: window.outerWidth, height: window.outerHeight })
      }
      window.addEventListener("resize", handleResize)
      handleResize()

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])
  return windowSize
}

export default useWindowSize
