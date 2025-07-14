import React, { useState } from "react";

const gifts = ["CPU i9", "GPU RTX 3090", "RAM 32GB"];

function Example1() {
  const [gift, setGift] = useState("Chua co phan thuong");

  const handleUpdate = () => {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    setGift(gifts[randomIndex]);
  };

  return (
    <React.Fragment>
      <h1>{gift}</h1>
      <button onClick={handleUpdate}>Lay phan thuong</button>
    </React.Fragment>
  );
}

function Example2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(name, email);
  };

  return (
    <React.Fragment>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <input onChange={(e) => setEmail(e.target.value)} value={email} />
      <button onClick={handleSubmit}>Register</button>
    </React.Fragment>
  );
}

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
    price: 100,
  },
  {
    id: 2,
    name: "JavaScript",
    price: 200,
  },
  {
    id: 3,
    name: "ReactJS",
    price: 300,
  },
];

function Example3() {
  const [checked, setChecked] = useState();

  const handleSubmit = () => {};

  return (
    <React.Fragment>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            onChange={() => setChecked(course.id)}
            type="radio"
            checked={course.id == checked}
          />
          <span>{course.name}</span>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </React.Fragment>
  );
}

function Example4() {
  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {
    console.log("Selected courses:", checked);
  };

  return (
    <React.Fragment>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            onChange={(e) => {
              e.target.checked
                ? setChecked([...checked, course.id])
                : setChecked(checked.filter((id) => id !== course.id));
            }}
            type="checkbox"
            checked={checked.includes(course.id)}
          />
          <span>{course.name}</span>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <Example4 />
    </div>
  );
}

export default App;
