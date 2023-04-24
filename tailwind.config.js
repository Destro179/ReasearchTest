/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1400px'
    },
    fontFamily: {
        body: ['museo-sans', 'Open Sans', 'sans-serif'],
        display: ['museo-sans', 'Pt Sans', 'sans-serif'],
        fa: ['FontAwesome']
    },
    fontSize: {
      'xxs': '.625rem',
      'xs': '.7rem',
      'sm': '.875rem',
      'base': '.9rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        primary: '#50D0FF',
        'primary-light': '#26A9E1',
        'primary-grad-bright': '#89E0FF',
        'primary-dark': '#0071B6',
        'primary-lightest': '#EEFAFF',
        black: '#303446',
        'dark-popup-border': '#51515A', 
        'separator-dark-color': '#24242B', 
        'grey-1': '#60656D',
        'grey-2': '#B8CAD4',
        'grey-3': '#B3B9BA',
        'grey-4': '#EEF0F1',
        'grey-5': '#F0F5F9',
        'grey-6': '#ECEFF3',
        'grey-7': '#9AA4B3',
        'grey-8': '#FAFBFD',
        'grey-9': '#2D2D37',
        'grey-info': '#445865',
        'white-pure': '#ffffff',
        white: '#ffffff',
        green: '#29AC64',
        'green-light': '#EFFFF1',
        orange: '#FF6B00',
        'orange-light': '#FFF3E7',
        red: '#E80729',
        'red-dark': '#B91C1C',
        'red-light': '#FFEFEF',
        'red-lightest': '#FFF9F9',
        'amber': '#FFC107',
        'amber-light': '#FFF8E1',
        yellow: '#f7b600',
        'yellow-bright': '#FFBC00',
        'yellow-dark':'#e4a800',
        'yellow-light': '#FFF7EF',
        'light-blue': '#4EBBFF',
        'light-blue-light': '#EFFFFF',
        'dark-blue': '#0180D5',
        'dark-blue-light': '#EFF5FF',
        'light-green': '#7ac31d',
        'pink': '#ef319c',
        'purple': '#6e3ef7',
      },
      spacing: {}
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}