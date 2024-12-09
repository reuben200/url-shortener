const rootElement = document.documentElement;

// Check saved theme or system preference
const userPreference = localStorage.getItem('theme');
if (userPreference === 'dark' || (!userPreference && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  rootElement.classList.add('dark');
} else {
  rootElement.classList.remove('dark');
}

// Export a function for toggling
export const toggleTheme = () => {
  if (rootElement.classList.contains('dark')) {
    rootElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    rootElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
};
