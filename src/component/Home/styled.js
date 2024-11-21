import styled from 'styled-components'

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cbd5e1;
`
export const Home1 = styled.div`
  height: 95%;
  width: 60%;
  background-color: #161624;
  padding: 10px;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
`

export const CountriesDiv = styled.ul`
  list-style: none;
  padding-left: 0px;
  height: 34%;
  overflow: auto;
  border: 2px solid #94a3b8;
  border-radius: 5px;
`
export const VisitedDiv = styled.ul`
  padding-left: 0px;
  height: 40%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`
