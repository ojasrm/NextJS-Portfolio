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
			<div className="container text-center">
				<div className="container-fluid">
					<h1 className="display-1">Home Page</h1>
				</div>
				<div className="row">
					<div className="col-5">
						<h2>Title</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
							animi doloremque architecto dignissimos at cupiditate impedit
							suscipit? Nihil, beatae corporis. Maiores ab quae quas iure
							corrupti perferendis aliquam doloremque odit.
						</p>
					</div>
					<div className="col-7">
						<img
							src="https://freesvg.org/img/abstract-user-flat-4.png"
							height="400px"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
