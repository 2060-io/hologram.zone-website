import React from "react"
import Image from "next/image";
import { Translations } from '../page';

interface Header {
	translations: Translations
}

const Header: React.FC<Header> = ({translations}) => {
	const headerTitleLine1: string[] = (translations.header_title_line_1 ?? '').split('-');
	const headerTitleLine2: string[] = (translations.header_title_line_2 ?? '').split('-');
	const headerTitleLine3: string[] = (translations.header_title_line_3 ?? '').split('-');

	return (
		<header className="pt-4">
			<div className="flex justify-between mb-5">
				<Image
					src="images/logo-hologram.png"
					alt="Logo"
					width={150}
					height={32}
					className="w-[150px] h-[32px]"
					priority={true}
				/>
				<Image
					src="images/logo-github.svg"
					alt="Logo-gitHub"
					width={32}
					height={32}
					id="logo-github-white"
					className="w-8 h-8"
					priority={false}
				/>
				<Image
					src="images/logo-github-white.svg"
					alt="Logo-gitHub"
					width={32}
					height={32}
					id="logo-github-black"
					className="w-8 h-8"
					priority={false}
				/>
			</div>
			<div className="mb-4 mt-3 text-2xl md:text-5xl lg:text-6xl font-semibold">
				<p>
					<span className="text-hologram-color">{headerTitleLine1[0]}</span>
					&nbsp;{headerTitleLine1[1]}
					<span className="text-hologram-color">{translations.dot}</span>
				</p>
				<p>
					<span className="text-hologram-color">{headerTitleLine2[0]}</span>
					&nbsp;{headerTitleLine2[1]}
					<span className="text-hologram-color">{translations.dot}</span>
				</p>
				<p>
					<span className="text-hologram-color">{headerTitleLine3[0]}</span>
					&nbsp;{headerTitleLine3[1]}
					<span className="text-hologram-color">{translations.dot}</span>
				</p>
			</div>
		</header>
	)
}

export default Header;