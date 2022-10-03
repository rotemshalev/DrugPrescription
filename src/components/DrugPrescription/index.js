import React, { useState } from "react"
import Search from "./Search"
import Drugs from "./Drugs"
import Errors from "./Errors"
import { parseResponse } from "./helpers"
import { DRUGS_URL } from "../../config/consts"
import "./index.css"

const DrugPrescription = () => {
  const [drugs, setDrugs] = useState([])
  const [selectedDrugs, setSelectedDrugs] = useState([])

  const onSearchResponse = data => {
    const _drugs = parseResponse(data, selectedDrugs)
    setDrugs(_drugs)
  }

  const addDrug = name => {
    const drug = drugs.find(d => d.title === name)
    setSelectedDrugs(selectedDrugs.concat(drug))
    setDrugs([])
  }

  const deleteDrug = name => setSelectedDrugs(selectedDrugs.filter(d => d.title !== name))

  return (
    <div className="drug-prescription">
      <Search
        placeholder="Search Available Drugs"
        results={drugs}
        onResponse={onSearchResponse}
        onAdd={addDrug}
        url={DRUGS_URL}
      />
      <Drugs selectedDrugs={selectedDrugs} onDelete={deleteDrug} />
      {selectedDrugs.length > 0 && <Errors selectedDrugs={selectedDrugs}/>}
    </div>
  )
}

export default DrugPrescription
