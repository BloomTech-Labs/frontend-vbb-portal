import { useState } from 'react'

function useModal (modal) {
  const [ isVisible, setIsVisible ] = useState(false)

  function toggleModal (modal) {
    return setIsVisible(!isVisible)
  }

  return {isVisible, toggleModal}
}

export default useModal
