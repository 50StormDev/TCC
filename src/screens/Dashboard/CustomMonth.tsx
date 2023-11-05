import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

// interface CustomCell {
//   title: string,
//   price: number
// }

function MonthRow(){
  return(
    <React.Fragment>
      {/* {content.map((item:{title: string, price: number}) => (
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                {item.title3}
              </Typography>
              {item.prices > 0 && <Typography sx={{ fontSize: 9 }} color="text.secondary" gutterBottom>
                ¥ {item.price.toString()}
              </Typography>}
            </CardContent>
          </Card>
        </Grid>
      ))} */}
      <Container fixed>
        <Stack
        direction={'row'}
        spacing={{ xs: 1, sm: 1, md: 1 }}
      >
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                D
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                D
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                D
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                D
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7}>
        <Card>
          <CardContent>
            <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
              D
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                D
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card>
            <CardContent>
              <Typography sx={{ typography: { sm: 'h5', xs: 'body2' } }}>
                D
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Stack>
      </Container>
      
    
    </React.Fragment>
  )
}

export default function CustomMonth(){
  return(
    <Box>
      <Stack spacing={1}>
        <Grid container item spacing={6}>
          <MonthRow/>
        </Grid>
        <Grid container item spacing={6}>
          <MonthRow/>
        </Grid>
        <Grid container item spacing={6}>
          <MonthRow/>
        </Grid>
        <Grid container item spacing={6}>
          <MonthRow/>
        </Grid>
        <Grid container item spacing={6}>
          <MonthRow/>
        </Grid>
        <Grid container item spacing={6}>
          <MonthRow/>
        </Grid>
      </Stack>
    </Box>
  )
}