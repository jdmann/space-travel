// import packages - added by Jonathan 07-13-2021 @ 7PM Pacific Time
const express = require('express');
const chalk = require('chalk');
const server = express();
server.listen(3001, () => console.log(chalk.red('listening on port 3001')));
