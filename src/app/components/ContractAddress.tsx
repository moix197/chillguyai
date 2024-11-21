import { Copy } from "lucide-react";
import React, { useState } from "react";
//const [isVisibleTokenInfo, setTokenInfoState] = useState(true);

export default function ContractAddress({ text = "" }) {
	const [isCaClicked, setCtaClicked] = useState(false);
	function copyContractToClipboard() {
		navigator.clipboard.writeText(
			"F9CJvVVYPNQTq53RJA62Gk2VUMtXAdMXQy318xipCtej"
		);
		setCtaClicked(true);
		setTimeout(function () {
			setCtaClicked(false);
		}, 1000);
	}
	return (
		<div className="w-full flex justify-center">
			<div className={` animate-pulse ${isCaClicked ? "" : "hidden"}`}>
				<span className="text-white">COPIED</span>
			</div>
			<div
				onClick={copyContractToClipboard}
				className={`white-space-nowrap text-secondary flex justify-center items-center row cursor-pointer hover:opacity-40 ${
					isCaClicked ? "hidden" : ""
				}`}
			>
				<span className="text-white">{!text ? "CA:" : text}</span>
				<span className="ml-2 mr-2  ml-1 tracking-widest text-white">
					F9CJ...pCtej
				</span>
				<Copy className="ml-1 text-third text-white" />
			</div>
		</div>
	);
}
