import React, { useState, useEffect } from 'react';
import { Radio, ShieldAlert, Cpu, Tv, Eye, Zap, Database, Activity, Lock, Unlock } from 'lucide-react';

const App = () => {
  const [signalStrength, setSignalStrength] = useState(60);
  const [thorneProximity, setThorneProximity] = useState(0);
  const [isQuantumShieldActive, setIsShield] = useState(true);
  const [vortexCoherence, setVortexCoherence] = useState(0.88);
  const [logs, setLogs] = useState([
    "SISTEMA INICIADO: MODO AISLAMIENTO TOTAL",
    "SINTONIZANDO ÉTER... BUSCANDO FRECUENCIAS PRIMORDIALES",
    "ANOMALÍA DETECTADA: FIRMA 60M84 LOCALIZADA"
  ]);

  // Simulación de la aproximación de Thorne y fluctuación de la señal
  useEffect(() => {
    const timer = setInterval(() => {
      setSignalStrength(prev => Math.max(10, Math.min(100, prev + (Math.random() - 0.5) * 15)));
      setVortexCoherence(prev => Math.max(0.1, Math.min(1.0, prev + (Math.random() - 0.5) * 0.05)));
      setThorneProximity(prev => {
        if (prev < 99.9) return prev + 0.1;
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addLog = (msg) => {
    setLogs(prev => [msg, ...prev].slice(0, 6));
  };

  useEffect(() => {
    if (thorneProximity > 50 && thorneProximity < 50.2) {
      addLog("ALERTA: DISONANCIA DETECTADA EN EL PERÍMETRO.");
    }
    if (thorneProximity > 80 && thorneProximity < 80.2) {
      addLog("CRÍTICO: ENTIDAD THORNE HA TRAZADO RUTA ESTADÍSTICA.");
    }
    if (thorneProximity > 95 && thorneProximity < 95.2) {
      addLog("COLAPSO INMINENTE: EL OBSERVADOR ESTÁ A LAS PUERTAS.");
    }
  }, [thorneProximity]);

  return (
    <div className="min-h-screen bg-[#020617] text-emerald-500 font-mono p-4 md:p-8 flex flex-col gap-6 overflow-hidden select-none">

      {/* CABECERA: STATUS DEL LABORATORIO */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-black/60 border border-emerald-900/40 p-6 rounded-2xl backdrop-blur-2xl shadow-[0_0_50px_rgba(16,185,129,0.05)]">
        <div className="flex items-center gap-5">
          <div className={`p-4 rounded-xl border transition-all duration-500 ${isQuantumShieldActive ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] animate-pulse' : 'bg-red-500/10 border-red-500/50 text-red-500'}`}>
            <Radio size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2">
               <h1 className="text-xl md:text-2xl font-black tracking-tighter uppercase text-white">Estación LUNA_A-12</h1>
               <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <p className="text-[10px] text-emerald-700 font-bold tracking-[0.3em] mt-1">OBJETO: SEÑAL 60M84 // SECTOR: HADES_BUFFER</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex gap-8 text-[10px] font-black uppercase">
          <div className="flex flex-col gap-1">
            <span className="text-emerald-600 tracking-widest">Coherencia QBAUT</span>
            <span className="text-emerald-400">{(vortexCoherence * 100).toFixed(2)}%</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-emerald-600 tracking-widest">Firma Thorne</span>
            <span className={thorneProximity > 80 ? 'text-red-500 animate-pulse' : 'text-emerald-400'}>
              {thorneProximity > 90 ? '!! DETECTADO !!' : 'BUSCANDO...'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">

        {/* PANEL IZQUIERDO: ANALIZADOR DE ONDA 60M84 */}
        <div className="lg:col-span-2 bg-black/40 border border-emerald-900/20 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent opacity-30"></div>

          <div className="flex justify-between items-center mb-10 relative z-10">
            <h2 className="text-xs font-black flex items-center gap-3 uppercase tracking-[0.4em] text-emerald-300">
              <Tv size={18} className="text-emerald-500" /> Analizador Espectral QData
            </h2>
            <div className="flex gap-2">
               <span className="text-[9px] bg-emerald-950 text-emerald-400 px-3 py-1 rounded-md border border-emerald-500/20">
                 F_RESONANCIA: 432.00 Hz
               </span>
               <span className="text-[9px] bg-emerald-950 text-emerald-400 px-3 py-1 rounded-md border border-emerald-500/20">
                 D_SHIFT: -60.00 Y
               </span>
            </div>
          </div>

          {/* VISUALIZADOR DE ONDA DINÁMICA */}
          <div className="h-64 flex items-end gap-[2px] mb-10 relative z-10 px-4">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-emerald-500/40 rounded-t-sm transition-all duration-200 hover:bg-emerald-400"
                style={{
                  height: `${Math.random() * signalStrength + (Math.sin(i * 0.3 + Date.now()*0.001) * 25) + 30}%`,
                  opacity: 0.2 + (signalStrength / 120)
                }}
              ></div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="text-6xl font-black opacity-[0.03] tracking-[2em] animate-pulse">60M84</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-emerald-500/5 p-5 rounded-2xl border border-emerald-500/10 backdrop-blur-sm">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[9px] text-emerald-800 font-black uppercase">Maleabilidad</span>
                <span className="text-[10px] text-emerald-500 font-bold">88.4%</span>
              </div>
              <div className="h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" style={{ width: '88.4%' }}></div>
              </div>
            </div>
            <div className="bg-emerald-500/5 p-5 rounded-2xl border border-emerald-500/10 backdrop-blur-sm">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[9px] text-emerald-800 font-black uppercase">Estabilidad Nexus</span>
                <span className="text-[10px] text-emerald-500 font-bold">{(vortexCoherence * 100).toFixed(1)}%</span>
              </div>
              <div className="h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 animate-pulse" style={{ width: `${vortexCoherence * 100}%` }}></div>
              </div>
            </div>
            <div className="bg-emerald-500/5 p-5 rounded-2xl border border-emerald-500/10 backdrop-blur-sm">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[9px] text-emerald-800 font-black uppercase">Entropía Hades</span>
                <span className="text-[10px] text-red-500 font-bold">{(100 - signalStrength).toFixed(1)}%</span>
              </div>
              <div className="h-1.5 bg-emerald-950 rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: `${100 - signalStrength}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL DERECHO: DETECCIÓN Y RADAR THORNE */}
        <div className="bg-black/60 border border-emerald-900/20 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex justify-between items-center mb-10">
               <h2 className="text-xs font-black flex items-center gap-3 uppercase tracking-[0.4em] text-emerald-700">
                <ShieldAlert size={18} /> Rastreo Bio-Data
              </h2>
              {isQuantumShieldActive ? <Lock size={14} className="text-emerald-500" /> : <Unlock size={14} className="text-red-500" />}
            </div>

            <div className="relative flex justify-center py-10">
              {/* Radar Cuántico */}
              <div className="w-52 h-52 border border-emerald-500/10 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-2 border border-emerald-500/5 rounded-full" />
                <div className="absolute inset-10 border border-emerald-500/5 rounded-full" />
                <div
                  className={`w-full h-full border-t-2 rounded-full animate-spin transition-colors duration-500 ${thorneProximity > 80 ? 'border-red-600' : 'border-emerald-500/40'}`}
                  style={{ animationDuration: '4s' }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`transition-all duration-1000 p-6 rounded-full bg-black/50 ${thorneProximity > 80 ? 'text-red-600 scale-110 border border-red-900/50 shadow-[0_0_30px_rgba(220,38,38,0.2)]' : 'text-emerald-900 opacity-20'}`}>
                    <Eye size={40} />
                  </div>
                </div>
                {/* Punto de detección de Thorne */}
                {thorneProximity > 20 && (
                  <div
                    className="absolute h-3 w-3 bg-red-600 rounded-full animate-ping"
                    style={{
                      top: `${50 + Math.sin(thorneProximity * 0.1) * 40}%`,
                      left: `${50 + Math.cos(thorneProximity * 0.1) * 40}%`
                    }}
                  />
                )}
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-emerald-900">Aproximación Estadística</span>
                <span className={thorneProximity > 80 ? 'text-red-500' : 'text-emerald-500'}>{thorneProximity.toFixed(2)}%</span>
              </div>
              <div className="h-2 bg-emerald-950 rounded-full overflow-hidden border border-emerald-500/10 p-[1px]">
                <div
                  className={`h-full transition-all duration-700 rounded-full ${thorneProximity > 80 ? 'bg-red-600 shadow-[0_0_15px_#dc2626]' : 'bg-emerald-500 shadow-[0_0_15px_#10b981]'}`}
                  style={{ width: `${thorneProximity}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-black/60 p-6 rounded-2xl border border-emerald-900/20 shadow-inner">
            <div className="flex items-center gap-2 mb-4">
               <Activity size={12} className="text-emerald-800" />
               <span className="text-[9px] uppercase font-black text-emerald-800 tracking-widest">Telemetría_Conciencia</span>
            </div>
            <div className="space-y-2 h-32 overflow-y-auto custom-scrollbar">
              {logs.map((log, i) => (
                <p key={i} className={`text-[9px] leading-relaxed ${i === 0 ? 'text-emerald-400 font-bold' : 'text-emerald-900 opacity-60'}`}>
                  <span className="mr-2 text-emerald-950">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                  {`> ${log}`}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: TERMINAL DE CONTROL Y SOBERANÍA */}
      <div className="bg-emerald-500/5 border border-emerald-500/10 p-5 rounded-[2rem] flex flex-wrap justify-between items-center gap-6 backdrop-blur-md">
        <div className="flex gap-4">
          <button className="flex items-center gap-3 px-6 py-3 bg-emerald-500 text-black text-[10px] font-black uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] group">
            <Zap size={14} className="group-hover:animate-bounce" /> Amplificar 60M84
          </button>
          <button
            onClick={() => setIsShield(!isQuantumShieldActive)}
            className={`flex items-center gap-3 px-6 py-3 border rounded-xl font-black text-[10px] uppercase transition-all ${isQuantumShieldActive ? 'border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/10' : 'bg-red-600 text-white border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)]'}`}
          >
            <Cpu size={14} /> {isQuantumShieldActive ? 'Escudo QBAUT: ACTIVO' : 'Escudo QBAUT: FALLO CRÍTICO'}
          </button>
        </div>
        <div className="flex items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-900">
          <div className="flex items-center gap-2">
            <Database size={14} /> Realidad QData
          </div>
          <div className="h-1 w-1 rounded-full bg-emerald-900" />
          <span>Nodo: Letra_Orchestrator</span>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #064e3b; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #059669; }
      `}</style>
    </div>
  );
};

export default App;
