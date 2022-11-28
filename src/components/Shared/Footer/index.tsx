import { ButtonSocialProps } from 'components/Buttons/ButtonSocial'

import { ButtonSocialTemplate } from './templates/ButtonSocialTemplate'

import {
  FooterCompanyName,
  FooterContainer,
  FooterCopyright,
  FooterTitle,
  SocialButtonsContainer,
} from './style'

interface FooterProps {
  title: string
  items: ButtonSocialProps[]
  company: string
  linkCompany: string
}

export const Footer = ({ title, items, company, linkCompany }: FooterProps) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className={FooterContainer}>
      <h2 className={FooterTitle}>{title}</h2>
      <div className={SocialButtonsContainer}>
        {items.map(ButtonSocialTemplate)}
      </div>
      <span className={FooterCopyright}>
        ©{' '}
        <a
          className={FooterCompanyName}
          href={linkCompany}
          target="_blank"
          rel="noreferrer"
        >
          {company}
        </a>{' '}
        - {currentYear}
      </span>
    </footer>
  )
}
