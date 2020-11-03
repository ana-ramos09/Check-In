import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import AddList from "./Components/Add/AddList.js";
import List from "./Components/List/List.js";
// import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [listName, setListName] = useState("Parques");
  const [listLocation, setListlocation] = useState("São Paulo");

  return (
    <div className="App">
      <Header />
      <AddList
        listName={listName}
        setListName={setListName}
        listLocation={listLocation}
        setListlocation={setListlocation}
      />
      <div className="main-container">
        <div className="lists-container">
          <List
            listName={listName}
            setListName={setListName}
            listLocation={listLocation}
            setListlocation={setListlocation}
          />
        </div>
        <div id="map" className="map-container"></div>
      </div>
    </div>
  );
}

export default App;
