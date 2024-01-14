/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       height: {
        'content-container' : '900px',
        'header' : '70vh',
        'contact' : '90vh',
        'headerS' : '40vh',
        'about' : '50vh',
        'about-container' : '100vh',
        'image' : '800px',
        'content-card' : '400px',
        'image-card' : '350px',
        'thumbContainer' : '280px',
        // 'thumbContainer' : '280px',
        'footer' : '50vh',
        'sourceImage' : '80vh'
       },
       width:{
        'intro' : '40%',
         'card' : '100%',
         'image-card' : '350px',
        //  'thumbContainer' : '400px',
         'thumbContainer' : '100%',
       },
       
       minWidth:{
        'introMin' : '300px',
        'imageMin' : '300px'
       },
       maxHeight:{
        'maxheaderimage' : '800px',
       },
       minHeight:{
        'minheaderimage' : '0px'
       },
       textColor:{
        'primaryTextColor' : '#E35F21'
       },
       gridColumnStart:{
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4'
       },
       gridColumnEnd:{
        '1' : '1',
        '2' : '2',
        '3' : '3',
        '4' : '4'
       },
      fontSize:{
        'xs-fs' :'12px',
        'sm-fs' :'16px',
        'md-fs' :'18px',
        'lg-fs' :'22px',
        'xl-fs' :'28px',
        'custom-about' : '30px',
        'custom-icon' : '30px',
        'code-title' : '40px',
      },
      screens:{
        xs:'280px',
        sm:'640px',
        sm2:'973px',
        md:'1121px',
        lg:'1463px',
        xl:'1280px',
      
      }
       
      
    },
  },
  plugins: [],
}

