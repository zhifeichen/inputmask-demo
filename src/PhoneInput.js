import React, { Component } from 'react';
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
        inputmask({ regex: '(0([1-2][0-9])|([3-9][0-9]{2}) [0-9]{4} [0-9]{3,4})|(1[0-9]{2} [0-9]{4} [0-9]{4})'}).mask(this.input);
    }
    saveRef = ref => this.input = ref;
    onChange = () => {
        console.log(this.input.value);
    };
    render() {
        return (
            <input ref={this.saveRef} onChange={this.onChange} />
        );
    }
}

export default PhoneInput;
