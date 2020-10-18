import styles from './Header.module.scss';
import {Container, Grid, Typography} from '@material-ui/core';

function Header(){
  return(
    <header className={styles.header}>
      <Container fixed>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography>
              Calcule seu imc
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            Conteudo 2
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}
export default Header;