import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class Document extends NextDocument {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await super.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html lang="id">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
