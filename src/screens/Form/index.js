import { Container, Content } from './styles'

import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { Datepicker } from '../../components/DatePicker';

import { FormHeader } from '../../components/FormHeader';
import { Input } from '../../components/Input';

export function Form() {

  const defaultValues = {
    name: '',
  };

  const { handleSubmit, formState: { errors }, control } = useForm({ defaultValues });

  const [minDateFinal, setMinDateFinal] = useState(null)

  return (
    <Container>
      <form>
        <FormHeader />
        <Content>
          <Input
              id="name"
              name="name"
              label="Nome"
              maxLength={40}
              control={control}
              error={!!errors?.name}
              helperText={errors?.name? 'Error' : ''}
              required
            />
            <Datepicker
              id="initialDate"
              name="initialDate"
              label="Data inicial"
              value={''}
              control={control}
              error={!!errors?.initialDate}
              helperText={errors?.initialDate? 'Error' : ''}
              onChange={(value) => setMinDateFinal(value)}
              required
            />
        </Content>
      </form>
    </Container>
  )

}