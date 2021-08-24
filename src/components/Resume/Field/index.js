/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'

import { TerminalField } from './style'
import { FaBackward, FaDownload, FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Field = ({ theme, setTheme, setErrorScene }) => {
  const onClick = () => {
    setErrorScene(false)
    setTheme('dark')
  }

  return (
    <TerminalField id="field" theme={theme.field} tabIndex={0}>
      <div tw="flex items-center justify-center h-full">
        <div tw="w-auto text-center">
          <FaExclamationTriangle color="yellow" size={128} style={{ margin: 'auto' }} />
          <div tw="font-bold text-5xl mt-4">Oops!</div>
          <div tw="text-3xl mt-4">Something went wrong</div>
          <div tw="font-bold text-3xl mt-8">
            PLEASE{' '}
            <Link tw="underline" to={{ pathname: 'https://www.linkedin.com/in/tanawat' }} target="_blank">
              CONTACT ME!
            </Link>{' '}
            :D
          </div>
          <div tw="text-xs mt-12">
            <button
              tw="bg-transparent hover:bg-red-500 text-red-700 hover:text-white font-bold py-2 px-4 w-32 border border-red-500 hover:border-transparent rounded mx-2"
              onClick={onClick}
            >
              <FaBackward tw="inline-block fill-current w-4 h-4 mr-2" />
              <span>Restart</span>
            </button>
            <Link as="button" to={{ pathname: `${process.env.PUBLIC_URL}/cv-tanawat-short.pdf` }} target="_blank">
              <button tw="bg-transparent hover:bg-red-500 text-red-700 hover:text-white font-bold py-2 px-4 w-32 border border-red-500 hover:border-transparent rounded mx-2">
                <FaDownload tw="inline-block fill-current w-4 h-4 mr-2 animate-bounce" />
                <span>CV</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </TerminalField>
  )
}

export default Field
