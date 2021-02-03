import { useQuery } from '@apollo/client';
import { Select } from 'antd';
import GetLeagues from '../../../../graphql/Queries/Leagues'
import React, { useContext } from "react"
import { Context } from "../../../../context/Context"

const Leagues = () => {
    const [context, setContext] = useContext(Context);
    const { loading, error, data } = useQuery(GetLeagues);
    
    const handleChange = (value) => {
        setContext(value)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // Configure our context the first time a page loads just in case.
    if (context == null) {
        setContext(data.leagues[0].id)
    }

    return (
        <Select defaultValue={data.leagues[0].name}style={{ width: 120 }} onChange={handleChange} defaultActiveFirstOption={true}>
            {
                data.leagues.map(({id, name}) => (
                    <Option value={id}>{name}</Option>
                ))
            }
        </Select>
    );
  }

  export default Leagues