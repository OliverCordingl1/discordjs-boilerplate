class Command {
	fullCommand: string;
	splitCommand: string[];
	command: string;
	args: string[];

	constructor (command: string, prefix: string) {
		this.fullCommand = command;
		this.splitCommand = command.split(' ');
		this.command = this.splitCommand[0].slice(prefix.length);
		this.args = this.splitCommand.slice(1);
	}
}

export default Command;