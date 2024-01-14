import React, { createRef } from 'react'
import ContentCard from '../components/contentCard';
const SourcePage = () => {
   
  const cloudinary = [
    'CLOUDINARYDOTNET/Form1.cs',
    'CLOUDINARYDOTNET/Form2.cs',
  ]
  const AnimatedMenu = [
    'animatedMenu/Form1.cs',

  ]
  const AutoUpdate= [
    'autoUpdate/Form1.cs',
    'autoUpdate/bin/Debug/bat.bat',

  ]
  const modal= [
    'modal/Form1.cs',
    'modal/modalForm.cs',

  ]



  

  return (
    <div className='bg-slate-100'>
     <div className="sourceHeader px-10 sm:px-20 pt-10">
      <div className='text-lg-fs'> <strong>Projects</strong> </div>
      <div className='text-slate-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic alias sint perspiciatis commodi. Eaque quae eius repellat exercitationem officiis.</div>
     </div>
    
    <div className='grid sm:grid-cols-2 grid-col-1 md:grid-cols-4 gap-5 px-10 sm:px-20 pt-10 pb-10'>
       <ContentCard 
       path={cloudinary}
       title="Cloudinary Tutorial"
       image="https://i.ytimg.com/vi/KQ0GCc6DiK4/hqdefault.jpg"
       links="KQ0GCc6DiK4"
       />
      
      <ContentCard 
       path={AnimatedMenu}
       title="Animated Menu"
       image="https://i.ytimg.com/vi/fsQjLWzrmMQ/hqdefault.jpg"
       links="fsQjLWzrmMQ"
       />

      <ContentCard 
       path={AutoUpdate}
       title="Auto Update"
       image="https://i.ytimg.com/vi/rChMv7IVbmk/hqdefault.jpg"
       links="rChMv7IVbmk"
       />
       <ContentCard 
       path={modal}
       title="Animated Modal"
       image="https://i.ytimg.com/vi/8vavpfU0yKQ/hqdefault.jpg"
       links="8vavpfU0yKQ"
       />


    </div>
    </div>
  )
}

export default SourcePage
