import { useQuery, useLazyQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'
import GetService from '../../../../graphql/Queries/Service'
import GetLeague from '../../../../graphql/Queries/League'
import GetUser from '../../../../graphql/Queries/User'

import React, { useContext, useEffect, useState } from "react"
import { Table, Tag, Space, Button } from 'antd';
import { Context } from '../../../../context/Context';

const columns = [
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
      render: service => service.name
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: user => user.name
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency',
        render: currency => currencyWithIcon(currency)
    },
    {
        title: 'Status',
        dataIndex: 'user',
        key: 'status',
        render: user => statusBadge({user})
    },
    {
        title: 'PM',
        dataIndex: 'user',
        render: (user, row) => pmButton(user, row)
    }
  ];

const currencyWithIcon = (currency) => {

  return (
    <>
      <Space size="small">
      <img src={currency.icon} width="50%" height="auto" />
      <span>{currency.name}</span>
      </Space>
    </>
  )
}

const copyToClipboard = (e, user, row, setButtonValue) => {
  e.preventDefault();
  navigator.clipboard.writeText(`@${user.character} I would like to buy your ${row.service.name} for ${row.price} ${row.currency.name}`)
  setButtonValue("Copied!")
}

const pmButton = (user, row) => {
    const [buttonValue, setButtonValue] = useState("Whisper")

    return (
      <Button type="primary" onClick={(e) => copyToClipboard(e, user, row, setButtonValue)}>{buttonValue}</Button>
    )
}

const statusBadge = (user) => {
  console.log(user)
  if(user.user.status == true) {
    return (
      <Tag color={"green"}>
        Online
      </Tag>
    )
  } else {
    return ( <Tag color={"red"}>
      Offline
    </Tag> )
  }
}

const table = () => {
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
      setVariables(generateFilter(categoryId, league))
    }

    if (category != categoryId) {
      setCategoryId(category)
      setVariables(generateFilter(category, leagueId))
    }
  }, [league, category])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (leagueId == null) return <p>Loading...</p>;
    if (categoryId == null) return <p>Loading...</p>;

    console.log(data)
      
    return (
      <Table
          dataSource={data.Trades}
          columns={columns}
          className='content-table'
          rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
      />
    );
  }

  export default table