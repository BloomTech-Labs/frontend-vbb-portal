import { useRef, useState, useEffect } from "react";

export const useOutsideAlerter = (initialValue : boolean) => {
    const ref = useRef<HTMLDivElement>(null)
    const [ visible, setVisible ] = useState(initialValue)
    const handleClickOutside = (e) => {
        if(ref.current && !ref.current.contains(e.target)) setVisible(false)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    },[ref])

    return {visible, setVisible, ref }
}