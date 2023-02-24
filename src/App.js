import logo from './logo.svg';
import './App.css';


const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name : {props.lastname}</h2>
      <h3>Age : {props.age}</h3>
    </>
  )
}
function App() {

  

  return (
    <div className="App">
      <Person name={'john'} LastName = {'morbius'} age = {25}/>
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

export default App;
