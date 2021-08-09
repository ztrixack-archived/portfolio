// command type
// terminal command
// portfolio command

const terminal = [
  {
    command: 'cls',
    purpose: 'Clears the screen.',
  },
  {
    command: 'cmd',
    purpose: 'Starts a new instance of the Portfolio Terminal.',
  },
  {
    command: 'date',
    purpose: 'Displays the current date.',
  },
  {
    command: 'echo',
    purpose: 'Displays messages, or turns command echoing on or off.',
  },
  {
    command: 'exit',
    purpose: 'Quits the Portfolio Terminal',
  },
  {
    command: 'help',
    purpose: 'Provides Help information for Windows commands.',
  },
  {
    command: 'history',
    purpose: 'Displays the pervious commands.',
  },
  {
    command: 'start',
    purpose: 'Starts a separate window to run a specified program or command.',
    help: [
      'START <URL>',
      'Launches a specified URL in a new tab or separate window.',
      '',
      'URL......................The website you want to open.',
    ],
  },
  {
    command: 'theme',
    purpose: 'Sets the color scheme of the Portfolio Terminal.',
    help: [
      'THEME [-l, -light, -d, -dark]',
      'Sets the color scheme of the Portfolio Terminal.',
      '',
      '-l, -light...............Sets the color scheme to light mode.',
      '-d, -dark................Sets the color scheme to dark mode.',
    ],
  },
  {
    command: 'time',
    purpose: 'Displays the current time.',
  },
  {
    command: 'title',
    purpose: 'Sets the window title for the Portfolio Terminal session.',
    help: [
      'TITLE <INPUT>',
      'Sets the window title for the Portfolio Terminal.',
      '',
      'INPUT....................The title you want to use for the Portfolio Terminal window.',
    ],
  },
  {
    command: 'ver',
    purpose: 'Displays the Portfolio Terminal version.',
    help: [
      'TITLE <INPUT>',
      'Sets the window title for the Portfolio Terminal.',
      '',
      'INPUT....................The title you want to use for the Portfolio Terminal window.',
    ],
  },
].map(cmd => ({ ...cmd, type: 'terminal' }))

const portfolio = [
  {
    command: 'about',
    purpose: 'Displays basic information about me.',
  },
  {
    command: 'contact',
    purpose: 'Displays contact information for me.',
  },
  {
    command: 'experience',
    purpose: 'Displays information about my experience.',
  },
  {
    command: 'projects',
    purpose: 'Displays information about what projects I has done in the past.',
  },
  {
    command: 'project',
    purpose: 'Launches a specified project in a new tab or separate window.',
    help: [
      'PROJECT <TITLE>',
      'Launches a specified project in a new tab or separate window.',
      'List of projects currently include:',
      'Minesweeper',
      'PuniUrl',
      'Taggen',
      'Forum',
      'Simon',
      '',
      'TITLE....................The title of the project you want to view.',
    ],
  },
  {
    command: 'skills',
    purpose: 'Displays information about my skills as a developer.',
  },
].map(cmd => ({ ...cmd, type: 'portfolio' }))

export default [...terminal, ...portfolio]
