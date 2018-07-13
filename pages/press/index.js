import React from 'react'
import Content from './press.md'
import {pressData} from './data'

export const meta = {
  path: '/press',
  title: 'Press',
  notRichText: true,
  description:
    'Blockstack is a new internet for decentralized apps that you access through the Blockstack Browser. With Blockstack, there is a new world of apps that let you own your data and maintain your privacy, security and freedom.'
}

class PressPage extends React.PureComponent {
  static async getInitialProps(ctx) {
    return {
      meta
    }
  }

  render() {
    return (
      <>
        <Content />

      </>
    )
  }
}

export default PressPage
