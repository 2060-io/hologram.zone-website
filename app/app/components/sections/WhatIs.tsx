import React from "react";
import { Translations } from "@/app/page";
import Image from "next/image";

interface WhatIs {
	translations: Translations;
};

const WhatIs: React.FC<WhatIs> = ({ translations }) => {
	return (
		<section>
			<div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row">
				<div className="flex-1 flex items-center justify-center order-2 2xl:xl:lg:order-1">
					<Image
						src="images/what-is-hologram.svg"
						alt="what is hologram"
						width={395}
						height={550}
					/>
				</div>
				<div className="flex-1 text-justify 2xl:px-20 xl:px-20 lg:px-20 order-1 2xlorder-2 :xl:order-2 lg:order-2">
					<p 
						className="
							mb-6
							2xl:pt-20
							xl:pt-20
							lg:pt-20
							font-semibold
							text-center
							2xl:text-left
							xl:text-left
							lg:text-left
							text-hologram-color
							text-4xl
							2xl:text-5xl
							xl:text-5xl
							lg:text-5xl">
							{translations?.what_is_title}
					</p>
					<p>
						{translations?.what_is}
					</p>
				</div>
			</div>
		</section>
	);
};

export default React.memo(WhatIs);