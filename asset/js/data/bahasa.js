// ==================== LANGUAGE SWITCH ====================
let currentLang = localStorage.getItem('language') || 'id';

// Data terjemahan
const translations = {
    id: {
        // Navbar
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_structure: "Struktur",
        nav_students: "Siswa/i",
        nav_projects: "Projek",
        nav_gallery: "Galeri",
        nav_contact: "Kontak",
        
        // Hero
        hero_title: "Selamat Datang di Kelas",
        hero_class: "11 PPLG 2",
        hero_semester: "Semester Genap Tahun Ajaran 2024/2025",
        hero_tagline: "Generasi Kreatif, Inovatif, Siap Digital",
        hero_btn: "Lihat Daftar Siswa",
        
        // About
        about_title: "Tentang Kelas PPLG 2",
        wali_kelas: "Wali Kelas",
        jumlah_siswa: "Jumlah Siswa",
        tahun_ajaran: "Tahun Ajaran",
        kompetensi: "Kompetensi Keahlian",
        kompetensi_text: "Pengembangan Perangkat Lunak dan Gim",
        
        // Students
        students_title: "Daftar Siswa/i 11 PPLG 2",
        search_placeholder: "Cari nama siswa...",
        load_more: "Tampilkan Selengkapnya",
        show_all: "Tampilkan Semua",
        no_results: "Tidak ada siswa ditemukan",
        
        // Projects
        projects_title: "Projek / yang pernah dikerjakan",
        
        // Gallery
        gallery_title: "Galeri",
        
        // Contact
        contact_title: "Hubungi Kami",
        contact_info: "Informasi Kontak",
        contact_name: "Nama Anda",
        contact_email: "Email",
        contact_message: "Pesan",
        contact_send: "Kirim Pesan",
        
        // Footer
        footer_tagline: "Generasi Kreatif & Inovatif",
        quick_links: "Quick Links",
        follow_us: "Ikuti Kami",
        copyright: "All rights reserved.",
        
        // Status
        member: "Anggota",
        male: "Laki-laki",
        female: "Perempuan"
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_structure: "Structure",
        nav_students: "Students",
        nav_projects: "Projects",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        
        // Hero
        hero_title: "Welcome to Class",
        hero_class: "11 PPLG 2",
        hero_semester: "Even Semester Academic Year 2024/2025",
        hero_tagline: "Creative, Innovative, Digital Ready Generation",
        hero_btn: "View Student List",
        
        // About
        about_title: "About Class PPLG 2",
        wali_kelas: "Homeroom Teacher",
        jumlah_siswa: "Total Students",
        tahun_ajaran: "Academic Year",
        kompetensi: "Expertise Competency",
        kompetensi_text: "Software and Game Development",
        
        // Students
        students_title: "Student List 11 PPLG 2",
        search_placeholder: "Search student name...",
        load_more: "Load More",
        show_all: "Show All",
        no_results: "No students found",
        
        // Projects
        projects_title: "Projects / Completed Works",
        
        // Gallery
        gallery_title: "Gallery",
        
        // Contact
        contact_title: "Contact Us",
        contact_info: "Contact Information",
        contact_name: "Your Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_send: "Send Message",
        
        // Footer
        footer_tagline: "Creative & Innovative Generation",
        quick_links: "Quick Links",
        follow_us: "Follow Us",
        copyright: "All rights reserved.",
        
        // Status
        member: "Member",
        male: "Male",
        female: "Female"
    }
};

function initLanguageSwitch() {
    const langBtn = document.getElementById('langBtn');
    if (!langBtn) return;
    
    // Set initial active class
    updateLanguageUI();
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('language', currentLang);
        
        // Update button class
        if (currentLang === 'en') {
            langBtn.classList.add('en');
        } else {
            langBtn.classList.remove('en');
        }
        
        updateLanguageUI();
    });
}

function updateLanguageUI() {
    // Update button text active state
    const langId = document.querySelector('.lang-id');
    const langEn = document.querySelector('.lang-en');
    
    if (langId && langEn) {
        if (currentLang === 'id') {
            langId.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langId.classList.remove('active');
            langEn.classList.add('active');
        }
    }
    
    // Update navbar links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#home') link.textContent = translations[currentLang].nav_home;
        if (href === '#about') link.textContent = translations[currentLang].nav_about;
        if (href === '#structure') link.textContent = translations[currentLang].nav_structure;
        if (href === '#students') link.textContent = translations[currentLang].nav_students;
        if (href === '#projects') link.textContent = translations[currentLang].nav_projects;
        if (href === '#gallery') link.textContent = translations[currentLang].nav_gallery;
        if (href === '#contact') link.textContent = translations[currentLang].nav_contact;
    });
    
    // Update Hero
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${translations[currentLang].hero_title} <span>${translations[currentLang].hero_class}</span>`;
    }
    
    const heroParagraphs = document.querySelectorAll('.hero-content p');
    if (heroParagraphs[0]) heroParagraphs[0].textContent = translations[currentLang].hero_semester;
    if (heroParagraphs[1]) heroParagraphs[1].textContent = translations[currentLang].hero_tagline;
    
    const heroBtn = document.querySelector('.hero-content .cta-button');
    if (heroBtn) heroBtn.textContent = translations[currentLang].hero_btn;
    
    // Update About section
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = translations[currentLang].about_title;
    
    const classInfoItems = document.querySelectorAll('.class-info p');
    if (classInfoItems[0]) {
        classInfoItems[0].innerHTML = `<strong>${translations[currentLang].wali_kelas}:</strong> Dewi Robiatul Adawiah, S.Pd.`;
    }
    if (classInfoItems[1]) {
        classInfoItems[1].innerHTML = `<strong>${translations[currentLang].jumlah_siswa}:</strong> 31 Siswa`;
    }
    if (classInfoItems[2]) {
        classInfoItems[2].innerHTML = `<strong>${translations[currentLang].tahun_ajaran}:</strong> 2024/2025`;
    }
    if (classInfoItems[3]) {
        classInfoItems[3].innerHTML = `<strong>${translations[currentLang].kompetensi}:</strong> ${translations[currentLang].kompetensi_text}`;
    }
    
    // Update Students section
    const studentsTitle = document.querySelector('#students h2');
    if (studentsTitle) studentsTitle.textContent = translations[currentLang].students_title;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = translations[currentLang].search_placeholder;
    
    const loadMoreBtn = document.getElementById('loadMoreStudents');
    if (loadMoreBtn) loadMoreBtn.textContent = translations[currentLang].load_more;
    
    const showAllBtn = document.getElementById('showAllStudents');
    if (showAllBtn) showAllBtn.textContent = translations[currentLang].show_all;
    
    // Update Projects section
    const projectsTitle = document.querySelector('#projects h2');
    if (projectsTitle) projectsTitle.textContent = translations[currentLang].projects_title;
    
    // Update Gallery section
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) galleryTitle.textContent = translations[currentLang].gallery_title;
    
    // Update Contact section
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = translations[currentLang].contact_title;
    
    const contactInfoTitle = document.querySelector('.contact-info h3');
    if (contactInfoTitle) contactInfoTitle.textContent = translations[currentLang].contact_info;
    
    const contactFormTitle = document.querySelector('.contact-form h3');
    if (contactFormTitle) contactFormTitle.textContent = translations[currentLang].contact_info;
    
    const nameInput = document.querySelector('.contact-form input[type="text"]');
    if (nameInput) nameInput.placeholder = translations[currentLang].contact_name;
    
    const emailInput = document.querySelector('.contact-form input[type="email"]');
    if (emailInput) emailInput.placeholder = translations[currentLang].contact_email;
    
    const messageTextarea = document.querySelector('.contact-form textarea');
    if (messageTextarea) messageTextarea.placeholder = translations[currentLang].contact_message;
    
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.textContent = translations[currentLang].contact_send;
    
    // Update Footer
    const footerTagline = document.querySelector('.footer-logo p');
    if (footerTagline) footerTagline.textContent = translations[currentLang].footer_tagline;
    
    const quickLinksTitle = document.querySelector('.footer-links h4');
    if (quickLinksTitle) quickLinksTitle.textContent = translations[currentLang].quick_links;
    
    const followUsTitle = document.querySelector('.footer-social h4');
    if (followUsTitle) followUsTitle.textContent = translations[currentLang].follow_us;
    
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        copyright.innerHTML = `&copy; 2024/2025 Kelas 11 PPLG 2 - SMKN 1 TALAGA. ${translations[currentLang].copyright}`;
    }
    
    // Re-render students to update status text
    renderStudents();
}

// Panggil di initialization
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitch();
    // ... fungsi lainnya
});