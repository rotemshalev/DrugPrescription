import React from "react"
import { Button, Tag, DatePicker } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { getDrugTitles } from "./helpers"
import "./index.css"

const Drug = ({ drug, onDelete }) => {
  const { name, type } = getDrugTitles(drug.title)

  return (
    <div className="drug">
      <div className="drug-title">
        {name}
        <Tag color="gray">{type}</Tag>
      </div>
      <DatePicker />
      <Button icon={<DeleteOutlined />} shape="circle" onClick={() => onDelete(drug.title)} />
    </div>
  )
}

export default Drug
