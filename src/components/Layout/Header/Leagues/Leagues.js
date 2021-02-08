import { useQuery } from '@apollo/client';
import { Select, Space } from 'antd';
import GetLeagues from '../../../../graphql/Queries/Leagues'
import React, { useContext, useState, useEffect } from "react"
import { Context, updateLeagueContext } from "../../../../context/Context"

const Leagues = () => {
    const [id, setId] = useState(null);
    const { league, setContext } = useContext(Context);
    const { loading, error, data } = useQuery(GetLeagues, {
        onCompleted: (data) => setId(data.Leagues[0].id)
    });

    const handleChange = event => {
        setId(event)
    }
    
    useEffect(() => {
        if (league != id) {
            setContext(updateLeagueContext(id))
        }
    }, [id, league, setContext])

    if (loading || id == null) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Space>
            <Select defaultValue={id} onChange={handleChange} defaultActiveFirstOption={true} className="SelectLeague">
                {
                    data.Leagues.map(({id, name}) => (
                        <Select.Option value={id}>{name}</Select.Option>
                    ))
                }
            </Select>
        </Space>
    );
  }

  export default Leagues