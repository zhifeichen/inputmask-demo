import React, { Component } from 'react';
import inputmask from 'inputmask';
import PropTypes from 'prop-types';

class IpInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || '',
        };
    }
    componentWillReceiveProps(nextProps) {
        if('value' in nextProps) {
            this.setState({
                value: nextProps.value,
            });
        }
    }
    componentDidMount() {
        this.input.value = this.state.value;
        inputmask('ip', { greedy: false, clearIncomplete: true }).mask(this.input);
    }
    saveRef = (input) => {
        this.input = input;
    }
    onChange = () => {
        const { onChange } = this.props;
        // console.log(this.input.value);
        if(this.input.inputmask){
            console.log(this.input.inputmask.isComplete() ? true : false);
        }
        if(onChange) {
            onChange(this.input.value);
        }
    }
    render() {
        return (
            <input ref={this.saveRef} onChange={this.onChange} />
        );
    }
}

IpInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default IpInput;
