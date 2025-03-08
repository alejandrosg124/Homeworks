
import './App.css'
import FirstApp from './FirstApp'
import Challenge3 from './Challenge3'
import { Father } from './Father'

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
