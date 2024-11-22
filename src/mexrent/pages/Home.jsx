import Box from "@mui/material/Box/Box"
import { MexrentLayout } from "../layout/MexrentLayout"
import { BannerHome, ConsultarReservacionForm } from "../components"
import { Button, FormControl, FormControlLabel, FormLabel, Grid, Grid2, Input, InputAdornment, InputLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { AccountCircle, PlaceOutlined, Search } from "@mui/icons-material";
import { ACTIONS_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TITLES_COLOR } from "../../config";

export const Home = () => {
  return (
    <MexrentLayout>
        <Box sx={{
            height: 'calc(100vh)',
            margin: 0,
            background: 'linear-gradient(15deg, rgba(0,111,181,1) 30%, rgba(0,124,190,1) 30%, rgba(0,207,245,1) 30%, rgba(0,207,245,1) 36%, rgba(255,255,255,1) 36%)',
            }}
         >
            <Box component='div' display='flex' paddingY={4} paddingX={10}
                sx={{ display: 'grid', gap: 4, gridTemplateColumns: 'repeat(2, 1fr)', width: '80%', marginX:'auto' }}
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='start'
                >
                    <Box component='div'>
                        <Typography variant="h2" color={TITLES_COLOR}>Mex Rent A Car</Typography>
                        <Box marginLeft={5} width='70%' color={TITLES_COLOR}>
                            <Typography variant="p">
                                Con el objetivo de exceder las expectativas de nuestros clientes, nuestro personal está capacitado para servirte en cualquier situación que se presente. 
                            </Typography>
                        </Box>
                    </Box>
                    <BannerHome />
                </Box>
                <ConsultarReservacionForm />
            </Box>
        </Box>

        <Box component='section' display='flex' flexDirection='column' alignItems='center'>
            <Box paddingX={4} paddingY={{ md: 8 }}>
                <Typography variant="h4" component='h3'color={ACTIONS_COLOR} textAlign='center'>
                    Descubre
                    <Typography component='p'>#NosotrosTeMovemos</Typography>
                </Typography>
            </Box>
            <Box color={TITLES_COLOR} width='40%' textAlign='center'>
                <Typography fontSize={13}>
                    Todas nuestras tarifas en México incluyen cobertura contra daños a terceros y protección al auto con deducible. Descubre todas las opciones de autos que tenemos para ti.
                </Typography>
                <Typography fontWeight={700} marginTop={3}>Vive la experiencia Mex Rent A Car.</Typography>
            </Box>
            <Box width='70%' marginY={10} color={TITLES_COLOR}>
                <Typography fontWeight={600} variant="h5" textTransform='uppercase' textAlign='center' color={ACTIONS_COLOR}>Requisitos de contratación</Typography>
                <Grid2 gap={3} marginY={5} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <Grid2 display='flex' gap={1} flexDirection='column' alignItems='center' justifyContent='center'
                    >
                        <Box
                            component='img'
                            src="https://mexrentacar.com//img/icon-identification-document.svg"
                        >
                        </Box>
                        <Typography fontWeight={700} color={ACTIONS_COLOR}>
                            Identificación Oficial
                        </Typography>
                        <Typography fontSize={13} textAlign='center'>
                            Pasaporte o INE vigentes durante el período del contrato de arrendamiento.
                        </Typography>
                    </Grid2>
                    <Grid2 display='flex' gap={1} flexDirection='column' alignItems='center' justifyContent='center'
                    >
                        <Box
                            component='img'
                            src="https://mexrentacar.com//img/icon-driver-license.svg"
                        >
                        </Box>
                        <Typography fontWeight={700} color={ACTIONS_COLOR}>
                            Identificación Oficial
                        </Typography>
                        <Typography fontSize={13} textAlign='center'>
                            Vigente y en alfabeto romano.
                        </Typography>
                    </Grid2>
                    <Grid2 display='flex' gap={1} flexDirection='column' alignItems='center' justifyContent='center'
                    >
                        <Box
                            component='img'
                            src="https://mexrentacar.com//img/icon-credit-card.svg"
                        >
                        </Box>
                        <Typography fontWeight={700} color={ACTIONS_COLOR}>
                            Tarjeta de crédito
                        </Typography>
                        <Typography fontSize={13} textAlign='center'>
                            Visa, Mastercard o American Express.
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>

        <Box
            sx={{ backgroundColor: SECONDARY_COLOR, transform: 'skew(0,-2deg)' }}
        >
            <Box sx={{ transform: 'skew(0, 2deg)' }} padding={10}>
                <Grid2 display='grid' alignItems='start' gridTemplateColumns='repeat(2, 1fr)' gap={4} width='90%' marginX='auto'
                >
                    <Grid2 width='80%'>
                        <Box
                            display='flex'
                            flexDirection='column'
                            gap={2}
                            marginLeft='auto'
                            color={ACTIONS_COLOR}
                        >
                            <Typography
                                component="h3"
                                fontSize={28}
                                fontWeight='bold'
                            >
                                Conoce las ventajas de rentar un auto con Mex
                            </Typography>
                            <Typography
                                component='p'
                            >
                                Donde sea que estés, nuestra cobertura y servicios van contigo con la garantía Mex Rent A Car.
                            </Typography>
                            <Button variant='contained' sx={{ paddingY: 1.5, backgroundColor: ACTIONS_COLOR }}>
                                Conoce más de mex
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 color={TITLES_COLOR}>
                        <Grid2 gap={5} marginY={5} sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                            <Grid2
                                display='flex'
                                gap={2}
                            >
                                <Box
                                    width={100}
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='start'
                                >
                                    <Box
                                        component='img'
                                        src="https://mexrentacar.com//img/assets/kilometraje-ilimitado.svg"
                                    >
                                    </Box>
                                </Box>
                                <Box
                                    component='div'
                                >
                                    <Typography component='h3' fontSize={17} fontWeight={600} color={PRIMARY_COLOR}>
                                        Kilometraje Ilimitado en todos tus viajes
                                    </Typography>
                                    <Typography component='p' fontWeight='bold' color='#4c4c4c' fontSize={13} width='80%'>
                                        Sin límite de kilometraje en tu renta, disfruta del recorrido sin importar la distancia.
                                    </Typography>
                                </Box>
                            </Grid2>
                            <Grid2
                                display='flex'
                                gap={2}
                            >
                                <Box
                                    width={100}
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='start'
                                >
                                    <Box
                                        width={80}
                                        component='img'
                                        src="https://mexrentacar.com//img/assets/deposito-bajo.svg"
                                    >
                                    </Box>
                                </Box>
                                <Box
                                    component='div'
                                >
                                    <Typography component='h3' fontSize={17} fontWeight={600} color={PRIMARY_COLOR}>
                                        Los depósitos más bajos en México
                                    </Typography>
                                    <Typography component='p' fontWeight='bold' color='#4c4c4c' fontSize={13} width='80%'>
                                        Con la garantía y seguridad MEX, renta la mejor gama de autos con la mejor tarifa.
                                    </Typography>
                                </Box>
                            </Grid2>
                            <Grid2
                                display='flex'
                                gap={2}
                            >
                                <Box
                                    width={100}
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='start'
                                >
                                    <Box
                                        component='img'
                                        src="https://mexrentacar.com//img/assets/veriedad-marcas.svg"
                                    >
                                    </Box>
                                </Box>
                                <Box
                                    component='div'
                                >
                                    <Typography component='h3' fontSize={17} fontWeight={600} color={PRIMARY_COLOR}>
                                        Variedad de marcas y modelos
                                    </Typography>
                                    <Typography component='p' fontWeight='bold' color='#4c4c4c' fontSize={13} width='80%'>
                                        Siempre disponibles, para todas las necesidades, conoce todo nuestro catálogo.
                                    </Typography>
                                </Box>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Box>
        </Box>
    </MexrentLayout>
  )
}
