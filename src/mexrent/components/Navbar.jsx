import { CurrencyExchange, ExpandMore, TranslateOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, Container,Toolbar, Typography } from "@mui/material"
import { PRIMARY_COLOR, TITLES_COLOR } from "../../config"

export const Navbar = () => {
  return (
    <AppBar
        position='static'
        sx={{ backgroundColor: PRIMARY_COLOR, color: TITLES_COLOR }}
        elevation={0}
    >
        <Container maxWidth="xl">
            <Toolbar sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: {md: 'end'}, gap: 2 }}>
                <Button 
                    sx={{ 
                        border: 1,
                        borderColor: TITLES_COLOR,
                        display: 'flex',
                        gap: 1.8,
                        borderRadius: 20,
                        padding: 1.3
                    }}
                    color='inherit'>
                    <Box
                        component="img"
                        sx={{
                            height: 24,
                            width: 24,
                            border: 1,
                            borderRadius: 100
                        }}
                        alt="Currency img"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png"
                    />
                    <Typography noWrap component='p'>MXN</Typography>
                    <CurrencyExchange fontSize="small"/>
                </Button>
                <Button sx={{ color: 'inherit', display: 'flex', gap: 1 }}>
                    <TranslateOutlined />
                    ES
                    <ExpandMore/>
                </Button>
            </Toolbar>
            
            <Toolbar>
                <Box
                    component="img"
                    sx={{
                        width: 130,
                    }}
                    alt="Currency img"
                    src="https://mexrentacar.com//img/logo.svg"
                />
                
                <Box sx={{ flexGrow: 1, display: 'flex', gap: 1.8, justifyContent: 'end' }}>
                    <Button color="inherit">
                        Renta
                    </Button>
                    <Button color="inherit">
                        Corporativos
                    </Button>
                    <Button color="inherit">
                        Blog
                    </Button>
                    <Button color="inherit">
                        Ubicaciones
                    </Button>
                    <Button color="inherit">
                        Contacta
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
