import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks =['Rubel', 'Bapparaz', 'koober', 'Bappy', 'Shuvo','Omar Sani'];

  const cinemas = [
    { nayok: 'koober', nayika: 'kopila'},
    { nayok: 'Rubel', nayika: 'Moushumi'},
    { nayok: 'Razzak', nayika: 'Sabana'},
    { nayok: 'Joshim', nayika: 'Suchorita'},
  ]


  return (
    <div className="App">
     

<ul>
  {
    nayoks.map(nayok => <li>{nayok}</li>)
  }
</ul>

{/* <Cinema nayok="J Bond" nayika="cat w"></Cinema> */}

{
  cinemas.map( cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
}


    </div>
  );
}

/* 
<Friend phone="01897" address="noakhali"></Friend>
    <Friend phone="08765" address="barisal"></Friend>
    <Friend phone="01367" address="Rajshahi"></Friend>


 */

function Person(props){
  console.log(props);
  
  return (
    <div className="person">
    <h1>Name: {props.name}</h1>
    <h4>Hero of: {props.nayika}</h4>

  </div>
  );
}

function Cinema(props){
 return (
   <div className="person">
     <h2>Nayok: {props.nayok}</h2>
     <h4>Nayika: {props.nayika}</h4>
   </div>
 )
}


 function Friend(props){
  
   return (
     <div className="person">
       <h3>Phone:{props.phone}</h3>
       
       <h5>Address: {props.address}</h5>
     </div>
   );
 }

export default App;

/*
<Person name="Rubel" nayika="Moushumi"></Person>

<Person name="Bapparaj" nayika="Cheka"></Person>

<Person name="koober" nayika="kopila"></Person>
 */


/*
<Person name={nayoks[0]} nayika="Moushumi"></Person>

<Person name={nayoks[1]} nayika="Cheka"></Person>

<Person name={nayoks[2]}nayika="kopila"></Person>
     */