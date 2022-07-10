import React  from 'react'
import './header.css'
export default function Header(props) {
  return (
    <div className='header d-flex my-2'>
      <h1 className='text-white'>Notes</h1>
      <button className='save py-1 px-3' onClick={()=>props.handleDarkMode((previousDarkMode=>!previousDarkMode))}>toggle mode</button>
    </div>
  )
}
