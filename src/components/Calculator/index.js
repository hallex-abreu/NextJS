import styles from './Calculator.module.scss';
import {useState} from 'react';
import {Container, Grid, Typography, TextField, Button} from '@material-ui/core';

function Calculator(){
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState();

  function calcularIMC(){
    const alturam = altura/100; 
    setImc((peso/(alturam * alturam)).toFixed(2))
  }

  return(
    <section id={styles.calculator}>
      <Container maxWidth="xs">
        <Typography variant="h3">Calculadora</Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField label="Altura em CM" variant="filled" fullWidth type="number" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
          </Grid>
          <Grid item>
            <TextField label="Peso em KG" variant="filled" fullWidth type="number" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" fullWidth onClick={()=>{calcularIMC()}}>Calcular</Button>
          </Grid>
          <Grid item>
            <Typography>O seu IMC é: {imc} kg/m2</Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Calculator;