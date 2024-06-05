
import './App.css'
import { people } from './Components/Challenge1ids.jsx';
import { getImageUrl } from './Components/Challengeothers.jsx';
import { recipes } from './Components/Challenge2.jsx';
function App() {

  const chemists = people.filter(person =>
    person.profession === 'chemist'
  )
  const listItems = chemists.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )
  const others = people.filter(person =>
    person.profession !== 'chemist'
  )
  const listItem = others.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )
  
  return (
    <>
     <div className='QNO1'>
     <h1>Scientists</h1>
      <h1>Chemists</h1>
      <ul>{listItems}</ul>
     <h1> Everyone else</h1>
      <ul>{listItem}</ul>
      </div>

      <hr />

      <div>
        <h1>Question no 02</h1>
      <h1>Recipes</h1>
      {recipes.map((recipe) =>{ 
       return (
       <div key={recipe.id}>
      <h2>Name: {recipe.name}</h2>
         <ul>
           {recipe.ingredients.map((ingredient) =>
         <li key = {ingredient}>
             {ingredient}
         </li>
                    
         )}
         </ul>
           </div>
      );
      })}
    </div>
    </>
  )
}

export default App
