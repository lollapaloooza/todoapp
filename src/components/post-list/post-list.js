import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroupItem} from 'reactstrap';

// import './post-list.css';
import styled from 'styled-components';

const ListGroup = styled.ul`
  margin-top: 50px;
  padding: 0;

  .list-group-item {
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    padding: 20px 35px 10px 35px;
    margin-top: 15px;
  }
`;

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <ListGroupItem key={id}>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />

            </ListGroupItem>
        )
    });

    return (
        <ListGroup>
            {elements}
        </ListGroup>
    )
}

export default PostList;