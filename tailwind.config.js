module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'app-color-0': '#373B53',
        'app-color-1': '#7C5DFA',
        'app-color-2': '#9277FF',
        'app-color-3': '#1E2139',
        'app-color-4': '#252945',
        'app-color-5': '#DFE3FA',
        'app-color-6': '#888EB0',
        'app-color-7': '#7E88C3',
        'app-color-8': '#0C0E16',
        'app-color-9': '#EC5757',
        'app-color-10': '#9277FF',
        'app-color-11': '#F8F8FB',
        'app-color-12': '#141625',
        'app-color-border': '#494E6E',
        'app-color-new': '#777F98',
        'app-color-gradient': '#979797',
        'app-color-discard': '#F9FAFE',
        'app-color-idn': '#858BB2', // idn stands for invoice display name
        'app-color-paid': '#33D69F',
        'app-color-pending': '#FF8F00',
        'app-color-view-bg': '#F2F2F2',
        'app-color-delete': '#EC5757',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
