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
        
        // Hero Section (3 slides)
        hero_title_1: "Selamat Datang di Kelas",
        hero_class_1: "11 PPLG 2",
        hero_desc_1_1: "Angkatan 2024/2025",
        hero_desc_1_2: "Generasi Kreatif, Inovatif, Siap Digital",
        hero_btn_1: "Lihat Daftar Siswa",
        
        hero_title_2: "Belajar",
        hero_class_2: "Pemrograman",
        hero_desc_2_1: "Web, Mobile, dan Desktop",
        hero_desc_2_2: "Bersama Guru Profesional",
        hero_btn_2: "Lihat Projek",
        
        hero_title_3: "Momen",
        hero_class_3: "Tak Terlupakan",
        hero_desc_3_1: "Setiap foto menyimpan cerita dan kenangan",
        hero_desc_3_2: "Bersama dalam suka dan duka",
        hero_btn_3: "Lihat Galeri",
        
        // About
        about_title: "Tentang Kelas PPLG 2",
        wali_kelas: "Wali Kelas",
        jumlah_siswa: "Jumlah Siswa",
        tahun_ajaran: "Tahun Ajaran",
        kompetensi: "Kompetensi Keahlian",
        kompetensi_text: "Pengembangan Perangkat Lunak dan Gim",
        
        // Structure
        structure_title: "Struktur Organisasi Kelas",
        wali_kelas_label: "Wali Kelas",
        ketua_kelas: "Ketua Kelas",
        wakil_ketua: "Wakil Ketua",
        sekretaris: "Sekretaris",
        bendahara: "Bendahara",
        show_all_structure: "Tampilkan Semua",
        
        // Students
        students_title: "Daftar Siswa/i PPLG 2",
        search_placeholder: "Cari nama siswa...",
        load_more: "Tampilkan Selengkapnya",
        show_all: "Tampilkan Semua",
        no_results: "Tidak ada siswa ditemukan",
        member: "Anggota",
        male: "Laki-laki",
        female: "Perempuan",
        
        // Projects
        projects_title: "Projek / yang pernah dikerjakan",
        
        // Gallery
        gallery_title: "Galeri",
        show_all_gallery: "Tampilkan Semua",
        
        // Contact
        contact_title: "Hubungi Kami",
        contact_info: "Informasi Kontak",
        contact_name: "Nama Anda",
        contact_email: "Email",
        contact_message: "Pesan",
        contact_send: "Kirim Pesan",
        address: "Jl. Talaga Bantarujeg, Mekarraharja, Kec. Talaga, Kabupaten Majalengka, Jawa Barat 45463",
        
        // Footer
        footer_tagline: "Generasi Kreatif, Inovatif, Siap Digital. menjalani perjalanan belajar yang menarik dan bermakna. dan siap menghadapi tantangan di era digital.",
        quick_links: "Quick Links",
        follow_us: "Ikuti Kami",
        copyright: "All rights reserved.",
        
        // Popup Welcome
        popup_title: "Selamat Datang",
        popup_message: "Selamat datang di website Kelas PPLG 2 SMKN 1 TALAGA!<br><br>Website ini dibuat untuk memberikan informasi lengkap tentang kelas kami, termasuk daftar siswa, struktur organisasi, projek, dan galeri kegiatan.<br><br>Terima kasih telah mengunjungi website kami!"
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
        
        // Hero Section (3 slides)
        hero_title_1: "Welcome to Class",
        hero_class_1: "11 PPLG 2",
        hero_desc_1_1: "Class of 2024/2025",
        hero_desc_1_2: "Creative, Innovative, Digital Ready Generation",
        hero_btn_1: "View Student List",
        
        hero_title_2: "Learn",
        hero_class_2: "Programming",
        hero_desc_2_1: "Web, Mobile, and Desktop",
        hero_desc_2_2: "With Professional Teachers",
        hero_btn_2: "View Projects",
        
        hero_title_3: "Unforgettable",
        hero_class_3: "Moments",
        hero_desc_3_1: "Every photo holds a story and memory",
        hero_desc_3_2: "Together in joy and sorrow",
        hero_btn_3: "View Gallery",
        
        // About
        about_title: "About Class PPLG 2",
        wali_kelas: "Homeroom Teacher",
        jumlah_siswa: "Total Students",
        tahun_ajaran: "Academic Year",
        kompetensi: "Expertise Competency",
        kompetensi_text: "Software and Game Development",
        
        // Structure
        structure_title: "Class Organizational Structure",
        wali_kelas_label: "Homeroom Teacher",
        ketua_kelas: "Class President",
        wakil_ketua: "Vice President",
        sekretaris: "Secretary",
        bendahara: "Treasurer",
        show_all_structure: "Show All",
        
        // Students
        students_title: "Student List PPLG 2",
        search_placeholder: "Search student name...",
        load_more: "Load More",
        show_all: "Show All",
        no_results: "No students found",
        member: "Member",
        male: "Male",
        female: "Female",
        
        // Projects
        projects_title: "Projects / Completed Works",
        
        // Gallery
        gallery_title: "Gallery",
        show_all_gallery: "Show All",
        
        // Contact
        contact_title: "Contact Us",
        contact_info: "Contact Information",
        contact_name: "Your Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_send: "Send Message",
        address: "Jl. Talaga Bantarujeg, Mekarraharja, Talaga District, Majalengka Regency, West Java 45463",
        
        // Footer
        footer_tagline: "Creative, Innovative, Digital Ready Generation. undergoing an interesting and meaningful learning journey. and ready to face challenges in the digital era.",
        quick_links: "Quick Links",
        follow_us: "Follow Us",
        copyright: "All rights reserved.",
        
        // Popup Welcome
        popup_title: "Welcome",
        popup_message: "Welcome to the PPLG 2 Class website SMKN 1 TALAGA!<br><br>This website was created to provide complete information about our class, including student lists, organizational structures, projects, and activity galleries.<br><br>Thank you for visiting our website!"
    }
};

function initLanguageSwitch() {
    const langBtn = document.getElementById('langBtn');
    if (!langBtn) return;
    
    // Set initial button class
    if (currentLang === 'en') {
        langBtn.classList.add('en');
    }
    
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
        
        // Trigger re-render for dynamic content
        if (typeof renderStudents === 'function') renderStudents();
        if (typeof renderStructure === 'function') renderStructure();
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
    
    // Update Hero Slide 1
    const heroTitle1 = document.querySelector('.hero-slide:first-child .hero-content h1');
    if (heroTitle1) {
        heroTitle1.innerHTML = `${translations[currentLang].hero_title_1} <span>${translations[currentLang].hero_class_1}</span>`;
    }
    
    const heroSlide1Paragraphs = document.querySelectorAll('.hero-slide:first-child .hero-content p');
    if (heroSlide1Paragraphs[0]) heroSlide1Paragraphs[0].textContent = translations[currentLang].hero_desc_1_1;
    if (heroSlide1Paragraphs[1]) heroSlide1Paragraphs[1].textContent = translations[currentLang].hero_desc_1_2;
    
    const heroBtn1 = document.querySelector('.hero-slide:first-child .hero-content .cta-button');
    if (heroBtn1) heroBtn1.textContent = translations[currentLang].hero_btn_1;
    
    // Update Hero Slide 2
    const heroTitle2 = document.querySelector('.hero-slide:nth-child(2) .hero-content h1');
    if (heroTitle2) {
        heroTitle2.innerHTML = `${translations[currentLang].hero_title_2} <span>${translations[currentLang].hero_class_2}</span>`;
    }
    
    const heroSlide2Paragraphs = document.querySelectorAll('.hero-slide:nth-child(2) .hero-content p');
    if (heroSlide2Paragraphs[0]) heroSlide2Paragraphs[0].textContent = translations[currentLang].hero_desc_2_1;
    if (heroSlide2Paragraphs[1]) heroSlide2Paragraphs[1].textContent = translations[currentLang].hero_desc_2_2;
    
    const heroBtn2 = document.querySelector('.hero-slide:nth-child(2) .hero-content .cta-button');
    if (heroBtn2) heroBtn2.textContent = translations[currentLang].hero_btn_2;
    
    // Update Hero Slide 3
    const heroTitle3 = document.querySelector('.hero-slide:nth-child(3) .hero-content h1');
    if (heroTitle3) {
        heroTitle3.innerHTML = `${translations[currentLang].hero_title_3} <span>${translations[currentLang].hero_class_3}</span>`;
    }
    
    const heroSlide3Paragraphs = document.querySelectorAll('.hero-slide:nth-child(3) .hero-content p');
    if (heroSlide3Paragraphs[0]) heroSlide3Paragraphs[0].textContent = translations[currentLang].hero_desc_3_1;
    if (heroSlide3Paragraphs[1]) heroSlide3Paragraphs[1].textContent = translations[currentLang].hero_desc_3_2;
    
    const heroBtn3 = document.querySelector('.hero-slide:nth-child(3) .hero-content .cta-button');
    if (heroBtn3) heroBtn3.textContent = translations[currentLang].hero_btn_3;
    
    // Update About section
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = translations[currentLang].about_title;
    
    const classInfoItems = document.querySelectorAll('.class-info p');
    if (classInfoItems[0]) {
        classInfoItems[0].innerHTML = `<strong>${translations[currentLang].wali_kelas}:</strong> Dewi Robiatul Adawiah, S.Pd.`;
    }
    if (classInfoItems[1]) {
        classInfoItems[1].innerHTML = `<strong>${translations[currentLang].tahun_ajaran}:</strong> 2024/2025`;
    }
    if (classInfoItems[2]) {
        classInfoItems[2].innerHTML = `<strong>${translations[currentLang].jumlah_siswa}:</strong> 31`;
    }
    if (classInfoItems[3]) {
        classInfoItems[3].innerHTML = `<strong>${translations[currentLang].kompetensi}:</strong> ${translations[currentLang].kompetensi_text}`;
    }
    
    // Update Structure section
    const structureTitle = document.querySelector('#structure h2');
    if (structureTitle) structureTitle.textContent = translations[currentLang].structure_title;
    
    const waliKelasTitle = document.querySelector('.wali-kelas .structure-info h3');
    if (waliKelasTitle) waliKelasTitle.textContent = translations[currentLang].wali_kelas_label;
    
    const structureTitles = document.querySelectorAll('.structure-grid-simple .structure-info h3');
    if (structureTitles[0]) structureTitles[0].textContent = translations[currentLang].ketua_kelas;
    if (structureTitles[1]) structureTitles[1].textContent = translations[currentLang].wakil_ketua;
    if (structureTitles[2]) structureTitles[2].textContent = translations[currentLang].sekretaris;
    if (structureTitles[3]) structureTitles[3].textContent = translations[currentLang].bendahara;
    
    const showAllStructureBtn = document.getElementById('showAllStructure');
    if (showAllStructureBtn) showAllStructureBtn.textContent = translations[currentLang].show_all_structure;
    
    // Update Students section
    const studentsTitle = document.querySelector('#students h2');
    if (studentsTitle) studentsTitle.textContent = translations[currentLang].students_title;
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = translations[currentLang].search_placeholder;
    
    const showAllStudentsBtn = document.getElementById('showAllStudents');
    if (showAllStudentsBtn) showAllStudentsBtn.textContent = translations[currentLang].show_all;
    
    // Update Projects section
    const projectsTitle = document.querySelector('#projects h2');
    if (projectsTitle) projectsTitle.textContent = translations[currentLang].projects_title;
    
    // Update Gallery section
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) galleryTitle.textContent = translations[currentLang].gallery_title;
    
    const showAllGalleryBtn = document.getElementById('showAllGallery');
    if (showAllGalleryBtn) showAllGalleryBtn.textContent = translations[currentLang].show_all_gallery;
    
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
    
    const addressText = document.querySelector('.contact-info p:first-child');
    if (addressText) {
        addressText.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[currentLang].address}`;
    }
    
    // Update Footer
    const footerTagline = document.querySelector('.footer-logo p');
    if (footerTagline) footerTagline.textContent = translations[currentLang].footer_tagline;
    
    const quickLinksTitle = document.querySelector('.footer-links h4');
    if (quickLinksTitle) quickLinksTitle.textContent = translations[currentLang].quick_links;
    
    const followUsTitle = document.querySelector('.footer-social h4');
    if (followUsTitle) followUsTitle.textContent = translations[currentLang].follow_us;
    
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        copyright.innerHTML = `&copy; 2024/2025 Class PPLG 2 - SMKN 1 TALAGA. ${translations[currentLang].copyright}`;
    }
    
    // Update Popup Welcome
    const popupTitle = document.querySelector('#welcomePopup h2');
    if (popupTitle) popupTitle.textContent = translations[currentLang].popup_title;
    
    const popupMessage = document.querySelector('#welcomePopup p');
    if (popupMessage) popupMessage.innerHTML = translations[currentLang].popup_message;
}

// Export for use in other modules
export { translations, currentLang, initLanguageSwitch, updateLanguageUI };