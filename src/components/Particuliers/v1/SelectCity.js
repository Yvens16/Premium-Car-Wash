import React, { useState } from "react";
import Select from "react-select";
import Subtitle from '../../sections/Subtitle';
import Button from '../../buttons/Button';
import { cities } from '../cities';

require('./selectCity.scss')
export default function SelectCity() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <main className="city_selection">
      <Subtitle title='Cherchez une ville ou un Code postal'/>
      <Subtitle title="Pour vérifier que vous êtes bien dans la zone d'intervention"/>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={cities}
      />
      {selectedOption !== null ? <Button external={true} text='Choisir mon forfait' linkTo='https://tripetto.app/run/83MCTHCE4D'/> : null}
    </main>
  );
}