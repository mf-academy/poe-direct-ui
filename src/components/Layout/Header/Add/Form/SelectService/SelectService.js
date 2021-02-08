import { useQuery } from '@apollo/client';
import GetServices from '../../../../../../graphql/Queries/Services'
import { Select } from 'antd';
import React, {useState} from "react"


const selectservice = (props) => {
    const { loading, error, data } = useQuery(GetServices);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <Select
        placeholder="Select your service below"
        allowClear
        onChange={props.onChange}
      >
        {data.Services.map(service => {
            return <Select.Option key={service.id} value={service.id}>{service.name}</Select.Option>
        })}
      </Select>
    );
  }

export default selectservice