import AmioCN from './amio.cn.js'
import MurmNET from './murm.net.js'
import Universe from './universe.js'

const Home = props => {
  switch (props.host) {
    case 'amio.cn':
      return <AmioCN {...props} />
    case 'amio.us':
      return <AmioCN {...props} />
    case 'murm.net':
      return <MurmNET {...props} />
    default:
      return <Universe {...props} />
  }
}

Home.getInitialProps = async ({ req }) => {
  return {
    host: req ? req.headers.host : window.location.host
  }
}

export default Home
