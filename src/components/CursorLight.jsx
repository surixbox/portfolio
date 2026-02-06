import { useEffect, useState } from "react";

function CursorLight() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-[-1] hidden lg:block"
            aria-hidden="true"
        >
            <div
                className="absolute w-[420px] h-[420px] rounded-full blur-3xl transition-transform duration-300"
                style={{
                    transform: `translate(${pos.x - 210}px, ${pos.y - 210}px)`,
                    background:
                        "radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)",
                }}
            />
        </div>
    );
}

export default CursorLight;
