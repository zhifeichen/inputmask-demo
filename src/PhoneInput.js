import React, { Component } from 'react';
import { Input } from 'antd';
import inputmask from 'inputmask';
import PropTypes from 'prop-types';

class PhoneInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
        };
    }
    componentDidMount() {
        this.input.value = this.state.value;
        inputmask({
            greedy: false,
            clearIncomplete: true,
            regex: '(0([1-2][0-9])|([3-9][0-9]{2}) [0-9]{4} [0-9]{3,4})|(1[0-9]{2} [0-9]{4} [0-9]{4})',
        }).mask(this.input);
    }
    saveRef = ref => {
        this.input = ref ? ref.input : null;
    }
    onChange = () => {
        const { onChange } = this.props;
        console.log(this.input.value);
        if(onChange && this.input && this.input.inputmask && this.input.inputmask.isComplete()){
            onChange(this.input.value);
        }
    };
    render() {
        return (
            <Input ref={this.saveRef} onChange={this.onChange} />
        );
    }
}

PhoneInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default PhoneInput;
