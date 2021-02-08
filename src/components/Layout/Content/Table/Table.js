import { useQuery, useLazyQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'
import GetService from '../../../../graphql/Queries/Service'
import GetLeague from '../../../../graphql/Queries/League'
import GetUser from '../../../../graphql/Queries/User'

import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
      render: service => service.name
    },
    {
      title: 'League',
      dataIndex: 'league',
      key: 'league',
      render: league => league.name
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
    },
    {
        title: 'Status',
        dataIndex: 'user',
        key: 'status',
        render: user => statusBadge({user})
      },
  ];

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
    const { loading, error, data } = useQuery(GetTrades);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data)
      
    return (
      <Table
          dataSource={data.Trades}
          columns={columns}
      />
    );
  }

  export default table