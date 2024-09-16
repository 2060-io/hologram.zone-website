import React from 'react';
import { Translations } from '../../page';
import About from './about';
import Navbar from './navbar';

interface Footer {
	translations: Translations
}

const Footer: React.FC<Footer> = ({ translations }) => {
	return (
		<footer
			className="flex -mx-6 bg-zinc-300 text-center"
		>
			<About
				translations={translations}
			/>
			<Navbar />
		</footer>
	)
}

export default React.memo(Footer);