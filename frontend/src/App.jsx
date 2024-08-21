import Navbar from "./components/common/Navbar";
import Header from "./components/common/Header";
import Trending from "./components/common/Trending";
import Featured from "./components/common/Featured";
import Leader from "./components/common/Leader";
import Explore from "./components/common/Explore";
import Bottom from "./components/common/Buttom";
import './index.scss'

function App() {
  return (
    <div className="body">
      <Navbar />
      <Header />
      <Trending />
      <Featured />
      <Leader />
      <Explore />
      <Bottom />


    </div>
  )
}

export default App
