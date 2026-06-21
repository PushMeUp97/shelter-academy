/**
 * Shelter Academy - Global UI Interaction Layer
 */
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        // Handle explicit click triggers on the Dropdown Item
        dropdownToggle.addEventListener('click', (event) => {
            event.preventDefault(); // Halt standard relative reference jump
            dropdownMenu.classList.toggle('show');
        });

        // Global dismiss interaction when clicking outer elements
        document.addEventListener('click', (event) => {
            if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    }
});