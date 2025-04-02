
import './App.css'
import Challenge2y4 from './Challenge2y4'
import Challenge3 from './Challenge3'
import { Father } from './Father'
import FirstApp from './FirstApp'

function App() {

  return (
    <span>
    <h1> CHALLENGES #2,3,4,5 </h1>
    <h2>Alejandro Solarte Gaitán - 2225823</h2>
    <div className="flex">
      <div className="bordes">
        <FirstApp/>
      </div>
      <div className="bordes">
        <Challenge2y4/>
      </div>
    </div> 
    <div className="flex">
      <div className="bordes">
        <Challenge3/>
      </div>
      <div className="bordes">
        <Father/>
      </div>
    </div>
    </span>
  )
}

export default App
