import { useEffect, useState } from "react";

function TypingText({ text, speed = 45, className = "" }) {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setOutput((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <span className={className}>
      {output}
      {index < text.length && (
        <span className="ml-0.5 animate-pulse opacity-80">|</span>
      )}
    </span>
  );
}

export default TypingText;
