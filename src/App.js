import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import data from './data.json';
import { Catalog } from './components/catalog/Catalog';
import { AppDrawer } from './components/common/Drawer';
import { Header } from './components/common/Header';
import { Addition } from './components/addition/Addition';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data,
            isDrawerOpen: false
        }
    }

    componentDidMount() {
        
        const localStorageData = JSON.parse(localStorage.getItem('data'));
        if( localStorageData ) {
            this.setState( {data:this.state.data.concat( localStorageData )} );
        }
    }

    render() {
        const onDeleteButton = (idElem) => {
            const data = this.state.data.filter(elem => elem.id !== idElem)
            this.setState({ data })
        }

        return (
            <HashRouter>
                <div>
                    <Header
                        onLeftIconClick={() => this.setState({ isDrawerOpen: true })}
                    />
                    <AppDrawer
                        open={this.state.isDrawerOpen}
                        onLinkClick={() => this.setState({isDrawerOpen: false})}
                        onToggle={isDrawerOpen => this.setState({isDrawerOpen})}
                    /> 
                    <Route exact path="/" render={() => (
                        <Catalog data={this.state.data} onDelete={onDeleteButton} deleteAll={() => this.setState({data: []})} />)} 
                    />
                    <Route path="/add-item" render={() => (
                        //forceUpdate должен был вызвать render и отрисовать заново. Без обновления страницы не получается
                        //отобразить новые товары.
                        <Addition onAddButton={() => this.forceUpdate()} />)}
                    />
                </div>
            </HashRouter>
        )
    }
}