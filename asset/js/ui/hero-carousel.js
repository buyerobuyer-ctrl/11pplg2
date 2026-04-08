// ==================== HERO CAROUSEL ====================

const SLIDE_DURATION = 3000;

let heroCurrentIndex = 0;
let heroSlides = [];
let heroInterval;
let isPlaying = true;

export function initHeroCarousel() {
    heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');

    if (heroSlides.length === 0) return;

    heroInterval = setInterval(() => {
        nextHeroSlide();
    }, SLIDE_DURATION);

    const heroSection = document.querySelector('.hero-carousel');
    heroSection?.addEventListener('mouseenter', () => {
        stopAutoSlide();
    });

    heroSection?.addEventListener('mouseleave', () => {
        if (isPlaying) startAutoSlide(SLIDE_DURATION);
    });
}

function startAutoSlide(duration) {
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        nextHeroSlide();
    }, duration);
}

function stopAutoSlide() {
    if (heroInterval) {
        clearInterval(heroInterval);
        heroInterval = null;
    }
}

function nextHeroSlide() {
    heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length;
    updateHeroSlide();
}

function prevHeroSlide() {
    heroCurrentIndex = (heroCurrentIndex - 1 + heroSlides.length) % heroSlides.length;
    updateHeroSlide();
}

function goToHeroSlide(index) {
    if (index >= 0 && index < heroSlides.length) {
        heroCurrentIndex = index;
        updateHeroSlide();
    }
}

function updateHeroSlide() {
    heroSlides.forEach((slide, index) => {
        if (index === heroCurrentIndex) {
            slide.classList.add('active');
            const content = slide.querySelector('.hero-content');
            if (content) {
                content.style.animation = 'none';
                content.offsetHeight;
                content.style.animation = 'fadeInUp 0.8s ease';
            }
        } else {
            slide.classList.remove('active');
        }
    });

    const heroDots = document.querySelectorAll('.hero-dot');
    heroDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === heroCurrentIndex);
    });
}

