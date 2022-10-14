import Head from "next/head";
import fsPromises from "fs/promises";
import path from "path";
import Foods from "./foods";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>MFP POC</title>
        <meta name="description" content="MFP POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Foods foods={props.foods}></Foods>
    </div>
  );
}

//load data from local file
export async function getStaticProps() {
  // TODO - determine why a popup was displayed in Chrome on Mac to allow for local file access. Is this just in develop environment?
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData,
  };
}
