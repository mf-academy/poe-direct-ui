import { useQuery } from '@apollo/client';
import { Select } from 'antd';
import GetLeagues from '../../../../graphql/Queries/Leagues'
import React from "react"

function handleChange(value) {
    console.log(`selected ${value}`);
}

const Leagues = () => {
    const { loading, error, data } = useQuery(GetLeagues);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Select defaultValue={data.leagues[0].name}style={{ width: 120 }} onChange={handleChange}>
            {
                data.leagues.map(({_id, name}) => (
                    <Option value={name}>{name}</Option>
                ))
            }
        </Select>
    );
  }

  export default Leagues