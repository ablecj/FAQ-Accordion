import React, { useEffect, useState } from 'react'
import backgroundPatternDesktop from './assets/background-pattern-desktop.svg'
import backgroundPatternMobile from './assets/background-pattern-mobile.svg'
import iconStar from './assets/icon-star.svg'
import './App.css'
import Data from './components/AccordionData'
import iconPlus from './assets/icon-plus.svg'
import iconMinus from './assets/icon-minus.svg'

function App() {
  
  // state for index
  const[openIndex, setOpenIndex] = useState(null);
  // state for screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // useEffect for detectng the width of the screen
  useEffect(()=>{
    const handleResize =()=>{
      setIsMobile(window.innerWidth <= 768); 
    }

    // addEventListener 
    window.addEventListener('resize', handleResize);

    return ()=>{
      window.removeEventListener('resize', handleResize);
    }

  },[])

  // handle toggle
  const handleToggle =(i)=>{
    setOpenIndex(openIndex === i ? null: i);
  }

  return (
    <>
     <div className='container'>
      <img src={isMobile ? backgroundPatternMobile: backgroundPatternDesktop} alt="background pattern" />
      <div className='bottom_section'>
        <div className='faq_container'>
          <div className='faq_header'>
            <img src={iconStar} alt="icon-star" />
            <h1>FAQs</h1>
          </div>
          <div className='faq_content'>
            {
              Data.map((item, i) => (
                <div className='item' key={i}>
                  <div className='title' onClick={()=>handleToggle(i)}>
                    <h2>{item.question}</h2>
                    <img src={openIndex === i ? iconMinus: iconPlus} alt="icon" />
                  </div>
                  {
                    openIndex === i &&(
                      <div className='content'>
                      <p>{item.answer}</p>
                    </div>
                    )}
                </div>
              ))
            }
          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
