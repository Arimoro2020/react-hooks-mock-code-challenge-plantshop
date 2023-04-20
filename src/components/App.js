import React,{useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const baseUrl ='http://localhost:6001/';
const plantsUrl = baseUrl + 'plants'


function App() {

  const [plants, setPlants] = useState([]);
  // const [newAddPlant, setNewAddPlant] = useState("")
  const [formData, setFormData] = useState( {name: '', image: '', price: '' });
  const [isSearched, setIsSearched] = useState('')

  function handleOnChangeSearch(event) {
    const newSearch = event.target.value
    setIsSearched(isSearched => newSearch)
    const searchedPlant = plants.filter(plant =>plant.name.toLowerCase().includes(newSearch.toLowerCase()))
    setPlants(plants => [...searchedPlant])
    }
  


  function handleFormChange(event) {
   const name = event.target.name;
   let value = event.target.value;
    setFormData({...formData,
                  [name]: value} )
  }



  function handleOnSubmit(event) {
    event.preventDefault();

    const formPostRequest = {
      method: 'POST',
       headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
    fetch(plantsUrl, formPostRequest)
      .then(response => response.json())
      .then(setPlants(plants=>[...plants, formData]));
  }


    
  const plantsRequest = () => {fetch(plantsUrl)
                              .then(response => response.json())
                              .then(setPlants)
  }
 useEffect(plantsRequest, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleOnSubmit={handleOnSubmit} 
      handleFormChange={handleFormChange} formData={formData} handleOnChangeSearch={handleOnChangeSearch} isSearched={isSearched} />
    </div>
  );
}

export default App;
