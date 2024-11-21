import {List, CountryName, Button} from './styled'

const CountryList = props => {
  const {each, onClickButton} = props
  const showVisited = each.isVisited ? 'Visited' : 'Visit'
  const onClick = () => {
    onClickButton(each.id)
  }
  return (
    <List>
      <CountryName>{each.name}</CountryName>
      <Button show={each.isVisited} onClick={onClick} type="button">
        {showVisited}
      </Button>
    </List>
  )
}

export default CountryList
