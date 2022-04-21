module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
        raleway : 'Raleway Regular',
    },
    fontSize: {
      'xsm': ['15px','15px'],
      'sm': ['16px','16px'],
      'lg': ['18px','18px'],
      'sxl': ['20px','20px'],
      'xl': ['25px','31px'],
      '2xl': ['30px','39px'],
      '4xl': ['40px','40px'],
      '5xl': ['50px','50px'],
      'sbig': ['80px','80px'],
      'big': ['120px','120px'],
    },
    extend: {
      colors: {
        'crem-col': '#f89a76',
        'crem-black': '#f24e0d',
        'violet-col': '#2e324d',
        'gray-col': '#292524',
        'black-col': '#0b1e39'
      },
      padding: {
        '10px': '10px',
        '12px': '12px',
        '15px': '15px',
        '20px': '20px',
        '28px': '28px',
        '35px': '35px',
        '60px': '60px',
        '68px': '68px',
        '80px': '80px',
        '107px': '107px',
        '120px': '120px',
      },
      spacing: {
        '15px': '15px',
        '31px': '31px',
        '67px': '67px',
        '100px':'100px',
        '144px': '144px',
        '200px':'200px',
        '280px':'280px'
      },
      height:{
        '510px': '510px',
        '670px': '670px',
        '900px': '900px',
      },
      width:{
        '243px':'243px',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xslg': '1200px',
      'xlg': '1440px',
      '2xlg': '1560px',
      },
    maxWidth: {
      '138px': '138px',
      '243px': '243px',
      '330px': '330px',
      '517px': '517px',
      '529px': '529px',
      '615px': '615px',
      '1300px': '1300px',
      '1640px': '1640px',
      '1694px': '1694px',
    },
  },
  plugins: [],
}
