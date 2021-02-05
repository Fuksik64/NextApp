import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>{" "}
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
          repellat placeat consequatur natus animi numquam fuga ex reiciendis
          unde iure. Quos consequatur eveniet magni reiciendis enim ex
          repudiandae incidunt earum.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non
          aliquam nam beatae tempora iste officiis velit quos dolores fugit
          voluptatum mollitia odit eius incidunt excepturi eaque, cum tempore
          culpa.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
