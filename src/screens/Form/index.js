import { FormHeader } from '../../components/FormHeader';
import { Container, Content } from './styles'

export function Form() {
  const defaultValues = {
    name: '',
    initialDate: null,
    finalDate: null,
    propertysInfos: '',
    laboratory: '',
    observations: '',
  };

  return (
    <Container>
      <form>
        <FormHeader />
      </form>
    </Container>
  )

}