import React from "react";

class AddProduct extends React.Component {

    state = {
        value: ""
    }

    clearInput = () => {
        document.getElementById("add_input").value = "";
        this.setState({value: ""})
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    addProd = () => {
        this.props.todoAdd(this.state.value)
        this.clearInput()
    }

    render() {
        return (
            <div className={"add_product_form"}>
                <input maxLength={50} type={"text"} className={"add_input"} id="add_input" placeholder={"add product"}
                       onChange={this.handleChange}></input>
                <button className={"add-product"} onClick={this.addProd}>+</button>
            </div>
        )
    }
}

export default AddProduct
