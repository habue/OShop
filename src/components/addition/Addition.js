import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: 1 + Math.random(),
                name: "",
                description: "",
                price: "",
                image: "https://place-hold.it/300x300/D1C4E9/311B92&text=Empty"
            },
            errors: {
                name: "",
                description: "",
                price: ""
            }
        }
        this.items = [];
        this.onAdd = this.onAdd.bind(this);
    }
    componentDidMount() {
        let prevLocalStorage = localStorage.getItem("data");
        if(prevLocalStorage) this.items = this.items.concat(JSON.parse(prevLocalStorage));
    }
    onAdd() {
        let errors = {};
        let item = {...this.state.item};
        
        if(!item.name) errors.name = "Введите название";
        if(!item.description) errors.description = "Введите описание";
        if(!item.price) errors.price = "Введите цену";
        if(!((item.price instanceof Number || typeof item.price === 'number') && !isNaN(item.price))) {
            errors.price = "Цена должна быть числом";
        }

        if(errors.name || errors.description || errors.price) {
            this.setState({ errors });
            return;
        }
        
        item.id = 1 + Math.random();
        this.setState({item});
        this.items.push(this.state.item);
        localStorage.setItem("data", JSON.stringify(this.items));
        this.props.onAddButton();

        item.name = "";
        item.description = "";
        item.price = "";
        this.setState({item});

        let error = {...this.state.errors};
        error.name = "";
        error.description = "";
        error.price = "";
        this.setState({error});
    }
    render() {
        return (
            <div className="add-item-wrapper">
                <TextField
                    floatingLabelText="Название товара"
                    errorText={this.state.errors.name}
                    value={this.state.item.name}
                    onChange={
                        (event, name) => {
                            let item = {...this.state.item};
                            item.name = name;
                            this.setState({item});
                        }
                    }
                /><br />
                <TextField
                    floatingLabelText="Описание товара"
                    errorText={this.state.errors.description}
                    value={this.state.item.description}
                    onChange={
                        (event, description) => {
                            let item = {...this.state.item};
                            item.description = description;
                            this.setState({item});
                        }
                    }
                /><br />
                <TextField
                    floatingLabelText="Стоимость"
                    errorText={this.state.errors.price}
                    value={this.state.item.price}
                    onChange={
                        (event, price) => {
                            console.log(price)
                            let item = {...this.state.item};
                            item.price = Number(price);
                            this.setState({item});
                        }
                    }
                /><br />
                <FlatButton
                    label="Добавить товар"
                    secondary={true}
                    onClick={this.onAdd}
                />
            </div>
        )
    }
}