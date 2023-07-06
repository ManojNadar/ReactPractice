import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInputs = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    // console.log(name, val);

    // setData({ ...data, [name]: val, email: "admin@gmail.com" });
    setData({ ...data, [name]: val });
  };

  const sumbitRegister = (e) => {
    e.preventDefault();

    const newRecords = { ...data, id: new Date().getTime().toString() };

    console.log(newRecords);
    setRecords([...records, newRecords]);
    // console.log(newRecords);
    let storage = JSON.parse(localStorage.getItem("registerUser")) || [];

    let storageObj = {
      ...newRecords,
    };

    storage.push(storageObj);

    localStorage.setItem("registerUser", JSON.stringify(storage));

    setData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={sumbitRegister}>
        <h2>Register</h2>
        <div>
          <label htmlFor="username">Name</label> <br />
          <input
            type="text"
            placeholder="enter your name"
            name="username"
            value={data.username}
            onChange={handleInputs}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">email</label> <br />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={data.email}
            onChange={handleInputs}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">password</label> <br />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={data.password}
            onChange={handleInputs}
            autoComplete="off"
          />
        </div>

        <div>
          <input type="submit" value="Regsiter" />
        </div>
      </form>

      {records.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <h1>{item.username}</h1>
          <h1>{item.email}</h1>
          <h1>{item.password}</h1>
        </div>
      ))}
    </div>
  );
};

export default Form;
