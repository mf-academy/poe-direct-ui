import { useQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'

import React, { useContext, useEffect, useState } from "react"
import { Table, Tag, Space, Button, Badge } from 'antd';
import { Context } from '../../../../context/Context';
import { CaretUpOutlined }from '@ant-design/icons';

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
        title: 'Actions',
        dataIndex: 'user',
        render: (user, row) => pmButton(user, row)
    },
    {
      title: 'Trust',
      dataIndex: 'user',
      render: user => trustLevels(user)
    },
  ];

const trustLevels = (user) => {
  return (
    <Space>
      <Badge showZero count={user.reports.length} />
      <Badge showZero style={{ backgroundColor: '#52c41a' }}
 count={user.vouches.length} />
    </Space>
  )
}

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
      <Button type="default" onClick={(e) => copyToClipboard(e, user, row, setButtonValue)}>{buttonValue}</Button>
    )
}

const statusBadge = (user) => {
  console.log(user)
  if(user.user.status == true) {
    return (
      <Tag color="#52c41a">
        Avaliable
      </Tag>
    )
  } else {
    return ( <Tag color="#ff4d4f" style="width:100%">
      Sold
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

  const isLoading = (loading, league, cat, variables) => {
    console.log(variables)
    console.log(loading, league, category)
    if (loading) return true;
    if (league == null) return true;
    if (cat == null) return true;
  }

  useEffect(() => {
    if (league != leagueId && categoryId == categoryId) {
      setLeagueId(league)
      setVariables(generateFilter(categoryId, league))
    }

    if (category != categoryId && league == leagueId) {
      setCategoryId(category)
      setVariables(generateFilter(category, leagueId))
    }

    if (category != categoryId && league != leagueId) {
      setCategoryId(category)
      setLeagueId(league)
      setVariables(generateFilter(category, league))  
    }
  }, [league, category])

    if (error) return <p>Error :(</p>;

    return (
      <Table
          dataSource={data ? data.Trades : []}
          columns={columns}
          className='content-table'
          loading={isLoading(loading, leagueId, categoryId, variables)}
          rowClassName={(record, index) => index % 2 === 0 ? 'table-row-light' :  'table-row-dark'}
      />
    );
  }

  export default table