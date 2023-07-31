import React, { useState } from 'react'
import Card from './Card/Card'
import ChooseList from './ChooseList/ChooseList'
import glassList from './Card/dataGlasses.json'


const Content = () => {
  console.log(glassList)
  let [glass, setGlass] = useState(glassList[0])
  let handleGlass = (id) => {
    setGlass(glassList[id-1])
  } 
  return (
    <div className='position-relative'>
      <div className='overlay position-absolute' style={{ background: 'rgba(0,0,0,.5)', width: '100vw', height: '1200px', zIndex: 2 }}>
        <div className='text-light'>

          <Card glass={ glass }/>
          <ChooseList handleGlass = {handleGlass}/>
        </div>
      </div>
      <img className='position-relative' src="/images/jpg/background.jpg" alt="..." style={{ width: '100vw', height: '1200px' }} />

    </div>
  )
}

export default Content