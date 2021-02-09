import { Select } from 'antd';
import { Context } from '../../../../context/Context';
import React, { useContext, useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'

const isLoading = (loading, league, cat) => {
  if (loading) return true;
  if (league == null) return true;
  if (cat == null) return true;
}

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

      if (error) return <p>Error :(</p>;
    
      console.log(data)
      
      return (
        <Select
            showSearch
            className="SearchSelect"
            loading={isLoading(loading, leagueId, categoryId)}
        >
            {data?.Trades.map(trade => {
                return <Select.Option key={trade.id} value={trade.id}>{trade.service.name}</Select.Option>
            })}

        </Select>
      );
    }
  
    export default search