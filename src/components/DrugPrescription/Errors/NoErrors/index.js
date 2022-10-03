import React from "react"
import { CheckCircleOutlined } from "@ant-design/icons"
import "./index.css"

const NoErrors = () => (
  <div className="no-errors">
    <CheckCircleOutlined />
    Selected Drugs Are Safe To Use.
  </div>
)

export default NoErrors
