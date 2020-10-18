import styles from './Header.module.scss';
import {Container, Grid, Typography} from '@material-ui/core';

function Header(){
  return(
    <header className={styles.header}>
      <Container fixed>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">
              Calcule seu imc
            </Typography>
            <Typography>
              O IMC é o indice de massa corporal, e é ultilizado para saber se o peso está de acordo com a altura.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="/medic.png" alt="doctor"/>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
export default Header;