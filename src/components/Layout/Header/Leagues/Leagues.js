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

        console.log(data)

    // Configure our context the first time a page loads just in case.
    if (context == null) {
        setContext(data.Leagues[0].id)
    }

    return (
        <Select defaultValue={data.Leagues[0].name}style={{ width: 120 }} onChange={handleChange} defaultActiveFirstOption={true}>
            {
                data.Leagues.map(({id, name}) => (
                    <Select.Option value={id}>{name}</Select.Option>
                ))
            }
        </Select>
    );
  }

  export default Leagues