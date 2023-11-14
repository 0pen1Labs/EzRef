import { useEffect } from 'react'

type Key = 'ctrl' | 'shift' | 'alt' | string

export const useHotKey = (keys: Key[], callback: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault()
      if (
        keys.every(
          (key) =>
            (key === 'ctrl' && event.ctrlKey) ||
            (key === 'shift' && event.shiftKey) ||
            (key === 'alt' && event.altKey) ||
            (typeof key === 'string' && event.key.toLocaleLowerCase() === key),
        )
      ) {
        callback()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [keys, callback])
}
