import { useQuery, useLazyQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'
import GetService from '../../../../graphql/Queries/Service'
import GetLeague from '../../../../graphql/Queries/League'

import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Service',
      dataIndex: 'serviceid',
      key: 'serviceid',
      render: text => serviceName({text})
    },
    {
      title: 'League',
      dataIndex: 'leagueid',
      key: 'leagueid',
      render: text => leagueName({text})
    },
    {
      title: 'User',
      dataIndex: 'userid',
      key: 'userid',
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
        dataIndex: 'status',
        key: 'status',
    },
  ];

const serviceName = (id) => {
  const { loading, error, data } = useQuery(GetService, {
    variables: { id: id.text }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <span>{data.service.name}</span>
  )
}

const leagueName = (id) => {
  const { loading, error, data } = useQuery(GetLeague, {
    variables: { id: id.text }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <span>{data.league.name}</span>
  )
}

const table = () => {
    const { loading, error, data } = useQuery(GetTrades);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <Table
          dataSource={data.trades}
          columns={columns}
      />
    );
  }

  export default table