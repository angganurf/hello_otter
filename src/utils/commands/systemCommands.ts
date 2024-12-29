import { Command } from "../../types";
import { getCommandsByCategory } from "./index";
import { terminalStore } from "../../store/terminalStore";
import { userService } from "../../services/user";

export const systemCommands: Command[] = [
	{
		command: "help",
		description: "Display available commands",
		category: "system",
		action: (args) => {
			if (args[0] === "-h") {
				return [
					"USAGE: otter help [-h] [category]",
					"",
					"DESCRIPTION:",
					"Display available commands and their descriptions.",
					"",
					"OPTIONS:",
					"  -h           Show this help message",
					"  category     Filter commands by category",
					"",
					"CATEGORIES:",
					"  system      Core system commands",
					"  network     Network diagnostics",
					"  lore        Access narrative database",
					"  profiles    Entity information",
					"  token       $OTTER operations",
					"  experiment  Experiment controls",
					"",
					"EXAMPLES:",
					"  otter help            Show all commands",
					"  otter help system     Show system commands",
					"  otter help -h         Show this help message",
					"",
					"NOTE: Chat directly with Otter by typing without the otter prefix!",
				];
			}

			const category = args[0]?.toLowerCase();
			const commands = getCommandsByCategory(category);

			if (category && commands.length === 0) {
				return [
					'Error: Category not found. Type "otter help -h" for available categories.',
				];
			}

			return [
				"AVAILABLE COMMANDS:",
				"--------------------------------",
				...commands.map(
					(cmd) => `• ${cmd.command.padEnd(12)} - ${cmd.description}`
				),
				"--------------------------------",
				'EXAMPLE: Type "otter status" for show system status',
				'NOTE: Type "otter [command] -h" for detailed usage',
				"NOTE: Chat directly with Otter by typing without the otter prefix!",
			];
		},
	},
	{
		command: "username",
		description: "Set or view your username",
		category: "system",
		action: (args) => {
			if (args[0] === "-h") {
				return [
					"Usage: otter username [-h] [name]",
					"",
					"Set or view your username.",
					"",
					"Arguments:",
					"  name    New username to set",
					"",
					"Examples:",
					"  otter username         Show current username",
					'  otter username anon    Set username to "anon"',
				];
			}

			const newUsername = args[0]?.trim();
			if (newUsername) {
				userService.setUsername(newUsername);
				return [
					"USERNAME UPDATED",
					"--------------",
					`Username set to: ${newUsername}`,
				];
			}

			const currentUsername = userService.getUsername();
			return [
				"CURRENT USERNAME",
				"---------------",
				currentUsername || "No username set",
				"",
				'Use "otter username <name>" to set username',
			];
		},
	},
	{
		command: "clear",
		description: "Clear terminal output",
		category: "system",
		action: () => {
			terminalStore.clear();
			return [];
		},
	},
	{
		command: "home",
		description: "Return to home page",
		category: "system",
		action: () => ["Navigating to home..."],
	},
	{
		command: "characters",
		description: "View character gallery",
		category: "system",
		action: () => ["Accessing character database..."],
	},
	{
		command: "docs",
		description: "Open documentation",
		category: "system",
		action: () => {
			window.open("https://docs.symbaiex.com", "_blank");
			return ["Opening documentation..."];
		},
	},
];
