import type { DiscordEvent } from '../Module';
import * as Discord from 'discord.js';

let event: DiscordEvent = {
	eventName: 'ready',

	execute: (client: Discord.Client) => {
		console.log(`${(client.user?.username) || 'Client'} has logged in on ${client.guilds.cache.size} servers and is ready to rock 😎`);
	},
}

export default event;
export { event };