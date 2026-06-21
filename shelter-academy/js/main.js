/**
 * Shelter Academy - Global UI Interaction Layer
 */
document.addEventListener('DOMContentLoaded', () => {
    // Toggle dropdown menus
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        const li = toggle.closest('.dropdown');
        const menu = li ? li.querySelector('.dropdown-menu') : null;
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            if (menu) menu.classList.toggle('open');
        });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
        }
    });
});