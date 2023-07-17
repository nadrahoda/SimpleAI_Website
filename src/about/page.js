import './page.css'
import Nav1 from '../components/Nav1'
import Footer from '../components/footer'

export default function About() {
  return (
   
         <div className='main'>
         <Nav1/>

         <div className='head w-full mt-2'>

          Simple AI Enterprise - <br></br>Empowering AI Application <br></br>Specialists
         </div>
         
         <h2 className='heading mt-20 text-[45px] font-bold' style={{fontFamily:"Inter", marginTop:"10rem"}}>What motivates our behavior <br></br>and actions?</h2>
         <div className='about flex justify-center items-center w-full flex-col flex-wrap'>
         <div className='w-3/4 flex justify-center' >
               <div className=' text-left mt-20 flex justify-center'>
               <p  className='w-1/2'>
At Simple AI, we strongly believe in the power of understanding to drive better decision-making. We recognize that involving those closest to the challenges AI systems aim to solve leads to improved outcomes. With this in mind, we have developed a product that empowers individuals to see, describe, and comprehend AI systems using natural language.
</p>

               </div></div>
               <div className='w-3/4 flex justify-center' >
               <div className='  text-left mt-8 flex justify-center' >
               <p className='w-1/2'>
Our easy-to-use AI tools provide clear insights into AI systems, allowing users to validate and correct those insights. This not only generates a wealth of new data but also enhances predictive capabilities. We are taking the human-AI relationship to new heights, combining understanding and performance for optimal results.
</p>
               </div></div>
               <div className='w-3/4 flex justify-center flex-wrap ' style={{backgroundColor:""}}>
               <div  className='  text-left mt-8 mb-8  flex justify-center flex-wrap color' >
               <p className='w-1/2 mb-16'>
If you share our passion for unlocking the true potential of AI, we invite you to connect with us. This is an exciting era for AI, and we believe in building AI that people can trust. It goes beyond being responsible and ethical – it's about fostering good business practices and shaping the future of intelligence. Join us in this remarkable AI journey.
</p>
               </div></div>
         </div>
                      

               <div className='w-full flex justify-center items-center dlex-wrap mt-16'>
               <div className='mb-20' style={{width:"630.31px",height:"120px"}}>
                 <h2 className='team '>Meet the team transforming our AI relationship.</h2>
               </div>
               </div>

            <div className='w-full h-full flex flex-wrap justify-center items-center mb-10'>
                   <div className='img bg-cover bg-center sm:bg-left md:bg-right'>
                     
                   </div>
            </div>
          <div className='flex  justify-center items-center flex-wrap'>
            <div className='w-3/4 h-full flex  justify-center items-center mb-12'>
                 <div className='box w-full flex flex-wrap justify-center items-center flex-col'>
                <h1 className='content5'> Facilitate empowerment by offering<br></br> accessible AI tools.</h1>
                <button
      className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
      type="button" 
    >
     Get In Touch
    </button>
                 </div>
            </div></div>
            <Footer/>
         </div>

  )
}
