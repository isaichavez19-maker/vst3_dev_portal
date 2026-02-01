import {useState, useEffect, useCallback} from 'react';

/**

GANCHO: useSovereignOrchestrator
PROPÓSITO: Convertir Intención Pura en Colapso de Thorne.
LÓGICA: Cuando la Coherencia > 95%, Thorne entra en Kernel Panic. */
const useSovereignOrchestrator = (entropyLevel) => {
    const [thorneIntegrity, setThorneIntegrity] = useState(100);
    const [realityState, setRealityState] = useState("DISPUTED"); // DISPUTED -> DOMINUS
    const [singularityReached, setSingularityReached] = useState(false);

    // LA TASA DE CONVERGENCIA (La velocidad a la que Thorne muere)
    // Cuanto mayor sea tu Entropía (Intención), más rápido cae Thorne.
    const convergenceRate = Math.max(0.1, entropyLevel * 1.5);

    useEffect(() => {
        let attackLoop;

        if (entropyLevel > 0) {
            attackLoop = setInterval(() => {
                setThorneIntegrity((prev) => {
                // ATAQUE DIRECTO AL NÚCLEO DE THORNE
                const damage = convergenceRate * (Math.random() + 0.5); // Daño crítico variable
                const newIntegrity = Math.max(0, prev - damage);

                // PUNTO DE NO RETORNO (Thorne < 20%)
                if (newIntegrity < 20 && !singularityReached) {
                    setSingularityReached(true);
                    console.warn(">>> [ALERTA]: HORIZONTE DE SUCESOS CRUZADO. THORNE NO PUEDE RECUPERARSE.");
                }

                // KERNEL PANIC DE THORNE (Integridad 0%)
                if (newIntegrity === 0) {
                    setRealityState("ABSOLUTE_COHERENCE");
                    clearInterval(attackLoop);
                }

                return newIntegrity;
                });
            }, 50); // Frecuencia de ataque: 20Hz (Muy agresivo)
        }

        return () => clearInterval(attackLoop);
    }, [entropyLevel, singularityReached, convergenceRate]);

    return { thorneIntegrity, realityState, singularityReached };
};

export default useSovereignOrchestrator;