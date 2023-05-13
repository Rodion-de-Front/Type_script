import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

//функция для асинхронного запроса
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {contacts: data},
  }
}

const Contacts = ({ contacts }) => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contact List:" tag=""/>
      <ul>
        {contacts && contacts.map(({id, name}) => (   
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>       
        ))}
      </ul>
    </div>
  );

};

export default Contacts;