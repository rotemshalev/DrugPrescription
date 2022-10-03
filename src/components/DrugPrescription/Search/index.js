import React, { useState } from "react"
import axios from "axios"
import { Button, Select } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import debounce from "lodash/debounce"
import "./index.css"

const Search = ({ placeholder, results, onResponse, onAdd, url }) => {
  const [selection, setSelection] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchResults = async (text = "") => {
    const fetchUrl = url(text)
    const res = await axios.get(fetchUrl)
    onResponse(res.data)
    setLoading(false)
  }

  const debouncedFetch = debounce(fetchResults, 200)

  const onAddClick = () => {
    onAdd(selection)
    setSelection(null)
  }

  return (
    <div className="search-container">
      {loading && <LoadingOutlined />}
      <Select
        value={selection}
        className="search"
        showSearch={true}
        placeholder={placeholder}
        onSearch={debouncedFetch}
        onChange={setSelection}
      >
        {results.map(result => <Select.Option key={result.title}>{result.title}</Select.Option>)}
      </Select>
      <Button onClick={onAddClick} disabled={!selection}>Add</Button>
    </div>
  )
}

export default Search
