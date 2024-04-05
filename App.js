import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //CREATE THE LIST TO DO
  const styles = {
    listStyle :'none',
  }
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const handleSubmit = () =>{
    setJobs(prev =>{ 
      const newJob = [...prev, job]
      
      // SAVE IN LOCALSTORAGE : only save string so should stringify js to json]
      const jsonJobs = JSON.stringify(newJob)
      localStorage.setItem('jobs', jsonJobs)
      return newJob
    })
    setJob('')
  }
  
  return(
    <div>
      <input 
        value = {job} 
        onChange={e => setJob(e.target.value)}/>
      <button onClick={handleSubmit}>ADD</button>
      <ul style={styles}>
        {jobs.map((job, index) => (
        <li key={index}> {job}</li>
        ))}
      </ul>
    </div>
  )
}
  
export default App;











// const gifts =[
//   'CPU i9',
//   'RAM 32B RGB',
//   'RGB Keyboard',
// ]
//  {
//   const [gifts, setGift] = useState()
//   const randomGift = () => {
//   const index = Math.floor(gifts.length)
//     setGift(gifts[index]);
//   }
//     return (  
//     <div>
//       <h1>{ gifts || 'not have gifts else' }</h1>
//       <button onClick = {randomGift}>get gift</button>
//     </div>
//     )
//  }
// export default App;


//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reactjs with Krez!
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
