// ==================== MAIN - IMPORT ALL MODULES ====================

// Data & Render
import { students, renderStudents, initLoadMoreStudents, initShowAllStudents } from './data/students.js';
import { project, renderProjects } from './data/projects.js';
import { galleryItems, renderGallery, initLoadMoreGallery, initShowAllGallery, initCarousel } from './data/gallery.js';
import { structureData, renderStructure } from './data/structure-data.js';

// UI Modules
import { initGalleryClick, initStudentClick, initStructureClick, initProjectClick } from './ui/modals.js';
import { 
    initSearch, initDarkMode, initHamburger, initSmoothScroll, initScrollReveal, 
    initNavbarHide, initActiveMenu, initBackToTop, initContactForm, 
    initImageErrorHandler, initSecurity, initShowAllStructure
} from './ui/interactions.js';
import { initHeroCarousel } from './ui/hero-carousel.js';
import { initLanguageSwitch } from './data/bahasa.js';

// Globals available for legacy scripts (structure.js)
window.students = students;
window.project = project;
window.galleryItems = galleryItems;
window.structureData = structureData;
window.renderStudents = renderStudents;
window.studentsLimit = 4;
window.studentsShowAll = false;
window.structureLimit = 4;
window.structureShowAll = false;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Render data
    renderStudents();
    renderProjects();
    renderGallery();
    renderStructure();

    // Init features
    initSearch();
    initDarkMode();
    initHamburger();
    initSmoothScroll();
    initScrollReveal();
    initNavbarHide();
    initActiveMenu();
    initBackToTop();
    initContactForm();
    initImageErrorHandler();
    initSecurity();

    // Load more buttons
    initLoadMoreStudents();
    initShowAllStudents();
    initLoadMoreGallery();
    initShowAllGallery();
    initShowAllStructure();

    // Click handlers for modals
    initGalleryClick();
    initStudentClick();
    initStructureClick();
    initProjectClick();

    // Carousels
    initCarousel();
    initHeroCarousel();
    initLanguageSwitch();

    console.log('✅ All modules loaded successfully!');
});

