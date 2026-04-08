// ==================== DATA STUDENTS ====================
import { currentLang, translations } from './bahasa.js';

// Data Siswa (31 siswa)
export const students = [
    { name: "ABDUL KARIM", img: "./asset/img/murid/ABDUL_KARIM.webp", status: "anggota" },
    { name: "ADE RAMDANI", img: "./asset/img/murid/ADE_RAMDANI.webp", status: "anggota" },
    { name: "ADIF ENDRIAN", img: "./asset/img/murid/ADIF_ENDRIAN.webp", status: "anggota" },
    { name: "AGUNG RAHMANUDIN", img: "./asset/img/murid/AGUNG_RAHMANUDIN.webp", status: "anggota" },
    { name: "ALDI SAEFUL NIZAR", img: "./asset/img/murid/ALDI_SAEFUL_NIZAR.webp", status: "anggota" },
    { name: "ANI YULIANI", img: "./asset/img/murid/ANI_YULIANI.webp", status: "anggota" },
    { name: "ARIE WIRAWAN", img: "./asset/img/murid/ARIE_WIRAWAN.webp", status: "anggota" },
    { name: "DUDU BADRUJAMAN", img: "./asset/img/murid/DUDU_BADRUJAMAN.webp", status: "anggota" },
    { name: "EVAN PURNAMALILA KOSASIH", img: "./asset/img/murid/EVAN_PURNAMALILA_KOSASIH.webp", status: "anggota" },
    { name: "FATIH RIZIQ ALFARIZI", img: "./asset/img/murid/FATIH_RIZIQ_ALFARIZI.webp", status: "anggota" },
    { name: "FIKRI", img: "./asset/img/murid/FIKRI.webp", status: "anggota" },
    { name: "KAILA AZAHRA", img: "./asset/img/murid/KAILA_AZAHRA.webp", status: "anggota" },
    { name: "M. RAHADIAN BAISUNI", img: "./asset/img/murid/M_RAHADIAN_BAISUNI.webp", status: "anggota" },
    { name: "MAYA", img: "./asset/img/murid/MAYA.webp", status: "anggota" },
    { name: "META DWI ALFIANA", img: "./asset/img/murid/META_DWI_ALFIANA.webp", status: "anggota" },
    { name: "MOCH FAHMI", img: "./asset/img/murid/MOCH_FAHMI.webp", status: "anggota" },
    { name: "MUHAMAD ADI", img: "./asset/img/murid/MUHAMAD_ADI.webp", status: "anggota" },
    { name: "MUHAMMAD AL FARIDZY", img: "./asset/img/murid/MUHAMMAD_AL_FARIDZY.webp", status: "anggota" },
    { name: "NANI NURONIAH", img: "./asset/img/murid/NANI_NURONIAH.webp", status: "anggota" },
    { name: "NAZWA AULIA RULYIANTI", img: "./asset/img/murid/NAZWA_AULIA_RULYIANTI.webp", status: "anggota" },
    { name: "NINDY TRIYANTI SOMANTRI", img: "./asset/img/murid/NINDY_TRIYANTI_SOMANTRI.webp", status: "anggota" },
    { name: "NOVITA RIZKI", img: "./asset/img/murid/NOVITA_RIZKI.webp", status: "anggota" },
    { name: "PANI PELISA", img: "./asset/img/murid/PANI_PELISA.webp", status: "anggota" },
    { name: "PERA HERAWATI", img: "./asset/img/murid/PERA_HERAWATI.webp", status: "anggota" },
    { name: "RAKA SYAPUTRA PRATAMA", img: "./asset/img/murid/RAKA_SYAPUTRA_PRATAMA.webp", status: "anggota" },
    { name: "REYGA AGUNG PRATAMA", img: "./asset/img/murid/REYGA_AGUNG_PRATAMA.webp", status: "anggota" },
    { name: "RIPA ADITIA RAMADANI", img: "./asset/img/murid/RIPA_ADITIA_RAMADANI.webp", status: "anggota" },
    { name: "RIZKI ANDIKA ADITIA", img: "./asset/img/murid/RIZKI_ANDIKA_ADITIA.webp", status: "anggota" },
    { name: "SHEREN HUMAIROH", img: "./asset/img/murid/SHEREN_HUMAIROH.webp", status: "anggota" },
    { name: "SINTIA SALSABILA", img: "./asset/img/murid/SINTIA_SALSABILA.webp", status: "anggota" },
    { name: "YOGA ADITYA ERLANGGA", img: "./asset/img/murid/YOGA_ADITYA_ERLANGGA.webp", status: "anggota" }
];

let studentsLimit = 4;
let studentsShowAll = false;

// Render Students
export function renderStudents(filter = '') {
    const grid = document.getElementById('studentsGrid');
    if (!grid) return;

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">Tidak ada siswa ditemukan</div>';
        const loadMoreBtn = document.getElementById('loadMoreStudents');
        const showAllBtn = document.getElementById('showAllStudents');
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        if (showAllBtn) showAllBtn.style.display = 'none';
        return;
    }

    const itemsToShow = studentsShowAll ? filtered : filtered.slice(0, studentsLimit);

    grid.innerHTML = itemsToShow.map(s => {
        const initials = s.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        return `
        <div class="student-item">
            <div class="student-photo">
                <img src="${s.img}" alt="${s.name}" 
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div class='initials-placeholder'>${initials}</div>';">
            </div>
            <div class="student-info">
                <h3>${s.name}</h3>
                <span class="student-status ${s.status === 'anggota' ? 'member' : 'non-member'}">
                    <i class="fas fa-${s.status === 'anggota' ? 'user' : 'user-times'}"></i> ${s.status === 'anggota' ? (currentLang === 'en' ? translations.en.member : 'Anggota') : (currentLang === 'en' ? 'Non-Member' : 'Bukan Anggota')}
                </span>
            </div>
        </div>
    `}).join('');

    const loadMoreBtn = document.getElementById('loadMoreStudents');
    const showAllBtn = document.getElementById('showAllStudents');

    if (studentsShowAll) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        if (showAllBtn) showAllBtn.style.display = 'none';
    } else {
        if (loadMoreBtn) {
            if (studentsLimit >= filtered.length) {
                loadMoreBtn.style.display = 'none';
                if (showAllBtn) showAllBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
                if (showAllBtn) showAllBtn.style.display = 'inline-block';
            }
        }
    }
}

// Load more students
export function initLoadMoreStudents() {
    const loadMoreBtn = document.getElementById('loadMoreStudents');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', () => {
        studentsLimit += 4;
        if (studentsLimit > students.length) {
            studentsLimit = students.length;
        }
        renderStudents();
    });
}

// Show all students
export function initShowAllStudents() {
    const showAllBtn = document.getElementById('showAllStudents');
    if (!showAllBtn) return;

    showAllBtn.addEventListener('click', () => {
        studentsShowAll = true;
        renderStudents();
    });
}

