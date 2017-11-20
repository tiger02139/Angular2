import { Customer } from './Customer';
var blessed = require("blessed");

var customers : Array<Customer> = [];

var screen = blessed.screen({});
screen.title = "Weasley's Wizarding Wheezes";

var content = "Welcome to Weasley's";

var welcome = blessed.box({
	top: 'center',
	left: 'center',
	width: '50%',
	height: '50%',
	content: `{center}${content}{/center}`,
	tags: true,
	border: {
		type: 'line'
	},
	style: {
		fg: 'white',
		bg: 'green',
		border: {
			fg: '#f0f0f0'
		},
		hover: {
			bg: 'green'
		}
	}
});

screen.append(welcome);

screen.key(['escape', 'q', 'C-c', 'C-d'], (ch, key) => {
	return quit();
});

screen.enableInput();
//screen.enableInput(true);

welcome.on('click', (data) => {
	welcome.destroy();
	screen.render();
});

welcome.focus();
screen.render();

function quit() {
	return process.exit(0); 
}
