// import logo from './logo.svg';
import './App.css';

import {useSpeechSynthesis} from 'react-speech-kit';
import { useState } from 'react';

function App() {
  const [text,setText]= useState('');
  const {speak}= useSpeechSynthesis();
  const handleOnClick =() =>{
   speak({text: text})
  }

  return (  
    <div class="name">
     
        <h1 class="h1name">   Text to Speech Converter in react </h1>
        <textarea className="textAreaStyle" onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button  className="buttonStyle"  onClick={()=>{handleOnClick()}}>Listen </button>
       
        </div>
  );
}

export default App;
