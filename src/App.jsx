import { useState } from 'react'
import './App.css'
import Alexei from "./assets/Alexei.jpg";

function App() {
 

  return (
    <>
  <div className="bg-red-200 min-h-screen w-full overflow-x-hidden">
    <div>

      <div className="bg-gray-800 h-16 w-full flex items-center justify-center">
        <h1 className="text-black-600 text-2xl font-bold bg-orange-500 shadow-2xl rounded-xl border-black border-2">
          PASSWORD-GENERATOR
        </h1>
      </div>
      <div className='bg-red-200 text-white text-center font-extralight text-sm '>
       <p className='relative right- top-1 z-10 text-red-900'> PASSWORD GENERATION MADE SIMPLE!</p>
      </div>
      <div className='text-sky-400 w-60 mx-auto '><hr className='mt-3 ' /></div>

      <div className="relative flex justify-center items-center w-full bg-red-200 py-100">


       <div className="flex items-center gap-3 absolute top-10 left-5">

 <div className='flex flex-col md:flex-row lg:flex-row'>
  <img 
    src={Alexei}
    alt="Pic"
    className="w-16 h-auto mb-8 ml-38 rounded-lg md:h-16 md:relative md:top-8 md:right-26 cursor-pointer"
  />

 
   <div id='div1' className="mt-4 text-center max-w-xl sm:mr-5 ">
        <h1 className="text-2xl font-medium"><u>HOW DOES IT WORK?</u></h1>
        <p className="text-blue-400 mt-2">
          This tool helps you generate custom content based on your input.
          Just enter your details and click generate to see the magic happen!
        </p>
      </div>
        <div className="mt-4 text-center max-w-xl sm:mr-5 md:ml-20" id='div2'>
        <h1 className="text-2xl font-medium"><u>WHY WAS IT CREATED?</u></h1>
        <p className="text-blue-400 mt-2">
        This tool was designed to generate passwords.
        It can generate a mix of numbers as well as characters based on user's choice.
        </p>
      </div></div>

    

</div>


        

      
        <div className="bg-white h-[350px] w-[370px] shadow-2xl border-black border-2 rounded-xl 
        hover:border-blue-300 hover:border-2 hover:w-[400px] transition-all ease-in duration-200 delay-300 p-4 relative top-40 md:-mt-20 lg:-mt-60
  ">

          <label>
            <input
              type="text"
              placeholder="   Your Password Appears Here"
              className="h-12 w-64 text-black border-black mt-5 border-2 rounded-xl"
            />
          </label>

          <button className="bg-cyan-500 rounded-xl h-11 ml-2 mt-3 w-16 font-bold cursor-pointer">
            COPY
          </button>

        
          <div className="mt-6 flex flex-col">
           <div> <label>
              <input type="range" className="w-40 relative left-10" />
            </label> <label className='relative bottom-1 left-13'>Length:</label></div>
           
            <div className='relative left-13'><label>Numbers <input type="Checkbox" className='relative top-0.5' /></label>   <label className='ml-6'>Characters<input type="Checkbox" className='relative left-1 top-0.5'  /></label></div>
           
          </div>

        </div>

      </div>

    </div>
    <div className='bg-black h-64 border-black border-8'>
      <div className='text-white md:flex md:justify-evenly '>
              <a href=""><h1 className='font-bold mt-6 lg:mt-9 md:mt-10'>HOME</h1></a>
               <div className='font-bold mt-10'><a href="">ABOUT</a></div>
              <div className='mt-10'><h1 className='font-bold'>CONTACT INFO</h1>
                  <h3 className='mt-3' >Email:</h3><h5 className='font-light'>ayushbahuguna006@gmail.com</h5>
                  <h3 className='mt-3'>Linkedin:</h3><h5 className='font-light'><a href="https://www.linkedin.com/in/ayush-bahuguna006/">https://www.linkedin.com/in/ayush-bahuguna006/</a></h5>

              </div>






        </div>

    </div>
   <div className="bg-black w-full h-40 ">
   </div>

  </div>
</>

  )
}

export default App
