import React from "react"
import Image from "next/image";

const Header = () => {
	return (
		<header className="py-4">
			<div className="flex justify-between mb-5">
				<Image
					src="images/logo-hologram.png"
					alt="Logo"
					width={150}
					height={32}
					className="w-36 h-8"
				/>
				<Image
					src="images/logo-github.svg"
					alt="Logo-gitHub"
					width={32}
					height={32}
					id="logo-github-white"
					className="w-8 h-8"
				/>
				<Image
					src="images/logo-github-white.svg"
					alt="Logo-gitHub"
					width={32}
					height={32}
					id="logo-github-black"
					className="w-8 h-8"
				/>
			</div>
			<div className="text-3xl md:text-5xl lg:text-6xl font-semibold">
				<p>
					<span className="text-hologram-color">Trusted</span> Interactions<span className="text-hologram-color">.</span>
				</p>
				<p>
					<span className="text-hologram-color">Verificable</span> Credentials<span className="text-hologram-color">.</span>
				</p>
				<p>
					<span className="text-hologram-color">Own</span> Your Data<span className="text-hologram-color">.</span>
				</p>
			</div>
		</header>
	)
}

export default Header;