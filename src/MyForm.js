import React, { Component } from 'react';
import { Form, Button } from 'antd';

import PhoneInput from './PhoneInput';
import IpInput from './IpInput';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  console.log(fieldsError);
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class MyForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const phoneError = isFieldTouched('phone') && getFieldError('phone');
    const ipError = isFieldTouched('ip') && getFieldError('ip');
    const formLayout = {
      wrapperCol: { span: 14 },
      labelCol: { span: 6 },
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={phoneError ? 'error' : ''}
          // help={phoneError || ''}
          hasFeedback
          label="Phone"
          {...formLayout}
        >
          {getFieldDecorator('phone', {
            rules: [{
              required: true,
              message: 'Please input phone No.!',
              // validator: (rule, value, callback) => {
              //   console.log(value);
              //   callback();
              // }
            }, {
              validator: (rule, value, callback) => {
                console.log(value);
                callback();
              }
            }],
            initialValue: '13712341234',
          })(
            <PhoneInput />
          )}
        </FormItem>
        <FormItem
          validateStatus={ipError ? 'error' : ''}
          help={ipError || ''}
          hasFeedback
          label="IP"
          {...formLayout}
        >
          {getFieldDecorator('ip', {
            rules: [{ required: true, message: 'Please input ip!' }],
            initialValue: '127.0.0.1',
          })(
            <IpInput />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(MyForm);
