import { FormHeader } from '../../components/FormHeader';
import { Input } from '../../components/Input';

import { Container, Content } from './styles'

import { useForm } from "react-hook-form"

export function Form() {

  const defaultValues = {
    name: '',
  };

  const { handleSubmit, formState: { errors }, control } = useForm({ defaultValues });

  return (
    <Container>
      <form>
        <FormHeader />
        <Content>
          <Input
              id="nome"
              name="nome"
              label="Nome"
              maxLength={40}
              control={control}
              error={!!errors?.nome}
              errorText={errors?.nome? 'Error' : ''}
              required
            />
        </Content>
      </form>
    </Container>
  )

}