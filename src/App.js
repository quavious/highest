import React from 'react';
import './App.css';
import ShowInfo from './showInfo'


class App extends React.Component {
  state = {
    isLoading : true,
    infos : []
  };
  componentDidMount = async() => {
    const infos = await require('./information/infos.json')
    this.setState({isLoading: false, infos : infos})
    
  }

  render = () => {
    const {isLoading, infos} = this.state;
    if (isLoading) {
      console.log("contents is being loaded...")
    }
    else {
      console.log(infos)
    }
    return (
      <div className="App">
        <div className="App-title">
          <h1>the highest</h1>
        </div>
        <div className="App-wrapper">
          {
            infos.map(info => (
              <ShowInfo 
                key = {info.idx}
                index = {info.idx} 
                id = {info.id}
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
