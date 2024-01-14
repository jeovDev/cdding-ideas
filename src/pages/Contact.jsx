import React from 'react'

const Contact = () => {
  return (
    // h-contact
    <div className='p-10 xs:pb-10 md:p-10  bg-slate-100'>
      {/* <div className="title border-2 border-red-300"><h2>Contact Me</h2></div> */}
      <div className="h-full grid sm:grid-cols-2 "> 
          <div className="info p-10 md:p-5 ">
                <div className="contactSection text-slate-500 mb-2">Contact Section</div>
                <div className="title text-custom-about text-orange-600 mb-4"><strong>CODING IDEAS</strong></div>
                <div className='text-slate-500 text-sm w-10/12 mb-8 sm:mb-20' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae, excepturi ad recusandae labore obcaecati. Nisi sunt adipisci architecto libero.</p></div>
                <div className="socials grid grid-cols-3  w-6/12">
                    <div className="gmail   grid "><i class="fi fi-brands-google text-orange-600 mb-2"></i> <span className='text-slate-500 text-md'></span> </div>
                    <div className="facebook   grid"><i class="fi fi-brands-facebook text-orange-600 mb-2"></i><span className='text-slate-500 text-md'></span> </div>
                    <div className="instagram grid"><i class="fi fi-brands-instagram text-orange-600 mb-2"></i> <span className='text-slate-500 text-md'></span> </div>
                </div>
          </div>
          <div className=" h-full forms flex items-center justify-center">
             <div className="input-container border-2 w-7/12 h-4/6 px-12 pt-10 formContainer flex flex-col" >
                <div className="form-group flex flex-col">
                    <label className='text-xs mx-2 mb-2'>Your Name</label>
                <input type="text"  placeholder='Your Name'/>
                </div>
             
                <div className="form-group flex flex-col">
                    <label className='text-xs mx-2 mb-2'>Email Address</label>
                <input type="text" placeholder='Your Name'/>
                </div>
                <div className="form-group flex flex-col">
                    <label className='text-xs mx-2 mb-2'>Message</label>
                <textarea type="text" placeholder='Your Name'/>
                </div>

                <div className="button-container">
                    <button className='bg-orange-500'>Submit</button>
                </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
