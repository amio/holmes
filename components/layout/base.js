import Head from 'next/head'
import FullViewport from './full-viewport.js'

export default (props) => {
  const title = props.title || 'The Unknown'
  const favicon = props.favicon || '/static/favicon-192.png'
  return (
    <FullViewport>
      <Head>
        <title>{title}</title>
        <link rel='icon' type='image/png' href={favicon} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      {props.children}
      <style global jsx>{`
        html, body {
          height: 100%;
          margin: 0;
          font: 14px/1.8em -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Avenir, sans-serif;
        }
      `}</style>
    </FullViewport>
  )
}
