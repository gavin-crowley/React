import React from 'react';
import './App.css';

let name: string;
// let name: any;
// let name: unknown; // better than any
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// function printName(name: string) {
//   console.log(name)
// }

let printName: (name: string) => void; // void returns undefined
// let printName: (name: string) => never; // nothing returned

// printName("Ia")

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Saoirse",
// }

// let lotsOfPeople: Person[];


// instead of type can use interface
// type Person = {
//   name: string;
//   age?: number;
// }

interface Person {
  name: string;
  age?: number;
}

// --------------
type X = {
  a: string;
  b: number;
}

type Y = X & {
  c: string;
  d: number;
}

// let y: Y = {
//   c: "abc",
//   d: 42,
//   a: "def",
//   b: 45
// }

// can also use interface

// interface Guy {
//   profession: string;
// }

interface Guy extends Person {
  profession: string;
}

// let gavin: Guy = {
//   profession: "Programmer",
//   name: "Crowley",
//   age: 43
// }

// ------------------

// can also

// type X = Person &{
//   a: string;
//   b: number;
// }


// ------------------

// also

interface Person extends X {
  name: string;
  age?: number;
} 


function App() {
  return (
    <div className="App">
      Hey
    </div>
  );
}

export default App;



// ------------------------------------

// const [todo, setTodo] = useState<string>("")
// const [todo, setTodo] = useState<string | number>("")
// const [todo, setTodo] = useState<string[]>("")