import { useQuery, useMutation} from '@apollo/client';
import { Select } from 'antd';
import Form from './Form/Form';
import GetTrades from '../../../../graphql/Queries/Trades'
import PutTrade from '../../../../graphql/Mutations/PutTrade'
import React, {useState, useContext } from "react"
import { Button, Modal} from 'antd';
import { Context } from "../../../../context/Context"

const Add = () => {
    const [context, setContext] = useContext(Context);
    const [tradeInput, setTradeInput] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [putTrade] = useMutation(PutTrade);
    
    const updateCache = (cache, {data}) => {
        // Fetch the todos from the cache
        const existingTrades = cache.readQuery({
            query: GetTrades
        });

        console.log(data)

        // Add the new todo to the cache
        const newTrade = data.putTrade;

        cache.writeQuery({
            query: GetTrades,
            data: {trades: [...existingTrades.trades, newTrade]}
        });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // TODO - THIS IS A HACK!
        let copyTradeInput = tradeInput
        copyTradeInput.leagueid = context
        copyTradeInput.userid = "549bee63-b753-4586-b581-87e83669ce6a"

        putTrade({
            variables: { ...copyTradeInput },
            update: updateCache
        }
)

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    return (
        <>
        <Button type="primary" onClick={showModal}>
            Add Listing
        </Button>
        <Modal title="Add New Listing" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form setTrade={setTradeInput} trade={tradeInput}/>
        </Modal>
        </>
    );
  }

  export default Add