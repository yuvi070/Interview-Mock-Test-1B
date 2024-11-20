import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 22px;
  padding-right: 22px;
  border-bottom: 2px solid #94a3b8;
`
export const CountryName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
`

export const Button = styled.button`
  border: 0px;
  background-color: ${props => (props.show ? 'transparent' : '#3b82f6')};
  width: 60px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
  padding: 6px;
  color: ${props => (props.show ? '#334155' : 'white')};
`
