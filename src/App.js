// import logo from './logo.svg';
import './App.css';

const food = [
  "Bananas",
  "Bacon",
  "Pizza",
  "Mango",
  "Nachos",
  "KFC",
  "Sushi",
  "Tinned spaghetti"
]

function App() {
  return (
    <div className="App">
      <h1>Hello Word!</h1>

      <ul>
        {
          food.map(individualFoodItem => {
            return <li> {individualFoodItem} </li>
          })
        }
      </ul>

    </div>
  );
}

export default App;
