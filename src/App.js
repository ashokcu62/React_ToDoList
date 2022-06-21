import React from "react";
import { useState } from "react";
import './App.css';
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" onChange={(e) => setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i className="fas fa-plus" onClick={() => {
          setToDos([...toDos, { id: Date.now(), text: toDo, state: false, del: false }])
        }}></i>
      </div>

      <div className="todos">

        {
          toDos.map((obj) => (
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" onClick={(e) => {
                  setToDos((toDos.filter((obj2) => {
                    if (obj2.id === obj.id) {
                      obj2.state = e.target.checked;
                      return obj2;
                    }
                    return obj2;
                  })))

                }} />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={(e) => {
                  setToDos((toDos.filter((obj3) => {
                    if (obj3.id === obj.id) {
                      console.log("clicked del")
                      obj3.del = true;
                      console.log(obj3)
                      return obj3;
                    }
                    return obj3;
                  })))
                }}  ></i>
              </div>
            </div>

          ))

        }
      </div>

      <div>
        {
          toDos.map((obj) => {
            if (obj.del) {

              return (
                <h1>{obj.text}</h1>
              )
            }
            return null;
          })
        }
      </div>


      <div>
        {
          toDos.map((obj) => {


            if (obj.state) {

              return (
                <h1>{obj.text}</h1>
              )
            }
            return null;

          }
          )
        }
      </div>

    </div>
  );
}

export default App;
