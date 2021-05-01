import type { DiscordEvent } from '../Module';
import * as Discord from 'discord.js';
import Command from '../Command';

const PREFIX = '!';	// TODO: DON'T HARDCODE THE THINGY

let event: DiscordEvent = {
	eventName: 'message',
	
	execute: (_client: Discord.Client, [message]: [Discord.Message]) => {
		let { content, author, channel }:
			{
				content: string,
				author: Discord.User,
				channel: Discord.Channel,
			} = message;

		// filter the messages that we want to process
		if (!content.startsWith(PREFIX)) return;
		if (author.bot) return;
		if (channel.type === 'dm') return;

		let command: Command = new Command(content, PREFIX);
		console.log(command.fullCommand);
		console.log(command.splitCommand);
		console.log(command.command);
		console.log(command.args);
	},
}

export default event;
export { event };