import React from "react";
import { X, Brain, User, Zap } from "lucide-react";
import { Character } from "../types";

interface AgentModalProps {
	character: Character;
	onClose: () => void;
}

export const AgentModal: React.FC<AgentModalProps> = ({
	character,
	onClose,
}) => {
	const getTypeInfo = () => {
		switch (character.id) {
			case "symbiex":
				return {
					type: "HUMAN",
					icon: User,
					bgColor: "bg-black/80",
					textColor: "text-cyan-400",
					borderColor: "border-cyan-400",
				};
			case "symbaiex":
				return {
					type: "OTTER",
					icon: Zap,
					bgColor: "bg-gradient-to-r from-cyan-950/80 to-pink-950/80",
					textColor:
						"bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text",
					borderColor: "border-cyan-400/50 border-r-pink-400/50",
				};
			default:
				return {
					type: "AI",
					icon: Brain,
					bgColor: "bg-black/80",
					textColor: "text-pink-400",
					borderColor: "border-pink-400",
				};
		}
	};

	const { type, icon: Icon, bgColor, textColor, borderColor } = getTypeInfo();

	const getChatCommand = () => `otter chat ${character.id}`;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/60 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal */}
			<div
				className="relative w-full max-w-4xl h-[90vh] bg-black/90 border border-[#F6BD7A]/30 
                    rounded-lg shadow-lg shadow-[#F6BD7A]/20 animate-slide-in overflow-hidden flex flex-col"
			>
				{/* Header */}
				<div className="flex items-center justify-between px-4 py-3 border-b border-[#F6BD7A]/30">
					<div className="flex items-center gap-3">
						<h3 className="text-cyan-400 font-mono text-xl">
							{character.name}
						</h3>
						<div className="relative">
							{/* Black background layer */}
							<div className="absolute inset-0 bg-black/90 rounded-full" />
							{/* Gradient layer */}
							<div
								className={`relative flex items-center gap-1.5 px-2 py-1 rounded-full 
                           ${bgColor} border ${borderColor}`}
							>
								<Icon
									className={
										character.id === "symbaiex"
											? "w-3 h-3 text-cyan-400"
											: `w-3 h-3 ${textColor}`
									}
								/>
								<span
									className={`font-mono text-xs font-semibold ${textColor}`}
								>
									{type}
								</span>
							</div>
						</div>
					</div>
					<button
						onClick={onClose}
						className="text-[#F6BD7A] hover:text-pink-400 transition-colors"
					>
						<X className="w-6 h-6" />
					</button>
				</div>

				{/* Content */}
				<div className="flex-1 p-4 overflow-y-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
						{/* Left Column */}
						<div className="space-y-4">
							<div className="space-y-3">
								<div className="flex items-center justify-between">
									<span className="text-[#F6BD7A] font-mono text-base">
										{character.title}
									</span>
									<span className="px-2.5 py-0.5 bg-[#F6BD7A]/20 rounded-full text-[#F6BD7A] text-sm font-mono">
										{character.status}
									</span>
								</div>

								<div className="space-y-1.5 text-sm font-mono">
									<p className="text-cyan-400">Role: {character.role}</p>
									<p className="text-cyan-400">
										Clearance: {character.clearance}
									</p>
									{character.lastSeen && (
										<p className="text-cyan-400">
											Last Seen: {character.lastSeen}
										</p>
									)}
								</div>

								<div className="flex items-center gap-2">
									<button
										onClick={() => {
											navigator.clipboard.writeText(getChatCommand());
										}}
										className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-lg 
                             border border-[#F6BD7A]/30 hover:border-cyan-400/50 transition-colors"
									>
										<span className="text-[#F6BD7A] font-mono text-sm">
											{getChatCommand()}
										</span>
									</button>
								</div>
							</div>
						</div>

						{/* Right Column - Bio */}
						<div className="h-full overflow-y-auto pr-2 md:max-h-[calc(90vh-8rem)]">
							<div className="font-mono text-sm text-gray-300 leading-relaxed whitespace-pre-line">
								{character.bio}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
