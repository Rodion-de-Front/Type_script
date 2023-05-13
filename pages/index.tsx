import styles from "../styles/Home.module.scss";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import Head from "next/head";

//функция для асинхронного запроса
export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {socials: data},
  }
}

const Home = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Next JS" tag="h1"/>
    <Socials socials={socials}/>
  </div>
);

export default Home;