import { useEffect, useState } from 'react'
import { Place, Search } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid2, Input, InputAdornment, InputLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { TITLES_COLOR } from '../../config'
import { useForm } from '../../hooks'

const formData = {
    entrega: '',
    tipoDevolucion: 'mismo',
    devolucion: ''
}

const formValidations = {
    entrega: [ (value) => value.length > 0 , 'El lugar de entrega es obligatorio' ],
    devolucion: [ (value) => value.length > 0 , 'Lugar de devolución obligatorio' ]
}

export const ConsultarReservacionForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [diferenteDevolucion, setDiferenteDevolucion] = useState(false);
    

    const { 
            formState, entrega, tipoDevolucion, devolucion, onInputChange,
            isFormValid, entregaValid, tipoDevolucionValid, devolucionValid
    } = useForm( formData, formValidations );

    
    useEffect(() => {
        setDiferenteDevolucion(tipoDevolucion != 'mismo');
    
    }, [tipoDevolucion])

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        setFormSubmitted(true);
        
        if ( !isFormValid ) return;

    }

  return (
    <>  
        <Box
            component='form'
            onSubmit={onSubmit}
            marginLeft='auto'
            width='100%'
            padding={2}
            sx={{ color: TITLES_COLOR }}>
            <Typography component='h2' variant="h5">Consulta reservaciones</Typography>
            <Box display='flex' flexDirection='column' gap={2} marginTop={2}>
                <FormControl variant="standard" fullWidth>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 14 }}>
                        Lugar de devolución
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={ tipoDevolucion }
                        onChange={ onInputChange }
                        name="tipoDevolucion"
                    >
                        <FormControlLabel value="mismo" control={<Radio />} label={<Typography sx={{ fontSize: 13 }}>Misma de entrega</Typography>}/>
                        <FormControlLabel value="diferente" control={<Radio />} label={<Typography sx={{ fontSize: 13 }}>Diferente Devolución</Typography>}/>
                    </RadioGroup>
                </FormControl>
                <TextField
                    id="entrega"
                    name="entrega"
                    label="Entrega"
                    error={ !!entregaValid && formSubmitted }
                    value={entrega}
                    onChange={ onInputChange }
                    slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start" sx={{ color: !!entregaValid && formSubmitted ? 'red': '' }}>
                                <Place />
                            </InputAdornment>
                            ),
                        },
                    }}
                    placeholder='Recoga su vehiculo'
                    helperText={ entregaValid }
                    variant='standard'
                />
                
                {
                    diferenteDevolucion && (
                            <TextField
                            id="devolucion"
                            name="devolucion"
                            label="Devolucion"
                            error={ !!devolucion && formSubmitted }
                            value={devolucion}
                            onChange={ onInputChange }
                            slotProps={{
                                input: {
                                    startAdornment: (
                                    <InputAdornment position="start" sx={{ color: !!devolucionValid && formSubmitted ? 'red': '' }}>
                                        <Place />
                                    </InputAdornment>
                                    ),
                                },
                            }}
                            placeholder='Devolución del vehiculo'
                            helperText={ devolucionValid }
                            variant='standard'
                        />
                    )
                }

                <Grid2 container spacing={2}>
                    <Grid2 size={6}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 14 }}>
                                Lugar Recogida
                            </FormLabel>
                            <TextField
                                fullWidth
                            />
                        </FormControl>
                    </Grid2>
                    <Grid2 size={6}>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 14 }}>
                                Lugar Devolución
                            </FormLabel>
                            <TextField
                                fullWidth
                            />
                        </FormControl>
                    </Grid2>
                </Grid2>
                
                <Grid2 sx={{ mb: 2, mt: 1 }}>
                    <Button type='submit' variant="contained" fullWidth sx={{ paddingY: 1.3 }}>
                        <Search />
                        Buscar
                    </Button>
                </Grid2>
            </Box>
            <Box
                width='90%'
                marginX='auto'
                marginTop={3}
            >
                <Box
                    component='img'
                    src='https://mexrentacar.com/upload/promotion-button/2024_10_31_08_35_58_BOTONES-03.svg'
                >
                </Box>
            </Box>
        </Box>
    </>
  )
}
