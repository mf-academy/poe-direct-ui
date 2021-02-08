import { useQuery, useMutation} from '@apollo/client';
import { Select } from 'antd';
import Form from './Form/Form';
import GetTrades from '../../../../graphql/Queries/Trades';
import PutTrade from '../../../../graphql/Mutations/PutTrade';
import AddTradeLeague from '../../../../graphql/Mutations/AddTradeLeague';
import AddTradeService from '../../../../graphql/Mutations/AddTradeService';
import AddTradeUser from '../../../../graphql/Mutations/AddTradeUser';
import React, {useState, useContext } from "react"
import { Button, Modal} from 'antd';
import { Context } from "../../../../context/Context"

// update: updateCache

const Add = () => {
    const [context, setContext] = useContext(Context);
    const [tradeInput, setTradeInput] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [putTrade] = useMutation(PutTrade);
    const [addTradeLeague] = useMutation(AddTradeLeague);
    const [addTradeService] = useMutation(AddTradeService);
    const [addTradeUser] = useMutation(AddTradeUser);

    const updateCache = (cache, {data}) => {        
        // Fetch the todos from the cache
        const existingTrades = cache.readQuery({
            query: GetTrades
        });

        // Add the new todo to the cache
        const newTrade = data.AddTradeService.from;

        console.log(newTrade)
        console.log(existingTrades)

        cache.writeQuery({
            query: GetTrades,
            data: {trades: [...existingTrades.Trades, newTrade]}
        });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        // TODO - THIS IS A HACK!
        let copyTradeInput = tradeInput
        copyTradeInput.status = true

        const tradeResponse = await putTrade({
            variables: { ...copyTradeInput },
        })

        addTradeLeague({
            variables: { from: { id: tradeResponse.data.CreateTrade.id }, to: { id: context } },
        })

        // TODO: User real user id from session.
        addTradeUser({
            variables: { from: { id: tradeResponse.data.CreateTrade.id }, to: { id: "a68b9367-e214-44eb-9a5f-451463899ba2" } },
        })

        addTradeService({
            variables: { from: { id: tradeResponse.data.CreateTrade.id }, to: { id:  copyTradeInput.serviceid }},
            update: updateCache
        })

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