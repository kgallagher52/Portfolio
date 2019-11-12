import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

// Start hook to know when the route change is beginning. 
Router.onRouteChangeStart = url => {
  console.log("Router hook started:",url);
  NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

//If there is an error
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => {
	return (
		<div className="root">
			<Head>
				<title>{title}</title>
			</Head>
			<header>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/hireme">
					<a>Hire Me</a>
				</Link>
        <Link href="/technologies">
					<a>Technologies</a>
				</Link>
			</header>
			<h1>{title}</h1>
			{children}
			<footer>Ultron Creative &copy; {new Date().getFullYear()} </footer>
			<style jsx>
				{`
					.root {
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
					}
					header {
						width: 100%;
						display: flex;
						justify-content: space-around;
						padding: 1em;
						font-size: 1.2rem;
						background: indigo;
					}
					header a {
						color: darkgrey;
						text-decoration: none;
					}
					header a:hover {
						font-weight: bold;
						color: lightgrey;
					}
					footer {
						padding: 1rem;
					}
				`}
			</style>
			<style jsx global>
				{`
					body {
						margin: 0;
						font-size: 110%;
						background: #f0f0f0;
					}
				`}
			</style>
		</div>
	);
};
