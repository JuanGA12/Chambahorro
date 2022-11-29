module.exports = {
  mode: 'jit',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '38':'9.5rem',
        '140':'35rem',
        '120':'30rem',
        '130':'32.5rem',
        '140':'35rem',
      },
      height: {
        '18':'4.5rem',
        '22':'5.5rem',
        '38':'9.5rem',
        '30':'7.5rem',
        '29':'9.2rem',
        '140':'35rem',
      },
      margin:{
        '140': '35rem',
        '144': '36rem',
        '148': '37rem',
        '152': '38rem',
        '156': '39rem',
        '160': '40rem',
      },
      leading:{
        '40':'10rem',
        '60':'15rem',
        '80':'20rem'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],

}

