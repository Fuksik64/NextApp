import Head from "next/head";
import Link from "next/link";
import Footer from "../includes/Footer";
import Navbar from "../includes/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        repellat placeat consequatur natus animi numquam fuga ex reiciendis unde
        iure. Quos consequatur eveniet magni reiciendis enim ex repudiandae
        incidunt earum.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non
        aliquam nam beatae tempora iste officiis velit quos dolores fugit
        voluptatum mollitia odit eius incidunt excepturi eaque, cum tempore
        culpa.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
