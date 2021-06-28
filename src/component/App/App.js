import React from 'react'
import '../App/App.css'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import Results from '../Results/Results'
import NameCard from '../NameCard/NameCard'
const name= require('@rstacruz/startup-name-generator')
class App extends React.Component{
    state={
    headerText: 'Name It!',
    isExpanded:true,
    suggestedName:[]
    }
    handleInputChange=(inputText)=>{
       
    this.setState({isExpanded:!inputText, suggestedName: inputText?name(inputText):[]})
    }
    render(){
        return(
            <div>
            <Header headImage={this.state.isExpanded} headTitle={this.state.headerText} />
            <SearchBox onInputChange={this.handleInputChange}/>
            <Results suggestedName={this.state.suggestedName}/>
            
            </div>
        )
            
        
    }
}

export default App;