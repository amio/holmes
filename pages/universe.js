import Head from 'next/head'

export default (props) => {
  return (
    <div style={styles.wrapper}>
      <Head>
        <title>The {props.title || props.host}</title>
        <link rel='icon' size='any' type='image/svg+xml' href='/static/asym.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div style={styles.content}>
        <style dangerouslySetInnerHTML={{ __html: 'body { margin: 0 }' }} />
        <h1 style={styles.h1}>{ props.title || 'UNIVERSE' }</h1>
        <div style={styles.desc}>
          <h2 style={styles.h2}>{props.desc || props.host || '=.='}</h2>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  content: {
    letterSpacing: '0.1em'
  },

  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '50px',
    height: '50px',
    verticalAlign: 'middle'
  },

  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '21px',
    paddingRight: '24px',
    fontSize: '32px',
    lineHeight: '50px',
    fontWeight: 500,
    verticalAlign: 'top',
    textTransform: 'uppercase'
  },

  h2: {
    fontSize: '16px',
    fontWeight: 400,
    margin: 0,
    padding: 0
  }
}
