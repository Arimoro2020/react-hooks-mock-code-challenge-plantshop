import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleOnSubmit,formData, handleFormChange, handleOnChangeSearch, isSearched}) {


  return (
    <main>
      <NewPlantForm handleOnSubmit={handleOnSubmit} formData={formData} handleFormChange={handleFormChange}/>
      <Search handleOnChangeSearch={handleOnChangeSearch} isSearched={isSearched}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
