import React from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import './index.css';
class Products extends React.Component {

    state = {
        addProductName: "",

        todos: [
            {
                id: 1,
                value: "Bread",
                isDone: false
            },
            {
                id: 2,
                value: "Cheese",
                isDone: false
            },
            {
                id: 3,
                value: "Ham",
                isDone: false
            },
            {
                id: 4,
                value: "Tomato",
                isDone: false
            },
            {
                id: 5,
                value: "Broccoli",
                isDone: false
            },
            {
                id: 6,
                value: "Butter",
                isDone: false
            }
        ]
    }

    todoIsDone = td => {
        const todos = this.state.todos.filter(t => {
            if (t.id === td.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos})
    }

    todoDelete = td => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== td;
        });
        this.setState({todos})
    }

    todoAdd = prod => {

        if (prod) {
            let biggest = 0;

            this.state.todos.map((item, index) => {
                biggest = item.id;
                return biggest;
            });

            // if (prod) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: biggest + 1,
                    isDone: false,
                    value: prod
                }
            )

            this.setState({addProductName: "", todos});
        }
        // }
    }

    doneThings = () => {
        let done = 0;

        this.state.todos.forEach((todo) => {
            if (todo.isDone === true)
                done += 1
        })
        return done;
    }

    render() {
        return (
            <div className={"main_container"}>

                <div className={"centralcol"}>
                    <div className={"product"}>

                        {this.state.todos.map((todo, index) => (

                            <tr key={todo.id}>
                                <Product todo={todo} isDone={this.todoDelete}
                                         producttodoAdd={this.todoAdd} producttodoIsDone={this.todoIsDone}
                                         producttodoDelete={this.todoDelete}
                                />
                            </tr>

                        ))}

                    </div>

                    <AddProduct addProductName={this.state.addProductName} todoAdd={this.todoAdd}/>
                </div>

            </div>
        )
    }

}

export default Products
