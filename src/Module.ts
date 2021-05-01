'use strict'
import * as Discord from 'discord.js';

interface Module {}

interface DiscordEvent extends Module {

	eventName: string,
	execute(client: Discord.Client, args: any[]): void

}

export default Module;
export type { Module };
export type { DiscordEvent };
