import { useState } from 'react'

const useModal = () => {
  const [ isVisible, setIsVisible ] = useState(false)

  function hideModal () {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }

  return { isVisible, hideModal }
}
export default useModal
