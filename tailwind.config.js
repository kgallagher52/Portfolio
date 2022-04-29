
module.exports = {
  content: ["src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "background": "#172026",
        "teal": "#6EE7B7",
        "purple": "#9333EA",
        "blue": "#3B82F6",
        "themeGreen": "#04BFAD", 
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