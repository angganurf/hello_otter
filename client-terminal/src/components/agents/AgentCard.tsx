import React from "react";
import { Brain, User, Zap } from "lucide-react";
import { Character } from "../../types";

interface AgentCardProps {
	agent: Character;
	onClick: (agent: Character) => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onClick }) => {
	const getTypeInfo = () => {
		switch (agent.id) {
			case "symbiex":
				return {
					type: "HUMAN",
					icon: User,
					textColor: "text-cyan-400",
					bgColor: "bg-black/80",
				};
			case "symbaiex":
				return {
					type: "SYMX",
					icon: Zap,
					textColor: "text-cyan-400",
					bgColor: "bg-gradient-to-r from-cyan-950/80 to-pink-950/80",
				};
			default:
				return {
					type: "AI",
					icon: Brain,
					textColor: "text-pink-400",
					bgColor: "bg-black/80",
				};
		}
	};

	const { type, icon: Icon, textColor, bgColor } = getTypeInfo();

	return (
		<button
			onClick={() => onClick(agent)}
			className="relative group rounded-lg border border-[#F6BD7A]/30 overflow-hidden transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-[#F6BD7A]/20"
		>
			{/* Text Overlay */}
			<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-8 pb-3 px-3 text-center">
				<h3 className="text-cyan-400 font-mono text-base mb-1">{agent.name}</h3>
				<p className="text-[#F6BD7A] font-mono text-sm mb-1">{agent.title}</p>
				<p className="text-[#F6BD7A]/80 font-mono text-xs">{agent.status}</p>
			</div>

			{/* Type Badge */}
			<div className="absolute top-2 right-2">
				<div
					className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${bgColor} border border-[#F6BD7A]/30`}
				>
					<Icon className={`w-3 h-3 ${textColor}`} />
					<span className={`font-mono text-xs font-semibold ${textColor}`}>
						{type}
					</span>
				</div>
			</div>
		</button>
	);
};
