/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
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
        "5.5rem": "5.5rem",
        "6rem": "6rem",
        "7rem": "7rem",
        "8rem": "8rem",
        "10rem": "10rem",
        "15rem": "15rem",
        "20rem": "20rem",
        "25rem": "25rem",
      },
      width: {
        "2.5rem": "2.5rem",
        "5rem": "5rem",
        "10rem": "10rem",
        "15rem": "15rem",
        '14rem': '14rem',
        "20rem": "20rem",
        "28rem": "28rem",
        "30rem": "30rem",
        "35rem": "35rem",
        "36rem": "36rem",
        "38rem": "38rem",
        "40rem": "40rem",
      },
      margin: {
        "7.5": "2rem",
        "5rem": "5rem",
        "10rem": "10rem",
        "15rem": "15rem",
        "17rem": "17rem",
        "20rem": "20rem",
        "25rem": "25rem",
        "35rem": "35rem",
        '50rem': '59rem',
        "90rem": "90rem",
      },
      padding: {
        '5.5rem': '5.5rem',
        '50rem': '50rem',
      },
      opacity: {
        '15': '.15',
      },
      scale: {
        '175': '1.75',
        '15': '0.15',
        '200': '2.00',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
      },
      boxShadow: {
        'dropdown': 'rgba(0, 0, 0, 0.18) 0px 8px 28px 0px',
      },
      colors: {
        'supergray': '#242424',
        'superblue': '#2292a4',
        'superred': '#FB4B4E'
      },
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
      minHeight: {
        '5rem': '5rem'
      },
      maxHeight: {
        '7rem': '7rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '20rem': '20rem'
      },
      maxWidth: {
        'xs': '375px',
        'modal': '475px',
        'sm': '550px',
        'md': '744px',
        'lg': '950px',
        'xl': '1182px',
        '2xl': '1240px',
        '3xl': '1440px',
        '4xl': '1640px',

        '14rem': '14rem',
        '36rem': '36rem',
      },
      minWidth: {
        '36rem': '36rem',
      },
      animation: {
        showin: 'showin 1s',
        showout: 'showout 1s'
      },
      borderWidth: {
        '6': '6px',
        '8': '8px',
      },
      keyframes: {
        showin: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },        
        showout: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
        }
      },
      animation: {
        showin: 'showin 1s',
        showout: 'showout 1s'
      },
      keyframes: {
        showin: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1
          },
        },        
        showout: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(10px)',
            opacity: 0
          },
        }
      }
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
