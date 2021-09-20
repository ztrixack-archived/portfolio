/** @jsxImportSource @emotion/react */
import 'twin.macro'

const Image = ({ src = 'https://i.imgur.com/ftwj01a.jpg' }) => {
  return (
    <div tw="w-full lg:w-2/5">
      <img src={src} tw="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
    </div>
  )
}

export default Image
