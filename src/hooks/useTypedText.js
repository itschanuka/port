import { useEffect, useState } from 'react';

export const useTypedText = (words, speed = 100) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index >= words.length) return undefined;

    if (forward && subIndex === words[index].length + 1) {
      setForward(false);
      return undefined;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return undefined;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? speed : speed / 2);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed]);

  return words[index].substring(0, subIndex);
};
