import { useEffect, useState } from 'react'
import './App.css'

import Navbar from '../components/Navbar'

const App = () => {

  const [hour, setHour] = useState(Number(localStorage.getItem('hour')) ?? 0)
  const [min, setMin] = useState(Number(localStorage.getItem('min')) ?? 0)
  const [sec, setSec] = useState(Number(localStorage.getItem('sec')) ?? 0)
  const [msec, setMsec] = useState(Number(localStorage.getItem('msec')) ?? 0)

  const [run, setRun] = useState(false)

  let timer

  useEffect(() => {

    localStorage.setItem('hour', hour)
    localStorage.setItem('min', min)
    localStorage.setItem('sec', sec)
    localStorage.setItem('msec', msec)

  }, [hour, min, sec, msec])

  useEffect(() => {

    run && (
      timer = setInterval(() => {

        setMsec(v => v + 1)

        msec === 100 && (setSec(v => v + 1) & (setMsec(0)))
        sec === 60 && (setMin(v => v + 1)) & (setSec(0))
        min === 60 && (setHour(v => v + 1)) & (setMin(0))

      }, 10)
    )

    return () => clearInterval(timer)

  })

  const reset = () => {
    setHour(0)
    setMin(0)
    setSec(0)
    setMsec(0)
    setRun(false)
  }

  return (
    <>

    <Navbar />

      <h1 id='page-title'>Cronômetro</h1>

      <div className="card">

        <div id="chronometer">
          <div className="display">
            <div id='hour' className="digit">{hour < 10 ? '0' + hour : hour}</div><div className="colon">:</div>
            <div id='min' className="digit">{min < 10 ? '0' + min : min}</div><div className="colon">:</div>
            <div id='sec' className="digit">{sec < 10 ? '0' + sec : sec}</div><div className="colon">:</div>
            <div id='ms' className="digit">{msec < 10 ? '0' + msec : msec}</div>
          </div>
          <div className="controls">
            <button id='start-pause' onClick={() => setRun(!run)} className={run ? 'red' : 'green'}>{run ? 'Pause' : 'Start'}</button>
            <button id='reset' onClick={reset}>Reset</button>
          </div>
        </div>

      </div>

      <p className="instructions">
        <code>* Os valores são salvos no navegador</code>
      </p>

      <footer>
        <p id='author-container'>
          <div><img id='logo-author' src="logo.png" alt="" height="40" /></div>
          <div id='author-text-container'>Criado por <strong><em> <span id="author"> Fernando Alves</span></em></strong></div>
        </p>

        <div id="links">
          <a href="https://instagram.com/lfalvespe" target="_blank"><img src="instagram.png" alt="" height="25" /></a>
          <a href="https://www.linkedin.com/in/fernando-alves-6a410323b/" target="_blank"><img src="linkedin-blue.png" alt="" height="25" /></a>
          <a href="https://github.com/lfalvespe" target="_blank"><img src="github.png" alt="" height="25" /></a>
          <a href="mailto:lfalvespe@gmail.com"><img src="gmail.png" alt="" height="25" /></a>

        </div>

        <div id='mark'>&copy; 2025</div>

      </footer >

    </>
  )
}

export default App
