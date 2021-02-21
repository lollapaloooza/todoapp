import React, {Component} from 'react';
import {Button} from 'reactstrap';

// import './post-list-item.css';

import styled from 'styled-components';

const PostItemBlock = styled.div`
  font-size: 1.25rem;
  

  button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;

    :focus {
      box-shadow: none;
      outline: none;
    }
  }

  .btn-star {
    background: none;
    color: #FFD700;
  }

  .btn-trash {
    background: none;
    color: red;
  }

  .fa-heart {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: red;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
  }

  .app-list-item-label {
    display: block;
    line-height: 35px;
    cursor: pointer;
    user-select: none;
    transition: 0.5s all;
  }

  &.like .fa-heart {
    opacity: 1;
    transform: translateX(0px);
  }

  &.important .app-list-item-label {
    color: #FFD700;
  }

  &.important .btn-star {
    color: #aeaeae;
  }

`;


export default class PostListItem extends Component {

    render() {

        const {label, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props;

        let classNames = 'd-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (liked) {
            classNames += ' like';
        }

        return (
            <PostItemBlock className={classNames}>
                    <span
                        className="app-list-item-label"
                        onClick={onToggleLiked}>
                        {label}
                    </span>
                <div className="d-flex justify-content-center align-items-center">
                    <Button
                        size='sm'
                        type="button"
                        className="btn-star"
                        onClick={onToggleImportant}>
                        <i className="fa fa-star"/>
                    </Button>
                    <Button
                        size='sm'
                        type="button"
                        className="btn-trash"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"/>
                    </Button>
                    <i className="fa fa-heart"/>
                </div>
            </PostItemBlock>
        )
    }

}
