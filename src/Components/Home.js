import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import { homeImage } from './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
const Home = () => {
  return (
    <div className='flex p-[20px] md:px-20 justify-between flex-col md:flex-row'>
<div className='flex flex-row justify-end w-full'>
        <div className='flex flex-col items-start content-end w-full'>
            <h1 className='text-[35px] md:text-[40px] font-bold '>{AppText.hello}</h1>
            <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            {/* <h1 className='text-[40px]  md:text-[60px] font-bold  text-purple-600'>{AppText.ShubhamJoshi}</h1> */}
            <Typewriter
  options={{
    strings: [AppText.shubhamJoshi, AppText.FrontedDeveloper,AppText.UIUXDesigner,AppText.BackendDeveloper],
    autoStart: true,
    loop: true,
    
  }}
/>
</div>
<div>
  <h1 className='my-5 text-gray-400'>I am Shubham Joshi and i have skills in Java, Python, Sql, Servlets, JSP, JDBC, Hibernate, Spring Framework, HTML, CSS, JavaScript, GIT, GitHub, React.js. </h1>
</div>
            <button class="hover:z-50 transition-all duration-300 ease-in-out  hover:scale-125 bg-purple-600 p-2 rounded-md text-white">Resume</button>
        </div>
        </div>
        <div className='flex justify-center w-full '>
          <img src={homeImage}  className="w-[200px] md:w-[300px]"/>
        </div>
    </div>
  )
}

export default Home