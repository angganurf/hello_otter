import type { Command } from "../../types";

export const chatCommands: Command[] = [
	{
		command: "chat",
		description: "Interact with system agents",
		category: "profiles",
		action: (args: string[]) => {
			if (args[0] === "-h") {
				return [
					"Usage: otter chat [-h] [agent]",
					"",
					"Set active chat agent or view current agent.",
					"",
					"Available Agents:",
					"  symbaiex   - The Symbiotic Entity",
					"  nyx       - The Cryptic Observer",
					"  umbra     - The Digital Archivist",
					"",
					"Example:",
					"  otter chat nyx    Set NyX as active agent",
					"  otter chat        View current agent",
					"",
					'Note: Type messages without "otter" prefix to chat',
				];
			}

			return [
				"CHAT MODE",
				"---------",
				"Connected to: SYMBaiEX",
				"",
				"Type your message to begin...",
			];
		},
	},
];
