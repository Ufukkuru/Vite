import './App.css'
import Course from './components/course'
import ReactImages from './assets/react-new.jpg'
import Angular from './assets/angular-new.jpg'
import Vue from './assets/vue-new.jpg'
import Jquery from './assets/Jquery-new.png'
import Navbar from './components/navbar'

function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='grid grid-cols-none sm:grid-cols-4 mt-10 mx-auto space-x-5 w-full container justify-center text-center'>
      <div className='mb-3'><Course image={ReactImages} title="React" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt."/></div>
      <div className='mb-3'><Course image={Angular} title="Angular" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt."/></div>
      <div className='mb-3'><Course image={Vue} title="Vue" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt."/></div>
      <div className='mb-3'><Course image={Jquery} title="Jquery" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt."/></div>
    </div>
    </>
  )
}

export default App
