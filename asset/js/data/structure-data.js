// ==================== DATA STRUCTURE ====================

export const structureData = [
    { name: "NAZWA AULIA RULYIANTI", role: "Bendahara", roleEn: "Treasurer", img: "./asset/img/murid/NAZWA_AULIA_RULYIANTI.webp" },
    { name: "SINTIA SALSABILA", role: "Bendahara", roleEn: "Treasurer", img: "./asset/img/murid/SINTIA_SALSABILA.webp" },
    { name: "RIPA ADITIA RAMADANI", role: "Keamanan", roleEn: "Security", img: "./asset/img/murid/RIPA_ADITIA_RAMADANI.webp" },
    { name: "AGUNG RAHMANUDIN", role: "Keamanan", roleEn: "Security", img: "./asset/img/murid/AGUNG_RAHMANUDIN.webp" },
    { name: "FIKRI", role: "Kebersihan", roleEn: "Hygiene", img: "./asset/img/murid/FIKRI.webp" },
    { name: "NINDY TRIYANTI SOMANTRI", role: "Kebersihan", roleEn: "Hygiene", img: "./asset/img/murid/NINDY_TRIYANTI_SOMANTRI.webp" },
    { name: "NOVITA RIZKI", role: "Kerohanian", roleEn: "Spiritual", img: "./asset/img/murid/NOVITA_RIZKI.webp" },
    { name: "META DWI ALFIANA", role: "Kerohanian", roleEn: "Spiritual", img: "./asset/img/murid/META_DWI_ALFIANA.webp" },
    { name: "ADE RAMDANI", role: "Kesenian", roleEn: "Arts", img: "./asset/img/murid/ADE_RAMDANI.webp" },
    { name: "PANI PELISA", role: "Kesenian", roleEn: "Arts", img: "./asset/img/murid/PANI_PELISA.webp" },
    { name: "YOGA ADITYA ERLANGGA", role: "Olahraga", roleEn: "Sports", img: "./asset/img/murid/YOGA_ADITYA_ERLANGGA.webp" },
    { name: "FATIH RIZIQ ALFARIZI", role: "Olahraga", roleEn: "Sports", img: "./asset/img/murid/FATIH_RIZIQ_ALFARIZI.webp" }
];

// Render function for structure grid
export function renderStructure(searchTerm = '') {
    const grid = document.getElementById('structureGrid');
    if (!grid) return;

    const filteredData = structureData.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const limit = window.structureShowAll ? filteredData.length : window.structureLimit || 4;
    const displayData = filteredData.slice(0, limit);

    grid.innerHTML = displayData.map(item => `
        <div class="structure-item">
            <div class="structure-photo">
                <img src="${item.img}" loading="lazy" alt="${item.role}">
            </div>
            <div class="structure-info">
                <h3>${item.role}</h3>
                <p>${item.name}</p>
            </div>
        </div>
    `).join('');

    // Update button text
    const btn = document.getElementById('showAllStructure');
    if (btn) {
        if (window.structureShowAll || filteredData.length <= limit) {
            btn.textContent = 'Sembunyikan';
            btn.dataset.state = 'hide';
        } else {
            btn.textContent = 'Tampilkan Semua';
            btn.dataset.state = 'show';
        }
    }
}

// Make available globally (legacy)
window.structureData = structureData;
window.renderStructure = renderStructure;

