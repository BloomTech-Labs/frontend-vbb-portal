import { useState, useEffect, useRef } from 'react';

/**
 * @param {function} fn
 * @param {*} [initVal=null]
 * @param {*} [initRes=null]
 * @param {number} [delay=400]
 */
export const useDebounce = (
  fn,
  initVal = null,
  initRes = null,
  delay = 400
) => {
  const [value, setValue] = useState(initVal);
  const [output, setOutput] = useState({ result: initRes, error: null });

  const fnRef = useRef();

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  useEffect(() => {
    async function cb() {
      try {
        const result = await fnRef.current(value);
        setOutput({ result, error: null });
      } catch (error) {
        setOutput({ result: initRes, error });
      }
    }
    const id = setTimeout(cb, delay);
    return () => clearTimeout(id);
  }, [delay, value]);

  return [output, setValue];
};
