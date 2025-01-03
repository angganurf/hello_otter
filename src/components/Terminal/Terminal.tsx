import React from "react";
import { useTerminal } from "../../hooks/useTerminal";
import { TerminalHeader } from "./components/TerminalHeader";
import { TerminalOutput } from "./components/TerminalOutput";
import { TerminalInput } from "./components/TerminalInput";
import { TerminalLoading } from "./components/TerminalLoading";
import { ProfileView } from "../ProfileView";
import { SocialLinks } from "../SocialLinks";

interface TerminalProps {
	onNavigate?: (section: string) => void;
}

export const Terminal: React.FC<TerminalProps> = ({ onNavigate }) => {
	const {
		input,
		setInput,
		output,
		activeProfile,
		isExpanded,
		isLoading,
		handleCommand,
		handleProfileClose,
		handleKeyDown,
	} = useTerminal(onNavigate);

	return (
		<div className="w-full">
			<div
				className={`flex gap-4 transition-all duration-300 terminal-container ${
					isExpanded ? "w-full" : "w-full"
				}`}
			>
				<div
					className={`${
						isExpanded ? "w-1/2" : "w-full"
					} flex flex-col bg-black/80 backdrop-blur-md rounded-lg border border-[#F6BD7A]/30 shadow-lg shadow-[#F6BD7A]/20 transition-all duration-300 h-[600px]`}
				>
					<TerminalHeader onNavigate={onNavigate} />
					<div className="flex-1 flex flex-col overflow-hidden">
						<TerminalOutput lines={output}>
							{isLoading && <TerminalLoading />}
						</TerminalOutput>
						<TerminalInput
							value={input}
							onChange={setInput}
							onSubmit={handleCommand}
							onKeyDown={handleKeyDown}
						/>
					</div>
				</div>

				{activeProfile && isExpanded && (
					<ProfileView character={activeProfile} onClose={handleProfileClose} />
				)}
			</div>
			<SocialLinks />
		</div>
	);
};
