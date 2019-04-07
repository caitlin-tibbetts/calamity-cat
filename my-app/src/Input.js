import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import './App.css';

export default class Input extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focused: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        locked: false,
        focused: false,
        value: '',
        error: '',
        label: '',
        onChange: () => '',
    };
    onChange = event => {
        const { id } = this.props;
        const value = event.target.value;
        this.setState({ value, error: '' });
        return this.props.onChange(id, value);
    }

    constructor(props) {
        super(props);
        this.state = {
            focused: (props.locked && props.focused) || false,
            value: props.value || '',
            error: props.error || '',
            label: props.label || 'Where to?',
        };
    }

    render() {
        const { focused, value, error, label } = this.state;
        const { id, type, locked } = this.props;
        const fieldClassName = `field ${(locked ? focused : focused || value) && 'focused'} ${locked && !focused && 'locked'}`;
        return (
            <div className="field">
                <input
                    id={id}
                    type="text"
                    value={value}
                    placeholder={label}
                    onChange={this.onChange}
                    onFocus={() => !locked && this.setState({ focused: true })}
                    onBlur={() => !locked && this.setState({ focused: false })}
                />
                <label htmlFor={id} className={error && 'error'}>
                    {error || label}
                </label>
            </div>
        );
    }
}

render(
    <Input
      id={1}
      label="Where to?"
      predicted="California"
      locked={false}
      active={false}
    />,
    document.getElementById("root")
  );