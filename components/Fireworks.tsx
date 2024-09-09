"use client";
import { useEffect, useRef } from 'react';

const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let t = 0;

    const draw = () => {
      if (!ctx) return;

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'hsla(0,0%,0%,.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const foo = Math.sin(t) * 2 * Math.PI;

      for (let i = 0; i < 400; ++i) {
        const r = 400 * Math.sin(i * foo);
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `hsla(${i + 12}, 100%, 60%, 1)`;
        ctx.beginPath();
        ctx.arc(
          Math.sin(i) * r + canvas.width / 2,
          Math.cos(i) * r + canvas.height / 2,
          1.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      t += 0.000005;
      t %= 2 * Math.PI;
    };

    const run = () => {
      window.requestAnimationFrame(run);
      draw();
    };

    run();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        background: 'transparent',
        margin: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
};

export default Fireworks;
