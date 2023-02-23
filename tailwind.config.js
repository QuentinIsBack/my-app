/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        // => @media (min-width: 640px) { ... }
        'sm': '550px',
        // => @media (min-width: 768px) { ... }
        'md': '744px',
        // => @media (min-width: 1024px) { ... }
        'lg': '950px',
        // => @media (min-width: 1280px) { ... }
        'xl': '1128px',
        // => @media (min-width: 1536px) { ... }
        '2xl': '1240px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1440px',
        // => @media (min-width: 1536px) { ... }
        '4xl': '1640px',
        // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
        'dropdown': 'rgba(0, 0, 0, 0.18) 0px 8px 28px 0px',
      },
      height: { 
        "1rem": "1rem",
        "1.5rem": "1.5rem",
        "2rem": "2rem",
        "2.25rem": "2.25rem",
        "2.5rem": "2.5rem",
        '3rem': '3rem',
        "4rem": "4rem",
        "4.5rem": "4.5rem",
        "5rem": "5rem",
        "7rem": "7rem",
        "10rem": "10rem",
        "15rem": "15rem",
        "20rem": "20rem",
        "25rem": "25rem",
      },
      colors: {
        'supergray': '#242424',
      },
    },
  },
  plugins: [
    require("daisyui"),

  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
