/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xsm': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2xl-mx': {'max': '1535px'},
      'xl-mx': {'max': '1279px'},
      'lg-mx': {'max': '1023px'},
      'md-mx': {'max': '767px'},
      'sm-mx': {'max': '639px'},
      'xsm-mx':{'max':'350px'}
    }
  },
  plugins: [],
}