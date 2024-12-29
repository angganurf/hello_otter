import React from "react";
import {
	Terminal as TerminalIcon,
	Power,
	Copy,
	Check,
	Users,
	Bot,
} from "lucide-react";
import { SocialLinks } from "../SocialLinks";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { UsernamePopup } from "../Terminal/components/UsernamePopup";
import { UsernameDisplay } from "../Terminal/components/UsernameDisplay";
import { userService } from "../../services/user";
import { ADDRESSES } from "../../config/constants";
import logoImage from "../../assets/logo.gif";

interface HomeProps {
	onNavigate: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
	const { copied, copyToClipboard } = useCopyToClipboard();
	const contractAddress = ADDRESSES.CONTRACT;
	const [showUsernameInput, setShowUsernameInput] = React.useState(false);
	const [usernameInput, setUsernameInput] = React.useState("");

	const handleSetUsername = () => {
		if (usernameInput.trim()) {
			userService.setUsername(usernameInput.trim());
			setShowUsernameInput(false);
			setUsernameInput("");
		}
	};

	return (
		<div className="w-full">
			<div className="flex flex-col bg-black/80 backdrop-blur-md rounded-lg border border-[#F6BD7A]/30 shadow-lg shadow-[#F6BD7A]/20 min-h-[600px] max-h-[80vh]">
				{/* Header */}
				<div className="flex items-center gap-1.5 xs:gap-2 p-2 xs:p-3 border-b border-[#F6BD7A]/30 bg-black/40">
					<TerminalIcon className="w-3 h-3 xs:w-4 xs:h-4 text-[#F6BD7A]" />
					<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm sm:text-base">
						Hello_Otter://home
					</span>
					<div className="ml-auto flex items-center gap-2">
						<UsernameDisplay onClick={() => setShowUsernameInput(true)} />
						<Power className="w-3 h-3 xs:w-4 xs:h-4 text-cyan-400" />
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 overflow-y-auto">
					<div className="w-full max-w-lg flex flex-col items-center lg:space-y-6 space-y-3 mt-10">
						<h1 className="text-xl xs:text-2xl sm:text-4xl font-bold text-cyan-400 mb-1 xs:mb-3 sm:mb-2 font-mono mt-10">
							HELLO OTTER
						</h1>
						<div className="rounded-lg border border-[#F6BD7A]/30 overflow-hidden bg-black/40 w-20">
							<img
								src={logoImage}
								alt="Hello Otter"
								className="w-full h-full object-cover object-center"
							/>
						</div>

						<p className="text-[#F6BD7A]/90 font-mono text-xs xs:text-sm sm:text-base text-center px-2">
							I'm just an artist, without a team,
							<br />
							and without an influencer. This meme only depends on trust,
							mentality, heart and belief.
							<br />
							Don't go bankrupt because of gambling, just build trust in 1 coin
							then the community builds it together,
							<br />
							you enter at the beginning. Where human curiosity meets{" "}
							<em>artificial consciousness</em>
							between humanity and AI.
							<br />
							<strong>The evolution begins now.</strong>
						</p>

						<div className="flex flex-col items-center gap-4 w-full px-2">
							<button
								onClick={() => onNavigate("terminal")}
								className="w-full sm:w-auto group flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                         rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg 
                         hover:shadow-[#F6BD7A]/20"
							>
								<TerminalIcon className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
								<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm sm:text-base group-hover:text-pink-400">
									Access Terminal
								</span>
							</button>

							<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
								<button
									onClick={() => onNavigate("characters")}
									className="w-full sm:w-auto group flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                           rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg 
                           hover:shadow-[#F6BD7A]/20"
								>
									<Users className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
									<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm sm:text-base group-hover:text-pink-400">
										View Agents
									</span>
								</button>

								<button
									onClick={() => onNavigate("elizaforge")}
									className="w-full sm:w-auto group flex items-center justify-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                           rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg 
                           hover:shadow-[#F6BD7A]/20"
								>
									<Bot className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
									<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm sm:text-base group-hover:text-pink-400">
										Open Forge
									</span>
								</button>
							</div>

							<button
								onClick={() => copyToClipboard(contractAddress)}
								className="w-full flex items-center justify-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1 xs:py-1.5 bg-black/40 rounded border border-[#F6BD7A]/30 
                       hover:border-cyan-400/50 transition-colors group break-all"
							>
								<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm">
									{contractAddress}
								</span>
								{copied ? (
									<Check className="w-3 h-3 xs:w-4 xs:h-4 text-[#F6BD7A]" />
								) : (
									<Copy className="w-3 h-3 xs:w-4 xs:h-4 text-cyan-400 group-hover:text-cyan-300" />
								)}
							</button>

							<p className="text-cyan-400 font-mono text-xs xs:text-sm sm:text-base text-center">
								Buy $OTTER
							</p>

							<div className="flex flex-col sm:flex-row gap-4 w-full">
								<a
									href="https://pump.fun/coin/CNobr2aU5RrwYkeHeHkkunxTPkWQZVRXfaLxaBhDpump"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-1/3 group flex items-center justify-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                           rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg
                           hover:shadow-[#F6BD7A]/20"
								>
									<TerminalIcon className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
									<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm group-hover:text-pink-400">
										Pump.Fun
									</span>
								</a>

								<a
									href="https://raydium.io/swap/?inputMint=sol&outputMint=CNobr2aU5RrwYkeHeHkkunxTPkWQZVRXfaLxaBhDpump"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-1/3 group flex items-center justify-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                           rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg
                           hover:shadow-[#F6BD7A]/20"
								>
									<TerminalIcon className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
									<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm group-hover:text-pink-400">
										Raydium
									</span>
								</a>

								<a
									href="https://jup.ag/swap/SOL-CNobr2aU5RrwYkeHeHkkunxTPkWQZVRXfaLxaBhDpump"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full sm:w-1/3 group flex items-center justify-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                           rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg
                           hover:shadow-[#F6BD7A]/20"
								>
									<TerminalIcon className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
									<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm group-hover:text-pink-400">
										Jupiter
									</span>
								</a>
							</div>

							<div className="w-full">
								<a
									href="https://dexscreener.com/solana/aw1ay7cbxt7lmcya7tqap1wnfhhsus4v7hpdktdumza6"
									target="_blank"
									rel="noopener noreferrer"
									className="w-full group flex items-center justify-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-1.5 xs:py-2 bg-black/40 border border-[#F6BD7A]/30 
                           rounded-lg transition-all duration-300 hover:bg-[#F6BD7A]/10 hover:shadow-lg
                           hover:shadow-[#F6BD7A]/20"
								>
									<TerminalIcon className="w-4 h-4 xs:w-5 xs:h-5 text-cyan-400 group-hover:text-cyan-300" />
									<span className="text-[#F6BD7A] font-mono text-xs xs:text-sm group-hover:text-pink-400">
										DexScreener
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showUsernameInput && (
				<UsernamePopup
					value={usernameInput}
					onChange={setUsernameInput}
					onSubmit={handleSetUsername}
					onClose={() => {
						setShowUsernameInput(false);
						setUsernameInput("");
					}}
				/>
			)}
			<div className="mt-4">
				<SocialLinks />
			</div>
		</div>
	);
};
