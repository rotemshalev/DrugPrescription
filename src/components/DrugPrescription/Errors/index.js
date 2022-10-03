import React, { useState, useEffect } from "react"
import axios from "axios"
import { Divider } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import Error from "./Error"
import NoErrors from "./NoErrors"
import uniqueId from "lodash/uniqueId"
import { getErrorsUrl, parseErrorsResponse } from './helpers'
import "./index.css"

const Errors = ({ selectedDrugs }) => {
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchErrors()
  }, [selectedDrugs])

  const fetchErrors = async () => {
    setLoading(true)
    const fetchUrl = getErrorsUrl(selectedDrugs)
    const res = await axios.get(fetchUrl)
    setLoading(false)
    const resWarnings = res.data.fullInteractionTypeGroup

    if (resWarnings) {
      const _errors = parseErrorsResponse(resWarnings)
      setErrors(_errors)
    }
    else {
      setErrors([])
    }
  }

  return (
    <React.Fragment>
      <Divider>Information</Divider>
      <div className="errors">
        {loading && <LoadingOutlined />}
        {!loading && errors.length > 0 && errors.map(e => <Error key={uniqueId()} error={e} />)}
        {!loading && errors.length === 0 && <NoErrors visible={true} />}
      </div>
    </React.Fragment>
  )
}

export default Errors
