import { Box, Button, FormControl, Input, InputLabel, Stack, TextField, Typography } from "@mui/material";
import Center from "../../components/utils/Center";
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import React from "react";

export default function Simulador(){

  // set useState to handle the entries 
  const [time,setTime] = React.useState(0);
  const [formData, setFormData] = React.useState({
    hourPrice: 0,
    workDays: 0,
    overtime: 0,
    resultDisplay: 0
  })
  // create function to display clock 
  React.useEffect(() => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
  },[])
  

  // function to handle entry 

  const handleChange = (keyName: string, value: any) => {
    setFormData(prevState => ({
      ...prevState,
      [`${keyName}`]: value
    }))
  }

  const calculate = () => {
    let result = (formData.hourPrice * (formData.workDays * 8)) + ((formData.hourPrice * 1.25) * (formData.overtime))
    console.log()
    setFormData(prevState => ({
      ...prevState,
      ['resultDisplay']: result
    }))
  }
    
 

  return(
    <Stack alignItems={'center'}>
      <Typography variant="h3" marginBottom={"20px"}>
        Simulador
      </Typography>
      <Box padding={"0 20px"} marginBottom={"30px"}  width={"200px"}>
        <Typography variant="h4" style={{backgroundColor:"rgb(124 189 255)"}} borderRadius={"10px"}>
          <CurrencyYenIcon/>{formData.resultDisplay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Typography>
      </Box>
      <Box marginBottom={"14px"}>
         <TextField
          label="Salario por hora"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.hourPrice} 
          onChange={(e: any) => handleChange('hourPrice', e.target.value)}
        />
      </Box>
      <Box marginBottom={"14px"}>
        <TextField
          label="Numero de Dias Trabalhados"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.workDays} 
          onChange={(e: any) => handleChange('workDays', e.target.value)}
        />        
      </Box>
      <Box marginBottom={"14px"}>
        <TextField
          label="Numero de Horas Extras"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.overtime} 
          onChange={(e: any) => handleChange('overtime', e.target.value)}
        />
      </Box>
      
      <Button variant="contained" size="medium" onClick={calculate}>Calcular Salario</Button>
    </Stack>  
    
  )
}