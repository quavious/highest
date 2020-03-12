import React from 'react';
import './App.css';
import ShowInfo from './showInfo'


class App extends React.Component {
  state = {
    isLoading : true,
    infos : [],
    aQuote : {}
  };
  
  makeQuote = async() => {
    const qIndex = Math.floor(Math.random()*199)
    const qDict = await require('./information/quotes.json')
    this.setState({aQuote : qDict[qIndex]})
  }
  
  componentDidMount = async() => {
    const infos = await require('./information/infos2.json')
    this.setState({isLoading: false, infos : infos})
    
    this.makeQuote();
  }

  render = () => {
    const {isLoading, infos, aQuote} = this.state;
    if (isLoading) {
      console.log("contents is being loaded...")
    }
    else {
      //console.log(quotes)
    }
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">
            <h1>- the highest -</h1>
          </div>
          <div className="App-quotes">
            <p>{aQuote.quote+" - "}<i>{aQuote.author}</i></p>
          </div>
        </div>  
        <div className="App-wrapper">
          {
            infos.map(info => (
              <ShowInfo 
                key = {info.idx}
                index = {info.idx} 
                id = {info.id}
                name = {info.name}
                mainUrl = {info.main_url}
                imgUrl = {info.imgUrl}
                numbers = {info.subscribers}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
