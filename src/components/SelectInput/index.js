import { ClearButton, Container, MenuProps } from './styles';

import { Controller } from "react-hook-form";

import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { FormControl, InputLabel, Select, FormHelperText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export function SelectInput({ children, control, rules, ...props }) {
    return (
        <Container>
            <Controller
                name={props.id}
                control={control}
                defaultValue=''
                rules={rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <FormControl fullWidth variant="standard" color="success">
                        {value !== '' &&
                            <ClearButton onClick={() => onChange('')} aria-label="clearSelection" size="small">
                                <CloseIcon fontSize="inherit" />
                            </ClearButton>
                        }
                        <InputLabel error={!!error} id={props.label.replace(/ /g, "").toLowerCase()}>{props.label}</InputLabel>
                        <Select
                            labelId={props.label.replace(/ /g, "").toLowerCase()}
                            data-testid={props.id}
                            id={props.id}
                            value={value}
                            onChange={onChange}
                            color="success"
                            MenuProps={MenuProps}
                            error={!!error}
                        >
                            {children}
                        </Select>
                        {(props.id === 'infosPropriedade' && value !== '') ?
                            <FormHelperText>CNPJ {JSON.parse(value).cnpj}</FormHelperText>
                            :
                            <>{(props.id === 'laboratorio' && !!error) ?
                                <FormHelperText error><ReportProblemIcon /> Error</FormHelperText>
                                :
                                <FormHelperText> </FormHelperText>
                            }</>
                        }
                    </FormControl>
                )}
            />
        </Container>
    )
}