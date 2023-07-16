import { useEffect, useState } from 'react';
import './App.css';
import './AddToaster.js'
import addToaster from './AddToaster.js';


function App() {
  const [text1,setText1] = useState('');
  const [text2, setText2] = useState('');
  

  useEffect(() => {
    window.fromFlutter = () => {
      alert('from flutter to web');
    }
  })
  

  return (
    <div className="App">
      Hello flutter<br></br>
      <input type="text" value={text1} onChange={(e) => {
        setText1(e.target.value);
      }} />
      <button onClick={
        () => {
          addToaster();
        }
      }>type1</button>
      <div></div>
      <input type="text" value={text2} onChange={(e) => {setText2(e.target.value) }} />
      <button>type1</button>
    </div>
  );
}

export default App;
