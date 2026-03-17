document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Typewriter Effect
    const typewriterElement = document.querySelector('.typewriter');
    const cursorElement = document.querySelector('.cursor');

    if (typewriterElement) {
        console.log("Typewriter element found");
        const dataWords = typewriterElement.getAttribute('data-words');
        let words = [];

        try {
            words = JSON.parse(dataWords);
            console.log("Words loaded:", words);
        } catch (e) {
            console.error("Error parsing data-words:", e);
            // Fallback
            words = ["for Organization"];
        }

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];

            // Safety check
            if (!currentWord) return;

            if (isDeleting) {
                // Remove character
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; // Deleting speed
            } else {
                // Add character
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100; // Typing speed
            }

            // Determine next state
            if (!isDeleting && charIndex === currentWord.length) {
                // Finished typing word, pause before deleting
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting, move to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing
        type();
    } else {
        console.warn("Typewriter element not found");
    }
});
