import { Command } from "../../types";

export const tokenCommands: Command[] = [
	{
		command: "otter",
		description: "Display $OTTER token information",
		category: "token",
		action: (args) => {
			if (args[0] === "-h") {
				return [
					"Usage: otter [-h] [info|stats|supply]",
					"",
					"Display information about the $OTTER token.",
					"",
					"Options:",
					"  -h           Show this help message",
					"  info         Show general token information",
					"  stats        Display current statistics",
					"  supply       Show supply distribution",
					"",
					"Example:",
					"  otter info    Show token information",
					"  otter stats   Show current statistics",
				];
			}

			const subcommand = args[0]?.toLowerCase();

			switch (subcommand) {
				case "info":
					return [
						"$OTTER TOKEN INFORMATION",
						"---------------------",
						"Name: SYMBIEX Token",
						"Symbol: $otter",
						"Network: Solana",
						"Contract: otter...x892",
						"",
						"The key to deeper system access",
						"and participation in Experiment 1.",
					];

				case "stats":
					return [
						"$OTTER TOKEN METRICS",
						"-----------------",
						"Current Price: ◎0.00042",
						"Market Cap: ◎42,000",
						"Volume (24h): ◎1,337",
						"Holders: 247",
						"",
						"Network participation: HIGH",
					];

				case "supply":
					return [
						"$OTTER SUPPLY DISTRIBUTION",
						"-----------------------",
						"Total Supply: 1,000,000,000 otter",
						"Circulating: 250,000,000 otter",
						"",
						"Distribution:",
						"- Community: 40%",
						"- Development: 30%",
						"- Treasury: 20%",
						"- Team: 10%",
					];

				default:
					return [
						"$OTTER TOKEN STATUS",
						"-----------------",
						"Total Supply: 1,000,000,000 otter",
						"Circulating: 250,000,000 otter",
						"Network: Solana",
						"Contract: otter...x892",
						"",
						'Type "otter -h" for more options',
					];
			}
		},
	},
];
