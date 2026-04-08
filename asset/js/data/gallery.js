// ==================== DATA GALLERY ====================

// Data Galeri
export const galleryItems = [
    { img: "./asset/img/galery/ala_ala.jpg" },
    { img: "./asset/img/galery/apalah.jpg" },
    { img: "./asset/img/galery/baris.JPG" },
    { img: "./asset/img/galery/bakar.jpg" },
    { img: "./asset/img/galery/belajar.jpg" },
    { img: "./asset/img/galery/bersih_bersih.jpg" },
    { img: "./asset/img/galery/briping.JPG" },
    { img: "./asset/img/galery/gaya.jpg" },
    { img: "./asset/img/galery/gaya2.jpg" },
    { img: "./asset/img/galery/hari_guru.jpg" },
    { img: "./asset/img/galery/hari_guru5.jpg" },
    { img: "./asset/img/galery/hari_guru_day2.JPG" },
    { img: "./asset/img/galery/hukum.JPG" },
    { img: "./asset/img/galery/jalan2.jpg" },
    { img: "./asset/img/galery/lapor1.jpg" },
    { img: "./asset/img/galery/lapor2.jpg" },
    { img: "./asset/img/galery/lapor3.jpg" },
    { img: "./asset/img/galery/lapor4.jpg" },
    { img: "./asset/img/galery/lomba.JPG" },
    { img: "./asset/img/galery/lomba2.JPG" },
    { img: "./asset/img/galery/olga.jpg" },
    { img: "./asset/img/galery/olga2.jpg" },
    { img: "./asset/img/galery/parit1.JPG" },
    { img: "./asset/img/galery/pp.jpg" },
    { img: "./asset/img/galery/pbb.JPG" },
    { img: "./asset/img/galery/piala.JPG" },
    { img: "./asset/img/galery/piala1.JPG" },
    { img: "./asset/img/galery/piala2.JPG" },
    { img: "./asset/img/galery/piala3.JPG" },
    { img: "./asset/img/galery/piala4.JPG" },
    { img: "./asset/img/galery/renang.jpg" },
    { img: "./asset/img/galery/variasi.JPG" },
    { img: "./asset/img/galery/bapak_bapak.jpg" },
    { img: "./asset/img/galery/yesus.jpg" },
    { img: "./asset/img/galery/artis.jpeg" },
    { img: "./asset/img/galery/bataktoba.jpeg" },
    { img: "./asset/img/galery/bataktoba2.jpeg" },
    { img: "./asset/img/galery/ee.jpeg" },
    { img: "./asset/img/galery/gaya4.jpeg" },
    { img: "./asset/img/galery/hitam.jpeg" },
    { img: "./asset/img/galery/hitam2.jpeg" },
    { img: "./asset/img/galery/ini.jpeg" },
    { img: "./asset/img/galery/nangis.jpeg" },
    { img: "./asset/img/galery/pramuka.jpeg" }
];

export let galleryLimit = 4;
export let galleryShowAll = false;

// Render Gallery
export function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const itemsToShow = galleryShowAll
        ? galleryItems
        : galleryItems.slice(0, galleryLimit);

    if (itemsToShow.length === 0) {
        grid.innerHTML = `<div class="no-results">Tidak ada gambar</div>`;
        return;
    }

    grid.innerHTML = itemsToShow.map((g, index) => `
        <div class="gallery-item">
            <div class="gallery-photo">
                <img src="${g.img}" alt="Galeri ${index + 1}" 
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
            </div>
        </div>
    `).join('');
}

// Load more gallery
export function initLoadMoreGallery() {
    const loadMoreBtn = document.getElementById('loadMoreGallery');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
        galleryLimit += 4;
        if (galleryLimit > galleryItems.length) {
            galleryLimit = galleryItems.length;
        }
        renderGallery();
    });
}

// Show all gallery
export function initShowAllGallery() {
    const showAllBtn = document.getElementById('showAllGallery');
    if (!showAllBtn) return;

    showAllBtn.addEventListener('click', () => {
        galleryShowAll = true;
        renderGallery();
    });
}

// Carousel functions (using first 8 gallery items)
let currentIndex = 0;
let carouselItems = [];

export function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const indicators = document.getElementById('carouselIndicators');

    if (!track || !indicators) return;

    carouselItems = galleryItems.slice(0, 15);

    track.innerHTML = carouselItems.map((item, index) => `
        <div class="carousel-slide" data-index="${index}">
            <img src="${item.img}" alt="Galeri ${index + 1}" loading="lazy">
        </div>
    `).join('');

    indicators.innerHTML = carouselItems.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
    `).join('');

    updateCarousel();

    document.getElementById('prevBtn')?.addEventListener('click', prevSlide);
    document.getElementById('nextBtn')?.addEventListener('click', nextSlide);

    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            goToSlide(index);
        });
    });

    // Event delegation for carousel slides (more robust)
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('click', (e) => {
            const slide = e.target.closest('.carousel-slide');
            if (slide && !e.target.closest('.carousel-btn, .modal-close, .modal-prev, .modal-next')) {
                const index = parseInt(slide.dataset.index);
                const imgSrc = carouselItems[index].img;
                console.log('Carousel image clicked:', imgSrc); // Debug
                showImageModal(imgSrc);
            }
        });
    }

    let autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000);

    // Fix: Use different var name for second carousel query
    const carouselContainer = document.querySelector('.carousel');
    carouselContainer?.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    carouselContainer?.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => nextSlide(), 5000);
    });
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function showImageModal(imgSrc) {
    // Modal implementation (same as original)
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${imgSrc}" alt="Full size image">
            <button class="modal-prev"><i class="fas fa-chevron-left"></i></button>
            <button class="modal-next"><i class="fas fa-chevron-right"></i></button>
        </div>
    `;
    document.body.appendChild(modal);

    document.body.style.overflow = 'hidden';

    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    });

    // Prev/Next logic (simplified for carouselItems)
    modal.querySelector('.modal-prev').addEventListener('click', () => {
        const currentImg = modal.querySelector('img').src;
        const currentIndexInCarousel = carouselItems.findIndex(item => item.img === currentImg);
        const newIndex = (currentIndexInCarousel - 1 + carouselItems.length) % carouselItems.length;
        modal.querySelector('img').src = carouselItems[newIndex].img;
    });

    modal.querySelector('.modal-next').addEventListener('click', () => {
        const currentImg = modal.querySelector('img').src;
        const currentIndexInCarousel = carouselItems.findIndex(item => item.img === currentImg);
        const newIndex = (currentIndexInCarousel + 1) % carouselItems.length;
        modal.querySelector('img').src = carouselItems[newIndex].img;
    });
}

