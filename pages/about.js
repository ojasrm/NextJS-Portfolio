import Link from "next/link";
import styles from "../styles/Home.module.css";

const about = () => {
	return (
		<div className={styles.container}>
			This is about Page
			<Link href="/">
				<button className="btn btn-primary">Back to Homepage</button>
			</Link>
		</div>
	);
};

export default about;
