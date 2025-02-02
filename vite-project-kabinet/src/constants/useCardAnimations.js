import { observeCardAnimations } from "./observeCardAnimations";
import { useEffect } from "react";

export const useCardAnimations = ({items}) => {

    useEffect(() => {
        const observer = observeCardAnimations()
        // Připojíme observer ke každé kartě
        const cards = document.querySelectorAll(".card"); 
        cards.forEach((card) => observer.observe(card));
        
        // Vyčistí observer při unmountu komponenty
        return () => {
            cards.forEach((card) => observer.unobserve(card));
        }
    }, [items]);
}