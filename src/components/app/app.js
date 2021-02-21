import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 1100px;

  .search-panel {
    margin: 1rem 0;
  }
`;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: "Hi dude, lets go play dota2",
                    important: true,
                    id: 1,
                    liked: false
                },
                {
                    label: "Now imma gonna watch PaS",
                    important: false,
                    id: 2,
                    liked: false
                },
                {
                    label: "I hate database, so imma dropping it",
                    important: false,
                    id: 3,
                    liked: false
                }
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const old = data[index];
            const newItem = {...old, liked: !old.liked};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.liked);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }


    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.liked).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);


        return (
            <AppBlock className="app container">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList posts={visiblePosts}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </AppBlock>
        )
    }
}