import React from "react"
import { WarningFilled } from "@ant-design/icons"
import "./index.css"

const Error = ({ error }) => {
  return (
    <div className="error">
      <WarningFilled />
      {error}
    </div>
  )
}

export default Error
