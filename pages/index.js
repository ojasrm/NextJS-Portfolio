import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Next JS Portfolio App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container-fluid">
				<h1 className="display-1">Home Page</h1>
			</div>
		</div>
	);
}
