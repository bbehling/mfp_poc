import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [initialProps.styles, <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />],
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
