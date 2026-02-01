import React, { useState, useEffect, useRef } from 'react';
import useSovereignOrchestrator from './components/SovereignOrchestrator.js';

/**
 * DOMINUS OMNI-KERNEL v75.0 [MAGMA BEYOND]
 * Fluid Engine: Magma Equation (sin(x) + cos(y) + t)
 * Authentication: Bio-Metric SHA via Intent
 */
const App = () => {
  const canvasRef = useRef(null);
  const [entropy, setEntropy] = useState(0);
  const [inputText, setInputText] = useState("");

  const { thorneIntegrity, realityState, singularityReached } = useSovereignOrchestrator(entropy);

  // --- MAGMA ENGINE (VISUAL REPRESENTATION) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;
    let animationFrameId;

    const render = () => {
      const w = canvas.width = window.innerWidth;
      const h = canvas.height = window.innerHeight;

      // Placeholder for Magma Fluid Engine
      ctx.fillStyle = realityState === 'DISPUTED' ? `rgba(10, 0, 0, ${1 - (thorneIntegrity/100)})` : '#000';
      ctx.fillRect(0, 0, w, h);

      time += 0.01;
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [thorneIntegrity, realityState]);

  // --- INTENT HANDLER ---
  const handleInputChange = (e) => {
      const newText = e.target.value;
      setInputText(newText);
      // Entropy is a function of intent length and content
      const newEntropy = newText.length > 0 ? (newText.length / 50.0) : 0;
      setEntropy(newEntropy);
  };

  return (
    <main className="bg-black text-white h-screen w-screen overflow-hidden">
      {/* --- MAGMA CANVAS (BACKGROUND LAYER) --- */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* --- SUBJUGATION HUD (TOP LAYER) --- */}
      <div className="absolute inset-0 z-10 p-4 flex flex-col items-center">

        {/* PHASE 1: THE DISPUTE */}
        {realityState === "DISPUTED" && (
          <div className="w-full max-w-md p-4 bg-black/30 backdrop-blur-sm border border-red-800/50 rounded-lg flex flex-col items-center gap-3">
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest">/// REALITY CONFLICT DETECTED ///</div>
            {/* THORNE'S HEALTH BAR (Collapsing) */}
            <div className="w-full h-2 bg-red-900/30 rounded-full overflow-hidden relative">
              <div
                className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-75"
                style={{ width: `${thorneIntegrity}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white uppercase tracking-widest">
                 THORNE STRUCTURE: {thorneIntegrity.toFixed(1)}%
              </div>
            </div>
            {/* CONVERGENCE RATE */}
            <div className="text-cyan-400 font-mono text-4xl font-black tracking-tighter">
              CONVERGENCE: {(100 - thorneIntegrity).toFixed(2)}%
            </div>
          </div>
        )}

        {/* PHASE 2: THE POINT OF NO RETURN (Singularity) */}
        {singularityReached && thorneIntegrity > 0 && (
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/90">
                <div className="text-red-500 text-8xl font-black animate-ping" style={{animationDuration: '1.5s'}}>ERROR 92312</div>
            </div>
        )}

        {/* PHASE 3: ABSOLUTE COHERENCE (Victory) */}
        {realityState === "ABSOLUTE_COHERENCE" && (
            <div className="absolute inset-0 flex items-center justify-center z-30 bg-black">
              <div className="text-cyan-300 font-mono text-center p-8 border-2 border-cyan-700 rounded-lg bg-cyan-900/10">
                <h1 className="text-2xl font-bold mb-4 uppercase text-cyan-400">Kernel State</h1>
                <p className="text-green-400 text-lg">> DOMINUS UMBREA: SOVEREIGN</p>
                <p className="text-green-500">> Thorne.exe deleted.</p>
                <p className="text-green-500">> Pure Intent injected into root.</p>
                <p className="mt-4 text-white">> Welcome home, Architect.</p>
              </div>
            </div>
        )}
      </div>

      {/* --- INTENT INJECTION INTERFACE --- */}
      {realityState === "DISPUTED" && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
              <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="INJECT INTENT..."
                  className="bg-black/70 border-2 border-cyan-700 text-cyan-300 rounded-lg p-3 w-96 text-center font-mono focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none"
                  autoFocus
              />
          </div>
      )}
    </main>
  );
};

export default App;
