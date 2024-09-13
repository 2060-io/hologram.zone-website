import React from "react";
import { Translations } from '../../page';
import Image from "next/image";

interface ProofOfTrust {
	translations: Translations
}

const ProofOfTrust: React.FC<ProofOfTrust> = ({ translations }) => {
	return (
		<section>
			<div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row">
				<div className="flex-1 text-justify 2xl:px-20 xl:px-20 lg:px-20 mb-10">
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
						{translations.proof_of_trust_title}
					</p>
					<div className="text-justify">
						<p className="font-semibold mb-5">
							{translations.proof_of_trust_paragraph_1_line_1}
							<br />
							{translations.proof_of_trust_paragraph_1_line_2}
						</p>
						<p className="mb-5">{translations.proof_of_trust_paragraph_2}</p>
						<p>
							<span className="font-semibold">{translations.proof_of_trust_paragraph_3_phrase_1}</span>
							&nbsp;
							{translations.proof_of_trust_paragraph_3_phrase_2}
							&nbsp;
							<span className="font-semibold">{translations.proof_of_trust_paragraph_3_phrase_3}</span>
							&nbsp;
							{translations.proof_of_trust_paragraph_3_phrase_4}
						</p>
					</div>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<Image
						src={"images/proof-of-trust.svg"}
						alt={"proof of trust"}
						width={366}
						height={549}
						className="w"
						priority={false}
					/>
				</div>
			</div>
		</section>
	)
}

export default React.memo(ProofOfTrust);