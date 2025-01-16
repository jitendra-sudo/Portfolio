import React from 'react'
import stats from './stats.png'
import language from './language.png'
function Statistics() {
  return (
    <>
    <div className="statistics">
      <h1>Git Statistic's</h1>
      <div className="stats">
      <img src={stats} alt='stats'/>
      </div>
      <div className="lan">
      <div className='section'>
        
          <img src="https://github-readme-stats.vercel.app/api?username=jitendra-sudo&show_icons=true&theme=radical" alt='language'/>
      </div>
      <div className='section mid'>
         
          <img src='https://github-readme-streak-stats.herokuapp.com/?user=jitendra-sudo&theme=radical' alt='language'/>
      </div>
      <div className='section'>
         <p></p>
          <img src= 'https://github-readme-stats.vercel.app/api/top-langs/?username=jitendra-sudo&layout=compact&theme=radical' alt='language'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Statistics




