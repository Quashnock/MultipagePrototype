import { useState } from 'react'
import Homepage from './HomePage'
import OtherPage from './OtherPage'
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path = "/MultipagePrototype/" element ={<Homepage/>}/>
      <Route path = "/MultipagePrototype/otherpage" element = {<OtherPage/>}/>
    </Routes>
    </>
  )
}

export default App
