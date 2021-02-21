import React from 'react';

// import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-family: Overpass Mono, monospace;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
  }

  h2 {
    font-size: 1.5rem;
    color: #000;
  }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Lollapaloooza</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;