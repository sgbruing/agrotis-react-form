import logoAgrotis from '../../assets/images/logo-agrotis.svg'
import { Container, Content } from './styles'

export function Header() {

  return (
    <Container>
      <Content>
        <img src={logoAgrotis} alt="logo Agrotis"></img>
      </Content>
    </Container>
  )

}