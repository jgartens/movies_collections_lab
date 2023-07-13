import { useState } from 'react'
import Collection from './Collection.jsx'
import "bootstrap/dist/css/bootstrap.min.css";


let movie1 = {
  title: 'Iron Man',
  description: 'Very nice',
  year: 2010,
  genre: 'action'
}


function App() {
  let myCollection1 = [
      {
        id: 1,
        title: 'Iron Man',
        description: 'Very nice',
        year: 2010,
        genre: 'action'
      },
      {
        id: 2,
        title: 'Barber',
        description: 'Ok then',
        year: 2023,
        genre: 'yes'
      }
    ]
  let myCollection2 = [
    {
      id: 3,
      title: 'Oppenheimer',
      description: 'out now ',
      year: 2049,
      genre: 'boring'
    },
    {
      id: 4,
      title: 'lotr',
      description: '3 movies',
      year: 3900,
      genre: 'sofun'
    }
  ]

  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Collection 1 </h1>
      <div className="row justify-center text-center">
          <Collection collection={myCollection1}/>
      </div> 
      <h1> Collection 2 </h1>
      <div className="row justify-center text-center">
          <Collection collection={myCollection2}/>
      </div> 
    </>
  )
}

export default App

