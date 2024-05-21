function updateTheme() {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const root = document.documentElement;

    if (darkThemeQuery.matches) {
        root.classList.add('dark-theme');
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
    } else {
        root.classList.remove('dark-theme');
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
    }
}

function toggleTheme() {
    const root = document.documentElement;
    if (root.classList.contains('dark-theme')) {
        root.classList.remove('dark-theme');
        root.style.setProperty('--background-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
    } else {
        root.classList.add('dark-theme');
        root.style.setProperty('--background-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Initial theme update
    updateTheme();

    // Listen for changes in theme preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
    
    console.log('JavaScript Loaded');
});
