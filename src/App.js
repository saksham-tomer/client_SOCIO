import React from 'react'
import {Container,Typography,Grid,Grow,AppBar} from '@mui/material'
import memories from './images/memories.png'
import Form from './components/Forms/Form'
import Posts from './components/Posts/Posts'

import sxStyle from './Styles'

const App = () => {
  return (
    

    
    <Container maxWidth="lg">
        <AppBar sx={sxStyle.appBar}
       position='static' color='inherit'>
          <Typography sx={sxStyle.heading} variant='h2' align='center'>Memories</Typography>
          <img sx={sxStyle.image} src={memories} alt='memories' height='60' />
        </AppBar>
         <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems="stretch" spacing={4}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>  
            </Grid>
          </Container>
          </Grow> 
    </Container>
  
  
  )
}

export default App