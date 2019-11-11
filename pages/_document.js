// _document: Allows us directly access to head and all of the html documents Direct access to html document
// This is used to modify all pages inside the application 

import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta name="This is Keaton Gallagher's portfolio" content="A Site fro my programming portfolio." />
					<meta charSet="utf-8" />
					{/* This is for google primarly */}
					<meta name="robots" />
					{/* Mobile phones making width the size of the device */}
					<meta name="viewport" content="width=device-width" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					/>
					<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style jsx global>
					{`
						body {
							font-family: 'Roboto', sans-serif;
						}
					`}
				</style>
			</html>
		);
	}
}
