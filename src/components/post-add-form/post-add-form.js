import React, {Component} from 'react';
import {Button, Input} from 'reactstrap';


// import './post-add-form.css';

import styled from 'styled-components';

const Form = styled.form`
  margin-top: 60px;

  .new-post-label {
    width: auto;
    flex-grow: 1;
    margin-right: 10px;
    background: #fff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 9px;

  }

  .btn {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
  }
`;

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(evt) {
        this.setState({
            text: evt.target.value
        })
    }

    onSubmit(evt) {
        evt.preventDefault();
        if (this.state.text) {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            });
        }

    }

    render() {
        return (
            <Form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
            >
                <Input
                    type='text'
                    placeholder="Что вы бы хотели сделать сегодня?"
                    className="new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type="submit"
                    outline color="primary">
                    Добавить</Button>
            </Form>
        )
    }

}

