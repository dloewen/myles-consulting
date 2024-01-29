import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>myles.consulting</span>,
  project: {
    link: 'https://github.com/dloewen/myles-consulting',
  },
  docsRepositoryBase: 'https://github.com/dloewen/myles-consulting',
  footer: {
    text: <>
      © 2024 myles.consulting | Built with the <a href="https://nextra.site/">Nextra framework</a>
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

