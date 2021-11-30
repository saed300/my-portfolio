import React,{useContext} from 'react'


const Home = () => {

  return (
    <div className='intro'>
      <div className='intro-container'>
        <h1 className='intro-heading'>Hello! <span className='wave-hand-emoji'>👋</span></h1>
        <h2 className='intro-main-paragraph'>I'm <span className='bold-paragraph'>Saed Ali</span>, a design-minded <br></br>front-end software engineer focused <br></br>on building beautiful interfaces & <br></br>experiences <span className='dude-on-laptop-emoji'>👨🏿‍💻</span></h2>
        <h3 className='intro-tagline'>Get in touch<span className='finger-right-emoji'>👉</span><a className='email-link' href = "mailto: saliviole@gmail.com">saliviole@gmail.com</a></h3>
      </div>
    </div>
  )
}

export default Home
