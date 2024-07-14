// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bggradient': 'linear-gradient(180deg,#040c17 0%,#040c17 100%)',
      },
         colors:{
        'purple':'#CC3D5C',
        'networkbg':'#F2F2F2',
        'first':'#0A142A',
        'second':"#D6DFF9",
        'third':"#E1DCF3",
        'fourth':"#F9EBDD",
        "blue":"#558BDC",
        "banner": "#1F2937"
      },
      
          
       
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
