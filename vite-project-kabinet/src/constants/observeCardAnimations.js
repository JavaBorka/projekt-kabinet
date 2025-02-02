import gsap from "gsap"

export const observeCardAnimations = () => {

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
        threshold: 0.2,  // Karta je považována za viditelnou, pokud je alespoň z 20 % na obrazovce
        }
    );

    return observer
}