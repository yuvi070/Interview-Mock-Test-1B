import {List, CountryName, Button} from './styled'

const CountryList = props => {
  const {each} = props
  const showVisited = each.isVisited ? 'Visited' : 'Visit'
  return (
    <List>
      <CountryName>{each.name}</CountryName>
      <Button show={each.isVisited} type="button">
        {showVisited}
      </Button>
    </List>
  )
}

export default CountryList
