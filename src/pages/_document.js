import Document, {Html, Head, Main, NextScript} from 'next/document';

class NewDocument extends Document {
  static async  getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render(){
    return(
      <Html lang="pt-br">
        <Head>
          <>
            <title>Calculadora de IMC</title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Hallex Abreu"></meta>
            <meta name="description" content="Mais um projeto"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap" rel="stylesheet" />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NewDocument;