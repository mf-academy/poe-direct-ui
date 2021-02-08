import { useQuery } from '@apollo/client';
import GetServices from '../../../../../../graphql/Queries/Services'
import { Select } from 'antd';
import React, {useState, useContext, useEffect } from "react"
import { Context } from "../../../../../../context/Context"


const selectservice = (props) => {
    const [variables, setVariables] = useState(null)
    const [categoryId, setCategoryId] = useState(null)
    const { category, setContext } = useContext(Context)
    const { loading, error, data } = useQuery(GetServices, {
      variables: variables
    });

    const generateFilter = (cat) => {
      return {
        filter: {
          category: {
              id: cat
            }
          },
        }
    }
    
    useEffect(() => {
      if (category != categoryId) {
        setCategoryId(category)
        setVariables(generateFilter(category))
      }
    }, [category])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <Select
        placeholder="Select your service below"
        allowClear
        onChange={props.onChange}
      >
        {data.Services.map(service => {
            return <Select.Option key={service.id} value={service.id}>{service.name}</Select.Option>
        })}
      </Select>
    );
  }

export default selectservice