import React from "react"
import Drug from "./Drug"
import { Empty } from "antd"
import "./index.css"

const Drugs = ({ selectedDrugs, onDelete }) => {
  return (
    <div className="drugs">
      {
        !selectedDrugs.length
          ? <Empty description="No drugs have been selected" />
          : selectedDrugs.map(d => <Drug key={d.title} drug={d} onDelete={onDelete} />)
      }
    </div>
  )
}

export default Drugs
