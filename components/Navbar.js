import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link href="/">
						<a className="navbar-brand">Portfolio</a>
					</Link>
					<Link href="/about">
						<a className="navbar-brand">About</a>
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
