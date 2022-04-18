import { Container, Content, CustomOption, Page } from './styles'

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { Datepicker } from '../../components/DatePicker';

import { FormHelperText, MenuItem } from '@mui/material';

import { FormHeader } from '../../components/FormHeader';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { EventSnackbar } from '../../components/EventSnackbar';

import { formatRFC3339 } from 'date-fns'

export function Form() {

  const defaultValues = {
    nome: '',
    dataInicial: null,
    dataFinal: null,
    infosPropriedade: '',
    laboratorio: '',
    observacoes: ''
  };

  const { handleSubmit, formState: { errors }, control } = useForm({ defaultValues });
  const [eventNotice, setEventNotice] = useState({ isOpen: false, isError: false });

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

const onError = (e) => {
  setEventNotice({ isOpen: true, isError: true })
}

const onSubmit = (data) => {
  const payload = {
    ...data,
    dataInicial: formatRFC3339(data.dataInicial),
    dataFinal: formatRFC3339(data.dataFinal),
    infosPropriedade: {
      id: JSON.parse(data.infosPropriedade).id,
      nome: JSON.parse(data.infosPropriedade).nome
    }, 
    cnpj: JSON.parse(data.infosPropriedade).cnpj,
    laboratorio: JSON.parse(data.laboratorio)
  }

  console.log(payload)
  setEventNotice({ isOpen: true, isError: false })

}

  return (
    <Page>
      <Container>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormHeader />
          <Content>
            <div>
              <Input
                  id="nome"
                  name="nome"
                  label="Nome"
                  maxLength={40}
                  control={control}
                  error={!!errors?.nome}
                  helperText={errors?.nome? 'Error' : ''}
                  required={true}
                />
                <Datepicker
                  id="dataInicial"
                  name="dataInicial"
                  label="Data inicial"
                  value={''}
                  control={control}
                  error={!!errors?.dataInicial}
                  helperText={errors?.dataInicial? 'Error' : ''}
                  onChange={(value) => setMinDateFinal(value)}
                  required={true}
                />
                <Datepicker
                  id="dataFinal"
                  name="dataFinal"
                  label="Data Final"
                  value={''}
                  control={control}
                  error={!!errors?.dataFinal}
                  helperText={errors?.dataFinal? 'Error' : ''}
                  minDate={minDateFinal}
                  required={true}
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
      <EventSnackbar eventNotice={eventNotice} setEventNotice={setEventNotice}></EventSnackbar>
    </Page>
  )
}