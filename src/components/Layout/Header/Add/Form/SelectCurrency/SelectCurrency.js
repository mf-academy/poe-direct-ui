import { Select } from 'antd';
import React, {useState} from "react"

const selectcurrency = (props) => {
    const currencies = [
        "exalt",
        "chaos"
    ]

    return (
      <Select
        placeholder="Select your currency below"
        allowClear
        onChange={props.onChange}
      >
        {currencies.map(currency => {
            return <Select.Option key={currency} value={currency}>{currency}</Select.Option>
        })}
      </Select>
    );
  }

export default selectcurrency