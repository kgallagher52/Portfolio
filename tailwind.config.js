module.exports = {
  mode:'jit',
  content: ["src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "heavy-purple": "#2F1B59",
        "medium-purple": "#3B2559",
        "light-purple": "#604D73",
        "light-white": "rgba(255,255,255,0.17)",
        "primary": "#265D73"
      }
    },
    screens:{
      'mobile': '400px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [],
}