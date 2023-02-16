import React, {useState, useEffect} from 'react'

export default function Progressbar() {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
		setIsRunning(true)
	},[filled, isRunning])
  return (
	<>
	<span className="progressPercent">{ filled }%</span>
	  <div>
	  
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#A55D35",
				  transition:"width 0.5s"
			  }}></div>
			  
		  </div>
		  
		  {/**<button className="btn" onClick={() => {setIsRunning(true)}}>Run</button> */}
	</div>
	</>
  )
}
