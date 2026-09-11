import Navbar from "./layouts/Navbar"
import Home from "./pages/Home"
import LenisScroll from "./utils/Lenis"


const App = () => {
  return (
    <div>
      <LenisScroll/>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App