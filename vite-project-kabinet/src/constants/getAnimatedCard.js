import gsap from "gsap"

export const getAnimatedCard = () => {

    const animateCard = (cardElement) => {
        gsap.fromTo(
            cardElement,
            { opacity: 0, y: 100 },  // Počáteční hodnoty
            { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }  // Konečné hodnoty
        );
    };

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            animateCard(entry.target);  // Spustí animaci, když se card objeví
            observer.unobserve(entry.target);  // Přestane sledovat kartu po animaci
            }
        });
        },
        {
        threshold: 0.1,  // Karta je považována za viditelnou, pokud je alespoň z 10 % na obrazovce
        }
    );
    
    // Připojíme observer k každé kartě
    const cards = document.querySelectorAll(".card"); 
    cards.forEach((card) => observer.observe(card));
    
    // Vyčistí observer při unmountu komponenty
    return () => {
        cards.forEach((card) => observer.unobserve(card));
    }
}