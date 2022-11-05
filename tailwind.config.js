/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1F',
        primaryOpacity: 'rgba(29, 29, 31, 0.5)',
        secondaryDark: '#3E3E41',
        tercDark: '#1D1D1F',
        primaryBlue: '#006DDB',
        dark: '#000',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/banner.jpeg')",
        'about': "url('/img/about-fundo.png')",
        'skills': "url('/img/skills-fundo.png')",
        'project': "url('/img/project-fundo.png')",
        'contact': "url('/img/contact-fundo.png')",
      }
    },
  },
  plugins: [],
}