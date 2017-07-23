import Base from '../components/layout/base.js'
import Center from '../components/layout/center.js'
import Amcon from '../static/Amcon.svg'

export default (props) => {
  return (
    <Base title='Amio'>
      <div className='upside'>
        <Center className='upside'>
          <Amcon className='amcon' />
        </Center>
      </div>

      <div className='downside'>
        <p className='links'>
          <a href='http://blog.amio.us/'>Blog</a>
          <a href='https://github.com/amio'>Github</a>
          <a href='https://twitter.com/amiocn'>Twitter</a>
          <a href='https://instagram.com/amiocn'>Instagram</a>
        </p>
      </div>

      <style jsx>{`
        .upside {
          height: 50vh;
          background-color: #FAFAFA;
        }
        .downside {
          height: 50vh;
          background-color: #222;
          text-align: center;
          box-sizing: border-box;
          padding-top: 2rem;
        }
        .downside a {
          color: #AAA;
          margin: 2vw;
          font-size: 16px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .downside a:hover {
          color: #EEE;
          border-bottom: 1px solid #EEE;
        }
      `}</style>

      <style global jsx>{`
        body {
          user-select: none;
        }
        .amcon {
          border-radius: 100px;
          width: 128px;
          height: 128px;
          background-color: #222;
        }
        .amcon path {
          fill: white
        }
      `}</style>
    </Base>
  )
}
