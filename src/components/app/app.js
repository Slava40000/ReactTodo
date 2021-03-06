import React, { Component } from "react";

import AppHeader from "../app-heder";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Drink coffee', important: false, id: 1 },
            { label: 'Make App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 },
        ]
    }

    deleteItem = (id)=> {
        console.log(id)
    };
    
    render() {
        return (
            <div className="todo-app" >
                <AppHeader toDo={1} done={3} />

                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={this.state.todoData}
                    onDeleted={(id) => console.log('del', id)} />
            </div>
        )
    }


};

