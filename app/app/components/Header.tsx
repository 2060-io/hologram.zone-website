import React from "react"
import Image from "next/image";

const Header = () => {
	return (
		<header className="py-4">
			<div className="container mx-auto flex justify-between mb-16">
				<Image
					src="images/logo-hologram.png"
					alt="Logo"
					width={150}
					height={32}
				/>
				<Image
					src="images/logo-github.svg"
					alt="Logo-gitHub"
					width={32}
					height={32}
					id="logo-github-white"
				/>
				<Image
					src="images/logo-github-white.svg"
					alt="Logo-gitHub"
					width={32}
					height={32}
					id="logo-github-black"
				/>
			</div>
			<div>
				<p className="text-6xl font-semibold">
					<span className="text-hologram-color">Trusted</span> Interactions<span className="text-hologram-color">.</span>
				</p>
				<p className="text-6xl font-semibold">
					<span className="text-hologram-color">Verificable</span> Credentials<span className="text-hologram-color">.</span>
				</p>
				<p className="text-6xl font-semibold">
					<span className="text-hologram-color">Own</span> Your Data<span className="text-hologram-color">.</span>
				</p>
			</div>
		</header>
	)
}

export default Header;