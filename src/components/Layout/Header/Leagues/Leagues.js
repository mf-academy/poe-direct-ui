import { useQuery } from '@apollo/client';
import { Select, Space, Spin, Row } from 'antd';
import GetLeagues from '../../../../graphql/Queries/Leagues'
import React, { useContext, useState, useEffect } from "react"
import { Context, updateLeagueContext } from "../../../../context/Context"

const generateSelectItems = (id, data, loading, error) => {
    if (error) return <p>Error :(</p>;
    if(data == null) return <></>
    
    return data.Leagues.map(({id, name}) => (
        <Select.Option value={id}>{name}</Select.Option>
    ))
}

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
            setId(id)
        }
    }, [id, league, setContext])

    return (
        <Space>
            <Select value={id} onChange={handleChange} className="SelectLeague"defaultActiveFirstOption={true} loading={loading} style={{ width: 200 }}>
                { generateSelectItems(id, data, loading, error) }
            </Select>
        </Space>
    );
  }

  export default Leagues