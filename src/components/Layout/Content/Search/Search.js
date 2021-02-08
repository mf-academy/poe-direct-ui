import { Select } from 'antd';
import { Context } from '../../../../context/Context';
import React, { useContext, useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'

const search = () => {
    const [variables, setVariables] = useState(null)
    const [leagueId, setLeagueId] = useState(null)
    const [categoryId, setCategoryId] = useState(null)
    const { league, category, setContext } = useContext(Context)
    const { loading, error, data } = useQuery(GetTrades, {
        variables: variables
    });

    const generateFilter = (cat, lea) => {
        return {
          filter: {
            service: {
              category: {
                id: cat
              }
            },
            AND: {
              league: {
                id: lea
              }
            }
          }
        }
      }

    useEffect(() => {
      if (league != leagueId) {
        setLeagueId(league)
      }
  
      if (category != categoryId) {
        setCategoryId(category)
      }
    }, [league, category])
  
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      if (leagueId == null) return <p>Loading...</p>;
      if (categoryId == null) return <p>Loading...</p>;
    
      console.log(data)
      
      return (
        <Select
            showSearch
            className="SearchSelect"
        >
            {data.Trades.map(trade => {
                return <Select.Option key={trade.id} value={trade.id}>{trade.service.name}</Select.Option>
            })}

        </Select>
      );
    }
  
    export default search