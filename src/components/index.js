import {Component} from 'react'
import HistoryItems from './item'

class History extends Component {
  const {initialHistoryList} = this.props  
  state = {historyList: initialHistoryList, searchInput: ''}

  onDelete = id => {
    const {historyList} = this.state
    const newList = historyList.filter(eachitem => eachitem.id !== id)
    this.setState({
      historyList: newList,
    })
  }

  render() {
    const {historyList} = this.state

    const input = () => {
      const {searchInput} = this.state
      const searchResult = historyList.filter(
        eachitem.titlt.lower().includes(searchResult),
      )
    }
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input type="search" onChange={this.input} />
          </div>
        </div>
        <ul>
          {searchResult.map(eachitem => (
            <HistoryItems
              key={eachitem.id}
              item={eachitem}
              deleteHis={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default History
