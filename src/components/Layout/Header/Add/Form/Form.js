import { Form, Input,InputNumber,  Button, Checkbox } from 'antd';
import SelectService from './SelectService/SelectService';
import SelectCurrency from './SelectCurrency/SelectCurrency';
import React, {useState} from "react"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const TradeForm = (props) => {
    const [form] = Form.useForm();

    const onCurrencyChange = (value) => {
        form.setFieldsValue({ currency: value });
    };

    const onServiceChange = (value) => {
        form.setFieldsValue({ service: value });
    };

    const updateParentStateOnChange = (change, _empty) => {
        let tradeCopy = props.trade
        const name = change[0].name
        const value = change[0].value
        tradeCopy[name] = value

        props.setTrade(tradeCopy)
    }

  return (
    <Form
      {...layout}
      name="basic"
      form={form}
      onFieldsChange={updateParentStateOnChange}
    >

      <Form.Item name="serviceid" label="Service" rules={[{ required: true }]}
       >
        <SelectService onChange={onServiceChange}/>
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input your price!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name="currency" label="Currency" rules={[{ required: true }]}
      >
        <SelectCurrency onChange={onCurrencyChange}/>
      </Form.Item>
    </Form>
  );
};

export default TradeForm;