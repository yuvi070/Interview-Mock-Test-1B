import {Card1, Image, CardDiv, CardButton} from './styled'

const Card = props => {
  const {each, onClickButton} = props
  const onClickButton2 = () => {
    onClickButton(each.id)
  }
  return (
    <Card1>
      <Image src={each.imageUrl} alt="thumbnail" />
      <CardDiv>
        <p>{each.name}</p>
        <CardButton type="button" onClick={onClickButton2}>
          Remove
        </CardButton>
      </CardDiv>
    </Card1>
  )
}

export default Card
