import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Searchbox from '../SearchBox/Searchbox';

import './App.css';

const name = require('@rstacruz/startup-name-generator')



class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames:[]

    };
    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !(inputText),
        suggestedNames: inputText? name(inputText) :[] })
    }; 
    render() {
        //console.log(name('cloud'));
        return (
            <div>
                <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <Searchbox onInputChange={this.handleInputChange} />
                <ResultsContainer  suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}
/*function App() {
    return <h1>This is my functional component</h1>
}*/
export default App;