import React, {Component} from 'react';
import {ButtonGroup} from 'reactstrap';

// import './post-status-filter.css';
import styled from 'styled-components';

const Button = styled.button`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
`;

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'},

        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'info' : 'outline-secondary';
            return (
                <Button
                    type="button"
                    className={`btn btn-${clazz}`}
                    onClick={() => onFilterSelect(name)}
                >{label}</Button>
            )
        });

        return (
            <ButtonGroup className="btn-group">
                {buttons}
            </ButtonGroup>
        )
    }
}


