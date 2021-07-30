/** @jsxImportSource @emotion/react */
import { useRef } from 'react'
import tw from 'twin.macro'
import LoadingBar from 'react-top-loading-bar'

const Container = tw.div`max-w-4xl mx-auto p-5 mt-5`
const Heading = tw.h1`text-blue-500 text-2xl p-2`
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4`

const App = () => {
  const ref = useRef(null)

  return (
    <>
      <LoadingBar color="#f11946" ref={ref} />
      <Container>
        <Heading>Hello world</Heading>
        <Button onClick={() => ref.current.continuousStart()}>Start Continuous Loading Bar</Button>
        <Button onClick={() => ref.current.staticStart()}>Start Static Loading Bar</Button>
        <Button onClick={() => ref.current.complete()}>Complete</Button>
      </Container>
    </>
  )
}

export default App
