import React, { useState } from "react";
import MyList from "./MyList";

function App() {
  const [mylist, setmylist] = useState("");
  const [listOfItems, setlistOfItems] = useState([]);
  function AllItems(e) {
    setmylist(e.target.value);
  }
  function putItem() {
    setlistOfItems((preVal) => {
      return [...preVal, mylist];
    });
    setmylist("");
  }
  function deleteItem(id) {
    console.log("deleted" + id);
    setlistOfItems((preVal) => {
      return preVal.filter((Val, index) => {
        return id !== index;
      });
    });
  }
  return (
    <>
      <div className="main">
        <h1> My ToDo Lists</h1>
        <input
          type="text"
          placeholder="Add item to list"
          onChange={AllItems}
          value={mylist}
        />
        <button onClick={putItem}>+</button>
        <ul>
          {listOfItems.map((value, id) => {
            return <MyList key={id} id={id} text={value} select={deleteItem} />;
          })}
        </ul>
      </div>
    </>
  );
}
export default App;
