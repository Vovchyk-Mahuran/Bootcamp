import React,{ Component } from 'react'
import ArticleList from "./ArticleList"
import articles from "../fixtures"

import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  state = {
    reverted:false
  }
  render(){
    return (
      <div className='container'>
        <div className='offset-4 col-4'>
          <h1>
            App name
            <button className="btn btn-danger" onClick={this.revert}>Revert</button>
          </h1>
        </div>
        <ArticleList articles={this.state.reverted ? articles.slice().reverse():articles} />
      </div>
    )
  }
  revert = () => {
    this.setState({
      reverted: !this.state.reverted
    })
  }
}

export default App