import { Select } from 'antd';
import React from "react"
import GetCurrencies from '../../../../../../graphql/Queries/Currencies'
import { useQuery } from '@apollo/client';

const selectcurrency = (props) => {
    const { loading, error, data } = useQuery(GetCurrencies);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <Select
        placeholder="Select your currency below"
        allowClear
        onChange={props.onChange}
      >
        {data.Currencies.map(currency => {
            return <Select.Option key={currency.id} value={currency.id}>{currency.name}</Select.Option>
        })}
      </Select>
    );
  }

export default selectcurrency