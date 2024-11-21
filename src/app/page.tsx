"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ContractAddress from "./components/ContractAddress";
import CircuitAnim from "./components/CircuitAnim";

const Hero = () => {
	const [isLastFrame, setIsLastFrame] = useState(false);
	const [text, setText] = useState("");
	const texts = ["CHILL GUY", "EVOLVES TO", "CHILL GUY AI"]; // No change needed for texts

	useEffect(() => {
		let currentIndex = 0;
		let currentText = texts[currentIndex];
		let charIndex = 0;
		let typingForward = true;

		const typeWriterEffect = () => {
			setIsLastFrame(false);
			if (typingForward) {
				setText(currentText.slice(0, charIndex + 1));
				charIndex++;
				if (charIndex === currentText.length) {
					typingForward = false;
					setTimeout(typeWriterEffect, currentIndex == 2 ? 5000 : 1500); // Pause at the end
					setIsLastFrame(currentIndex == 2 && charIndex == currentText.length);
					return;
				}
			} else {
				setText(currentText.slice(0, charIndex - 1));
				charIndex--;
				if (charIndex === 0) {
					typingForward = true;
					currentIndex = (currentIndex + 1) % texts.length;
					currentText = texts[currentIndex];
				}
			}
			setTimeout(typeWriterEffect, typingForward ? 80 : 50);
		};

		typeWriterEffect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Ensure no dependency errors

	return (
		<div className=" flex flex-col min-h-screen bg-gray-900 text-white">
			{/* Top Bar */}
			<header className="flex justify-center items-center z-30 relative w-full h-16 flex items-center px-6">
				<div className="flex justify-center items-center bg-gray-900 py-0 h-full px-8">
					<ContractAddress></ContractAddress>
				</div>
			</header>

			{/* Hero Section */}
			<div className="z-20 absolute top-0 left-0 w-full h-full opacity-100 h-100vh flex justify-center items center overflow-hidden opacity-80">
				<CircuitAnim></CircuitAnim>
			</div>
			<div className="z-30 relative bg-gray-900 flex-1 flex flex-col items-center justify-center relative">
				{/* Background Image */}
				<div className="absolute inset-0 opacity-50">
					<div className="w-full h-full bg-cover bg-center bg-hero bg-no-repeat"></div>
				</div>

				{/* Hero Content */}
				<div className="relative flex items-center justify-center min-h-[64px] mb-10">
					<h1
						className={`text-4xl md:text-6xl font-black font-orbitron text-white ${
							isLastFrame && "animate-pulse"
						}`}
					>
						{text}
					</h1>
					{/* Invisible Placeholder to maintain height */}
					<h1 className="absolute opacity-0 text-4xl md:text-6xl font-bold">
						CHILL GUY&#39;S EVOLUTION {/* Escaped apostrophe */}
					</h1>
				</div>
				<div className="relative z-10 flex flex-col items-center text-center space-y-8">
					{/* Typewriter Effect Text */}

					<div className="w-full flex flex-col justify-center items-center">
						<div className="text-xl mb-4 font-semibold tracking-widest">
							<h5 className="text-white">AI POWERED SOCIAL NETWORKS</h5>
						</div>
						<div className="flex justify-center items-center flex-wrap w-full space-x-10 ">
							<Link href="https://x.com/_chillguyai" target="_blank">
								<div className="flex flex-col justify-center items-center">
									<div className="mb-2">
										<Image
											src="/socials/x_logo.png"
											alt="x"
											width={50}
											height={50}
											className="hover:scale-110 transition-transform"
										/>
									</div>
									<div className="uppercase text-sm">x.com</div>
								</div>
							</Link>

							<Link href="https://x.com/_chillguyai" target="_blank">
								<div className="flex flex-col justify-center items-center  opacity-50">
									<div className="mb-2">
										<Image
											src="/socials/discord_logo.png"
											alt="discord logo"
											width={40}
											height={40}
											className="hover:scale-110 transition-transform"
										/>
									</div>
									<div className="uppercase text-sm">coming...</div>
								</div>
							</Link>

							<Link href="https://x.com/_chillguyai" target="_blank">
								<div className="flex flex-col justify-center items-center  opacity-50">
									<div className="mb-2">
										<Image
											src="/socials/telegram_logo.png"
											alt="telegram logo"
											width={40}
											height={40}
											className="hover:scale-110 transition-transform"
										/>
									</div>
									<div className="uppercase text-sm">coming...</div>
								</div>
							</Link>

							<Link href="https://x.com/_chillguyai" target="_blank">
								<div className="flex flex-col justify-center items-center  opacity-50">
									<div className="mb-2">
										<Image
											src="/socials/tik_tok_logo.png"
											alt="TikTok logo"
											width={40}
											height={40}
											className="hover:scale-110 transition-transform"
										/>
									</div>
									<div className="uppercase text-sm">coming...</div>
								</div>
							</Link>
						</div>
						<div className="mt-12">
							<div className="tracking-widest text-lg uppercase font-semibold mb-4">
								<h5 className="text-white">Also check us on</h5>
							</div>
							<div className="flex justify-center items-center flex-wrap w-full space-x-10 ">
								<Link
									href="https://dexscreener.com/solana/714ucludvuhmpami6nkvjjacpytcqkppvd2sg5dn8nw3"
									target="_blank"
								>
									<div className="flex flex-col justify-center items-center">
										<div className="mb-2">
											<Image
												src="/socials/dexscreener_logo.png"
												alt="Dexscreener logo"
												width={40}
												height={40}
												className="hover:scale-110 transition-transform"
											/>
										</div>
										<div className="uppercase text-sm">dexscreener</div>
									</div>
								</Link>

								<Link
									href="https://birdeye.so/token/F9CJvVVYPNQTq53RJA62Gk2VUMtXAdMXQy318xipCtej?chain=solana"
									target="_blank"
								>
									<div className="flex flex-col justify-center items-center">
										<div className="mb-2">
											<Image
												src="/socials/birdeye_logo.png"
												alt="Birdeye logo"
												width={40}
												height={40}
												className="hover:scale-110 transition-transform"
											/>
										</div>
										<div className="uppercase text-sm">birdeye</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}

			<footer className="flex justify-center items-center z-30 py-6 text-center tracking-wide h-16">
				<p className="flex justify-center items-center bg-gray-900 py-0 px-8 h-16">
					THE CHILLEST AI OUT THERE
				</p>
			</footer>
		</div>
	);
};

export default Hero;
