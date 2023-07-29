import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {

const [travel, setTravel] = useState(data);

const removePlace =(id)=>{
  let newTravel = travel.filter(travel => travel.id !==id);
  setTravel(newTravel)
}

const [showText, setShowText] = useState(false);

const showTextClick = (travelling) => {
  travelling.showMore = !travelling.showMore;
  setShowText(!showText)
}

  return (
  <div className="App">

    <h1>{travel.length} World’s best places to visit!</h1>

    {travel.map(travelling =>{
      const {id, name, image, description, source, showMore} = travelling;
    
      

      return(
        <div key={id}>
          <div className='middle'>
            <h2>{id} - {name}</h2>
          </div>
          <div className='middle'>
            <img src={image} width="400px" alt='beautiful place'/>
          </div>
          <div className='middle'>
            <p>Source: "{source}"</p>
          </div>
          <div className='middle'>
            <p>{showMore ? description : description.substring(0,50) + "..."} 
              <button onClick={()=>showTextClick(travelling)} className='btn'>{showMore ? "show less" : "show more"}</button>
            </p>
          </div>
          <div className='middle'>
            <button onClick={()=>removePlace(id)}>Already visited!</button>
          </div>
        </div>
      )
    })}

    <button onClick={()=> setTravel ([])}>DELETE ALL</button>
     
    </div>
  );
}

export default App;
