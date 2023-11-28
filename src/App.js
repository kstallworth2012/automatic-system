import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import MemeForm from './MemeForm'
import AllMemes from './AllMemes'
function App() {

  const dispatch = useDispatch()
  const memeData = useSelector( store =>store)

  function addMeme(newMeme){
      dispatch({type:"ADD" , meme:newMeme})
  }

  function deleteMeme(id) {
    dispatch({type: "REMOVE", id });
  }

  return (
    <div className="App">
      <header className="App-header">
    <MemeForm  addMeme={addMeme}/>
    <AllMemes memeData={memeData} />
      </header>
    }
    </div>
  );
}

export default App;
