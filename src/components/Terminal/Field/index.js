/** @jsxImportSource @emotion/react */
import React from 'react'
import tw, { styled } from 'twin.macro'
import Text from '../Text'
import MultiText from '../MultiText'
import UserText from '../InputText'
import commands from './commands'

const TerminalField = ({ theme, setTheme, setTitle }) => {
  const [history, setHistory] = React.useState([])
  const [index, setIndex] = React.useState(0)
  const [display, setDisplay] = React.useState([
    { text: 'My Portfolio Terminal' },
    { text: 'Type HELP to see the full list of commands.', hasBuffer: true },
  ])
  const [input, setInput] = React.useState('')

  React.useEffect(() => {
    document.getElementById('field').focus()
  }, [])

  React.useEffect(() => {
    const userElem = document.querySelector('#field')
    userElem.scrollTop = userElem.scrollHeight
  }, [display])

  const handleTyping = React.useCallback(
    e => {
      e.preventDefault()

      const { key, ctrlKey, altKey } = e
      const forbidden = [
        ...Array.from({ length: 12 }, (x, y) => `F${y + 1}`),
        'ContextMenu',
        'Meta',
        'NumLock',
        'Shift',
        'Control',
        'Alt',
        'CapsLock',
        'Tab',
        'ScrollLock',
        'Pause',
        'Insert',
        'Home',
        'PageUp',
        'Delete',
        'End',
        'PageDown',
      ]

      if (!forbidden.some(s => s === key) && !ctrlKey && !altKey) {
        if (key === 'Backspace') {
          setInput(input => input.slice(0, -1))
        } else if (key === 'Escape') {
          setInput(input => '')
        } else if (key === 'ArrowUp' || key === 'ArrowLeft') {
          const upperLimit = index >= history.length

          if (!upperLimit) {
            setIndex(index => index + 1)
            setInput(input => history[index])
          }
        } else if (key === 'ArrowDown' || key === 'ArrowRight') {
          const lowerLimit = index === 0

          if (!lowerLimit) {
            setIndex(index => index - 1)
            setInput(input => history[index - 2] || '')
          }
        } else if (key === 'Enter') {
          if (input.length) {
            setIndex(0)
            setHistory(command => (input === '' ? command : [input, ...command]))
            setDisplay(display => [...display, { text: input, isCommand: true }])
            setInput('')

            handleInputEvaluation(input)
          } else {
            setDisplay(display => [...display, { isCommand: true }])
          }
        } else {
          setIndex(0)
          setInput(input => input + key)
        }
      }
    },
    [input, index, history],
  )

  const handleInputEvaluation = input => {
    try {
      const evaluatedForArithmetic = math.evaluate(input)

      if (!isNaN(evaluatedForArithmetic)) {
        setDisplay(display => [...display, { text: evaluatedForArithmetic }])
        return
      }

      throw Error
    } catch (err) {
      const cleanedInput = input.toLowerCase().trim()
      const dividedInput = cleanedInput.split(' ')
      const parsedCmd = dividedInput[0]
      const parsedParams = dividedInput.slice(1).filter(s => s[0] !== '-')
      const parsedFlags = dividedInput.slice(1).filter(s => s[0] === '-')
      const isError = !commands.some(s => s.command === parsedCmd)

      if (isError) {
        setDisplay(display => [...display, giveError('nr', input)])
      }

      handleInputExecution(parsedCmd, parsedParams, parsedFlags)
      return
    }
  }

  const handleInputExecution = React.useCallback(
    (cmd, params = [], flags = []) => {
      if (cmd === 'help') {
        if (params.length) {
          if (params.length > 1) {
            setDisplay(display => [...display, giveError('bp', { cmd: 'HELP', noAccepted: 1 })])
            return
          }

          const cmdsWithHelp = commands.filter(s => s.help)

          if (cmdsWithHelp.filter(s => s.command === params[0]).length) {
            setDisplay(display => [
              ...display,
              { text: cmdsWithHelp.filter(s => s.command === params[0])[0].help, hasBuffer: true },
            ])
          } else if (commands.filter(s => s.command === params[0]).length) {
            setDisplay(display => [
              ...display,
              {
                text: [
                  `No additional help needed for ${commands
                    .filter(s => s.command === params[0])[0]
                    .command.toUpperCase()}`,
                  commands.filter(s => s.command === params[0])[0].purpose,
                ],
                hasBuffer: true,
              },
            ])
            return
          }

          setDisplay(display => [...display, giveError('up', params[0].toUpperCase())])
          return
        }

        setDisplay(display => [
          ...display,
          {
            text: [
              'Terminal commands:',
              ...commands
                .sort((a, b) => a.command.localeCompare(b.command))
                .filter(({ type }) => type === 'terminal')
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from({ length: 15 - command.length }, x => '.').join(
                      '',
                    )}${purpose}`,
                ),
              '',
              'Portfolio commands:',
              ...commands
                .sort((a, b) => a.command.localeCompare(b.command))
                .filter(({ type }) => type === 'portfolio')
                .map(
                  ({ command, purpose }) =>
                    `${command.toUpperCase()}${Array.from({ length: 15 - command.length }, x => '.').join(
                      '',
                    )}${purpose}`,
                ),
              '',
              'For help about a specific command, type HELP <CMD>, e.g. HELP PROJECT.',
            ],
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'cls' || cmd === 'clear') {
        setDisplay(display => [])
        return
      } else if (cmd === 'start') {
        if (params.length === 1) {
          setDisplay(display => [...display, { text: `Launching ${params[0]}...`, hasBuffer: true }])
          window.open(/http/i.test(params[0]) ? params[0] : `https://${params[0]}`)
          return
        }

        setDisplay(display => [...display, giveError('bp', { cmd: 'START', noAccepted: 1 })])
        return
      } else if (cmd === 'date') {
        setDisplay(display => [
          ...display,
          { text: `The current date is: ${new Date(Date.now()).toLocaleDateString()}`, hasBuffer: true },
        ])
        return
      } else if (cmd === 'cmd') {
        setDisplay(display => [
          ...display,
          { text: 'Launching new instance of the Portfolio Terminal...', hasBuffer: true },
        ])
        window.open('https://portfolio.lazts.com')
        return
      } else if (cmd === 'theme') {
        if (flags.length === 1 && ['-d', '-dark', '-l', '-light'].some(s => s === flags[0])) {
          const themeToSet = flags[0] === '-d' || flags[0] === '-dark' ? 'dark' : 'light'

          setDisplay(display => [
            ...display,
            { text: `Set the theme to ${themeToSet.toUpperCase()} mode`, hasBuffer: true },
          ])
          setTheme(themeToSet)
          return
        }

        setDisplay(display => [...display, giveError(!flags.length ? 'nf' : 'bf', 'THEME')])
        return
      } else if (cmd === 'echo') {
        if (params.length === 0) {
          setDisplay(display => [...display, { text: `Echo is on.`, hasBuffer: true }])
          return
        } else {
          setDisplay(display => [...display, { text: params.join(' '), hasBuffer: true }])
          return
        }
      } else if (cmd === 'exit') {
        return (window.location.href = 'https://portfolio.lazts.com')
      } else if (cmd === 'time') {
        setDisplay(display => [
          ...display,
          { text: `The current time is: ${new Date(Date.now()).toLocaleTimeString()}`, hasBuffer: true },
        ])
        return
      } else if (cmd === 'history') {
        const reverseHistory = [].concat(history).reverse()
        setDisplay(display => [
          ...display,
          {
            text: reverseHistory.map((cmd, index) => `${('.....' + (index + 1) + '...').slice(-8)}${cmd}`),
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'about') {
        setDisplay(display => [
          ...display,
          {
            text: [
              'Hey there!',
              `My name is Tanawat Hongthai. I'm a software developer based around Bangkok, Thailand, specializing in the software ecosystem. I love programming and developing interesting things for both regular folks and developers alike!`,
              `Type CONTACT if you'd like to get in touch - otherwise I hope you enjoy using the rest of the app!`,
            ],
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'experience') {
        setDisplay(history => [
          ...history,
          {
            text: ['Certificates:', '-', '-', '-', '-', '-', '', 'Work:', '-', '-', '-'],
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'skills') {
        setDisplay(display => [
          ...display,
          {
            text: [
              'Languages:',
              'JavaScript',
              '',
              'Libraries/Frameworks:',
              'Node',
              'Express',
              'React',
              'Next',
              'React Native',
              'Redux',
              '',
              'Other:',
              'Git',
              'Firebase',
            ],
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'contact') {
        setDisplay(display => [
          ...display,
          {
            text: [
              'Email: contact@jacoblockett.com',
              'Website: jacoblockett.com',
              'LinkedIn: @jacoblockett',
              'GitHub: @huntinghawk1415',
              'CodePen: @HuntingHawk',
            ],
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'projects') {
        setDisplay(display => [
          ...display,
          {
            text: [
              'To view any of these projects live or their source files, type PROJECT <TITLE>, e.g. PROJECT Minesweeper.',
              '',
              '-',
              '-',
              `-`,
              '',
              '-',
              '-',
              '-',
              '',
              '-',
              '-',
              `-`,
              '',
              '-',
              '-',
              `-`,
              '',
              '-',
              '-',
              '-',
            ],
            hasBuffer: true,
          },
        ])
        return
      } else if (cmd === 'project') {
        if (params.length === 1) {
          const projects = [
            {
              title: '-',
              live: '-',
            },
          ]

          setDisplay(display => [...display, { text: `Launching ${params[0]}...`, hasBuffer: true }])
          window.open(projects.filter(s => s.title === params[0])[0].live)
          return
        }

        setDisplay(display => [...display, giveError('bp', { cmd: 'PROJECT', noAccepted: 1 })])
        return
      } else if (cmd === 'title') {
        setDisplay(display => [
          ...display,
          {
            text: `Set the Portfolio Terminal title to ${params.length > 0 ? params.join(' ') : '<BLANK>'}`,
            hasBuffer: true,
          },
        ])

        setTitle(params.length > 0 ? params.join(' ') : '')

        return
      }
    },
    [history],
  )

  const handleContextMenuPaste = e => {
    e.preventDefault()

    if ('clipboard' in navigator) {
      navigator.clipboard.readText().then(clipboard => setInput(input => `${input}${clipboard}`))
    }
  }

  const giveError = (type, extra) => {
    const err = { text: '', isError: true, hasBuffer: true }

    if (type === 'nr') {
      err.text = `'${extra}' is not recognized as an internal or external command. Check the spelling and try again.\nIf you don't know what commands are recognized, type HELP.`
    } else if (type === 'nf') {
      err.text = `The ${extra} command requires the use of flags. If you don't know what flags can be used, type HELP ${extra}.`
    } else if (type === 'bf') {
      err.text = `The flags you provided for ${extra} are not valid. If you don't know what flags can be used, type HELP ${extra}.`
    } else if (type === 'bp') {
      err.text = `The ${extra.cmd} command requires ${extra.noAccepted} parameter(s). If you don't know what parameters to use, type HELP ${extra.cmd}.`
    } else if (type === 'up') {
      err.text = `The command ${extra} is not supported by the HELP utility.`
    }

    return err
  }

  return (
    <Field
      id="field"
      className={theme.app.backgroundColor === '#333444' ? 'dark' : 'light'}
      style={theme.field}
      onKeyDown={handleTyping}
      tabIndex={0}
      onContextMenu={handleContextMenuPaste}
    >
      {display.map(({ text, isCommand, isError, hasBuffer }, index) => {
        if (Array.isArray(text)) {
          const displayTexts = text.map(t => t.replace(/\./g, '\xa0'))
          return <MultiText key={index} input={displayTexts} isError={isError} hasBuffer={hasBuffer} />
        }

        const displayText = text.replace(/\./g, '\xa0')
        return <Text key={index} input={displayText} isCommand={isCommand} isError={isError} hasBuffer={hasBuffer} />
      })}
      <UserText input={input} theme={theme.cursor} />
    </Field>
  )
}

export default TerminalField

const Field = styled.div`
  font-size: 0.85rem;
  height: calc(100% - 40px);
  padding: 5px;
  overflow: auto;
  overflow-wrap: break-word;
`
