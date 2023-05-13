import Heading from "../components/Heading";
//побочные эффекты
import { useEffect } from "react";
//маршрутиризация
import { useRouter } from "next/router";
import styles from "../styles/404.module.scss";
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {

        setTimeout(() => {
            router.push('/');
        }, 3000)

    }, [router]);

    return (

        <div className={styles.wrapper}>
            <div>
                <Head>
                    <title>Error</title>
                </Head>
                <Heading text="404" tag=""/>
                <Heading text="Something get wrong.." tag="h2"/>
            </div>
        </div>

    )
};
  
  export default Error;