// ==================== MODAL & CLICK HANDLERS ====================

export function initGalleryClick() {
    document.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG' && e.target.closest('.gallery-photo') && !e.target.closest('.carousel-slide')) {
            const src = e.target.src;

            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = 0;
            popup.style.left = 0;
            popup.style.width = '100%';
            popup.style.height = '100%';
            popup.style.background = 'rgba(0,0,0,0.8)';
            popup.style.display = 'flex';
            popup.style.alignItems = 'center';
            popup.style.justifyContent = 'center';
            popup.style.zIndex = 9999;

            popup.innerHTML = `<img src="${src}" style="max-width:90%; max-height:90%; border-radius:10px;">`;

            popup.addEventListener('click', () => popup.remove());

            document.body.appendChild(popup);
        }
    });
}

export function initStudentClick() {
    document.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG' && e.target.closest('.student-photo')) {
            const src = e.target.src;

            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = 0;
            popup.style.left = 0;
            popup.style.width = '100%';
            popup.style.height = '100%';
            popup.style.background = 'rgba(0,0,0,0.85)';
            popup.style.display = 'flex';
            popup.style.alignItems = 'center';
            popup.style.justifyContent = 'center';
            popup.style.zIndex = 9999;

            popup.innerHTML = `
                <img src="${src}" 
                style="max-width:90%; max-height:90%; border-radius:12px; box-shadow:0 0 20px black;">
            `;

            popup.addEventListener('click', () => popup.remove());

            document.body.appendChild(popup);
        }
    });
}

export function initStructureClick() {
    document.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG' && e.target.closest('.structure-photo')) {
            const src = e.target.src;

            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = 0;
            popup.style.left = 0;
            popup.style.width = '100%';
            popup.style.height = '100%';
            popup.style.background = 'rgba(0,0,0,0.85)';
            popup.style.display = 'flex';
            popup.style.alignItems = 'center';
            popup.style.justifyContent = 'center';
            popup.style.zIndex = 9999;

            popup.innerHTML = `
                <img src="${src}" 
                style="max-width:90%; max-height:90%; border-radius:12px; box-shadow:0 0 20px black;">
            `;

            popup.addEventListener('click', () => popup.remove());

            document.body.appendChild(popup);
        }
    });
}

export function initProjectClick() {
    document.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG' && e.target.closest('.project-img')) {
            const src = e.target.src;

            const popup = document.createElement('div');
            popup.style.position = 'fixed';
            popup.style.top = 0;
            popup.style.left = 0;
            popup.style.width = '100%';
            popup.style.height = '100%';
            popup.style.background = 'rgba(0,0,0,0.85)';
            popup.style.display = 'flex';
            popup.style.alignItems = 'center';
            popup.style.justifyContent = 'center';
            popup.style.zIndex = 9999;

            popup.innerHTML = `
                <img src="${src}" 
                style="max-width:90%; max-height:90%; border-radius:12px; box-shadow:0 0 20px black;">
            `;

            popup.addEventListener('click', () => popup.remove());

            document.body.appendChild(popup);
        }
    });
}

