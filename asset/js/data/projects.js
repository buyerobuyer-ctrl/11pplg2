// ==================== DATA PROJECTS ====================

// Data Projek
export const project = [
    {
        title: "perpustakaan",
        img: "./asset/img/project/perpustakaan.png",
        description: "Web perpustakaan umum yang dapat diakses semua orang",
        tech: "HTML, CSS, JavaScript, PHP",
    },
    {
        title: "toolmanager",
        img: "./asset/img/project/toolmanager.png",
        description: "Aplikasi manajemen tools untuk memudahkan pengelolaan inventaris",
        tech: "Laravel, PHP MySQL, Bootstrap",
    },
    {
        title: "uangkas",
        img: "./asset/img/project/uangkas.png",
        description: "Aplikasi manajemen keuangan kas untuk sekolah",
        tech: "Laravel, PHP, MySQL, Bootstrap",
    }
];

// Render Projek
export function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    const techBadges = (techArray) => {
        if (typeof techArray === 'string') {
            return `<span class="tech-badge">${techArray}</span>`;
        }
        return techArray.map(t => `<span class="tech-badge">${t}</span>`).join('');
    };

    grid.innerHTML = project.map(p => `
        <div class="project-item">
            <div class="project-img">
                <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/100x100?text=${p.title}'">
            </div>
            <div class="project-info">
                <h3>${p.title.toUpperCase()}</h3>
                <p>${p.description}</p>
                <div class="project-tech">${techBadges(p.tech)}</div>
            </div>
        </div>
    `).join('');
}

