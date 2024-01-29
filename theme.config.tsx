import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>myles.consulting</span>,
  project: {
    link: 'https://github.com/dloewen4/myles-consulting',
  },
  docsRepositoryBase: 'https://github.com/dloewen4/myles-consulting',
  footer: {
    text: <>
      © 2024 myles.consulting
      <small> | Using the <a href="https://nextra.site/">Nextra framework</a></small>
    </>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – myles.consulting',
      }
    }
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  }
}

export default config

