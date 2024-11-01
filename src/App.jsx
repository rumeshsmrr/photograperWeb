
import './App.css'
import Categories from './Components/Categories/Categories'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Nav/Navbar'
import Reviews from './Components/Reviews/Reviews'
import Services from './Components/Services/Services'

function App() {
 

  return (
  
    <>
    <Navbar/>
      <div >
<Landing/>
<Categories/>
<Services/>
<Reviews/>
      </div>
    </>
  )
}

export default App
