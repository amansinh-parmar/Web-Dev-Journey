import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AlarmIcon from "@mui/icons-material/Alarm"

import RatingDemo from './RatingDemo'
import FormDemo from './FormDemo'

function App() {
  return (
    <>
    {/* <div style={{ marginBottom:"2rem" }}> */}
    <div>
      <Navbar/>
      <FormDemo />
    </div>
    <div style={{margin:"0 auto", textAlign:'center', marginTop:"2rem"}}>
      <Button variant="contained" onClick={() => alert('Hii Contained BTN')} color='success'>Contained</Button>
      <Button variant="text" color='error' onClick={() => alert('Hii Error Button')}>Text</Button>
      <Button variant="outlined" color='secondary' onClick={() => alert('Hello Outlined Bttn')} >Outlined</Button>
    </div>
      <RatingDemo/>

    </>
  )
}

export default App
