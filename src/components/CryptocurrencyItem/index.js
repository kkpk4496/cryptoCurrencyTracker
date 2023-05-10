import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoList} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoList
  return (
    <li>
      <div className="item-container">
        <div className="currency-cont">
          <img className="avatar" src={currencyLogo} alt={currencyName} />
          <p>{currencyName}</p>
        </div>
        <div className="currency">
          <p className="cur">{usdValue}</p>
          <p className="cur">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
