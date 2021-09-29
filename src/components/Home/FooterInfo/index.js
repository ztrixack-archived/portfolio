/** @jsxImportSource @emotion/react */
import 'twin.macro'

import { Footer } from './style'
import { FaCannabis, FaFacebookF, FaFreeCodeCamp, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LINK_FACEBOOK = 'https://www.facebook.com/ztrixack'
const LINK_LINKEDIN = 'https://www.linkedin.com/in/tanawat'
const LINK_GITHUB = 'https://www.github.com/ztrixack'

const FooterInfo = () => {
  return (
    <Footer>
      <div tw="max-w-screen-lg mx-auto px-3 flex">
        <div tw="flex-1 text-left" data-aos="fade-up-right">
          <div tw="my-3">
            <FaFreeCodeCamp tw="inline text-4xl" />
          </div>
          <p>© 2021 Lazts, all rights reserved</p>
        </div>
        <div tw="flex-1 text-right" data-aos="fade-up-left">
          <div>
            <Link as="a" to={{ pathname: LINK_FACEBOOK }} target="_blank" tw="hover:text-blue-500">
              <FaFacebookF tw="inline m-4 text-xl" />
            </Link>

            <Link as="a" to={{ pathname: LINK_LINKEDIN }} target="_blank" tw="hover:text-blue-500">
              <FaLinkedinIn tw="inline m-4 text-xl" />
            </Link>

            <Link as="a" to={{ pathname: LINK_GITHUB }} target="_blank" tw="hover:text-blue-500">
              <FaGithubAlt tw="inline m-4 text-xl" />
            </Link>
          </div>
          <p>
            <Link to="/about" tw="m-4 hover:text-blue-500">
              <span>About Me</span>
            </Link>
          </p>
        </div>
      </div>
      <div tw="py-4">
        <FaCannabis tw="mx-auto" color="lime" />
      </div>
    </Footer>
  )
}

export default FooterInfo
