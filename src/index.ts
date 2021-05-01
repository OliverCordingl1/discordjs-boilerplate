'use strict';
require('dotenv')
	.config();

import * as Discord from 'discord.js';
import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { DiscordEvent, Module } from './Module';

const client = new Discord.Client();
let modules: {[key: string]: Discord.Collection<string, Module>} = {};
modules.events = new Discord.Collection();
modules.commands = new Discord.Collection();

var eventsPath = resolve(__dirname, 'Events');
readdirSync(eventsPath)
	.filter(filename => filename.endsWith('.js') 
			|| filename.endsWith('.ts'))
	.forEach(filename => {
		let event:DiscordEvent = require(resolve(eventsPath, filename)).default;

		console.log(`${event.eventName} loaded`);

		modules.events.set(event.eventName, event);
		client.on(event.eventName, (a1, a2) => event.execute(client, [a1, a2]));
	});

client.login(process.env.DISCORD_API_TOKEN);