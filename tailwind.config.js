/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient-overlay': "linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%), url('background.png')",

        'red-background': "linear-gradient(to right, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%), url('background2.png')"
  },
  plugins: []
}
}
}