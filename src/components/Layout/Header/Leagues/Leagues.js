import { useQuery } from '@apollo/client';
import { Select } from 'antd';
import GetLeagues from '../../../../graphql/Queries/Leagues'
import React, { useContext, useState, useEffect } from "react"
import { Context, updateLeagueContext } from "../../../../context/Context"

const Leagues = () => {
    const [id, setId] = useState(null);
    const { league, setContext } = useContext(Context);
    const { loading, error, data } = useQuery(GetLeagues);

    const handleChange = e => {
        console.log(e)
        setId(e)
    }
    
    useEffect(() => {
        if (league != id) {
            setContext(updateLeagueContext(id))
        }
    }, [id, league, setContext])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Select style={{ width: 120 }} onChange={handleChange} defaultActiveFirstOption={true}>
            {
                data.Leagues.map(({id, name}) => (
                    <Select.Option value={id}>{name}</Select.Option>
                ))
            }
        </Select>
    );
  }

  export default Leagues