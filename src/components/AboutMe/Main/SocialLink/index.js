/** @jsxImportSource @emotion/react */
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import 'twin.macro'

const socialIcon = {
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  github: FaGithub,
  youtube: FaYoutube,
  instagram: FaInstagram,
}

const SocialLink = ({ icon, to }) => {
  const Icon = socialIcon[icon]
  return (
    <Link as="a" to={{ pathname: to }} target="_blank" tw="h-6 fill-current text-gray-600 hover:text-blue-500">
      <Icon size="lg" />
    </Link>
  )
}

export default SocialLink
