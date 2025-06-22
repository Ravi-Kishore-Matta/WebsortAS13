import styled from 'styled-components'

export const Home4CardImage = styled.div`
  background-image: url(${props => props.bgImg});
  width: 500px;
  height: 300px;
  background-size: cover;
  margin: 30px;
  padding: 0px;
  @media (max-width: 767px) {
    width: 100%;
    height: 150px;
  }
`
