import React from "react";
import './index.css';

class Product extends React.Component {

    render() {
        return (

            <div className="grid_product">
                <div className="checkbox_input">
                    <input type={"checkbox"} className="single_checkbox" defaultChecked={this.props.todo.isDone}
                           onChange={() => this.props.producttodoIsDone(this.props.todo)}></input>
                </div>
                <div className="label_product">
                    <label>
                        {this.ifDone()}
                    </label>
                </div>
                <div className="button_product">
                    <button className={"sub-button"}
                            onClick={() => this.props.producttodoDelete(this.props.todo.id)}>–
                    </button>
                </div>

            </div>
        )
    }


    ifDone() {
        if (this.props.todo.isDone) {
            return <s>{this.props.todo.value}</s>

        } else {
            return this.props.todo.value

        }
    }
}

export default Product
