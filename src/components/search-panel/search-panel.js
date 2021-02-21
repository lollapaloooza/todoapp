import React, {Component} from 'react';

// import './search-panel.css';
import styled from 'styled-components';

const SearchPanelBlock = styled.input`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
`;


export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(evt) {
        const term = evt.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }


    render() {
        return (
            <SearchPanelBlock
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}
            />
        )
    }
}

