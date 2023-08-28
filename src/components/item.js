const HistoryItem = props => {
  const {item, deleteHis} = props
  const {timeAccessed, logoUrl, title, domainUrl} = item
  const deleteItem = () => {
    deleteHis(item.id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="title"
        onClick={deleteItem}
      />
    </li>
  )
}

export default HistoryItem
