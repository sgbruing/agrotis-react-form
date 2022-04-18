import { Container, Content, CustomOption } from './styles'

import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { Datepicker } from '../../components/DatePicker';

import { FormHelperText, MenuItem } from '@mui/material';

import { FormHeader } from '../../components/FormHeader';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';

export function Form() {

  const defaultValues = {
    name: '',
    dataInicial: null,
    dataFinal: null,
    infosPropriedade: '',
    laboratorio: '',
  };

  const { handleSubmit, formState: { errors }, control } = useForm({ defaultValues });

  const [minDateFinal, setMinDateFinal] = useState(null)

  let laboratories = [
    { id: 1, nome: 'Agro Skynet' },
    { id: 2, nome: 'Umbrella Agro' },
    { id: 3, nome: 'Osborn Agro' },
    { id: 4, nome: 'Skyrim Agro' },
    { id: 5, nome: 'Agro Brasil' }];
let estates = [];
for (let i = 1; i <= 9; i++) {
    estates.push({
        id: i,
        nome: `Agrotis ${i}`,
        cnpj: `04.909.987/0001-8${i}`
    });
}
  
  return (
    <Container>
      <form>
        <FormHeader />
        <Content>
          <div>
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
              <Datepicker
                id="finalDate"
                name="finalDate"
                label="Data Final"
                value={''}
                control={control}
                error={!!errors?.finalDate}
                helperText={errors?.finalDate? 'Error' : ''}
                minDate={minDateFinal}
                required
              />
          </div>
          <div>
          <SelectInput
            id="infosPropriedade"
            control={control} 
            rules={{ required: true }} 
            label="Propriedade *" 
          >
            {estates.map(item => {
                return <CustomOption value={JSON.stringify(item)} key={item.id}><p>{item.nome}</p><FormHelperText>CNPJ {item.cnpj}</FormHelperText></CustomOption>
              })}
          </SelectInput>
          <SelectInput 
            id="laboratorio"
            control={control} 
            rules={{ required: true }} 
            label={'Laboratório *'} 
          >
            {laboratories.map(item => {
                return <MenuItem value={JSON.stringify(item)} key={item.id}>{item.nome}</MenuItem>
            })}
          </SelectInput>
          </div>
          <div>
            <Input 
              id="observacoes"
              name="observacoes"
              label="Observações"
              rows={4}
              maxLength={1000}
              control={control}
              multiline
              required={false}
            />
          </div>
        </Content>
      </form>
    </Container>
  )

}