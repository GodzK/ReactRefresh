import { useState } from 'react'
import './App.css'
import Postlist from './components/Postlist'
import MainHeader from './components/MainHeader'
function App() {
  const [modalIsVisible , setModalIsVisible]= useState(false);
  function hideModalHandler(){
    setModalIsVisible(false);
   }
   function showModalHandler(){
    setModalIsVisible(true);
   }
  return ( 
    <> 
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
     <Postlist isPosting={modalIsVisible} onStopPosting= {hideModalHandler}/>
    </main>
    </>
    
    
    
    );
}

export default App
