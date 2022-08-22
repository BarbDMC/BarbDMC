
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;700&family=Roboto:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument