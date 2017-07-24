import Base from '../components/layout/base.js'
import Center from '../components/layout/center.js'
import HeroIcon from '../components/hero-icon.js'

export default (props) => {
  return (
    <Base title='Amio'>
      <div className='upside'>
        <Center className='upside'>
          <HeroIcon />
        </Center>
      </div>

      <div className='downside'>
        <a href='http://blog.amio.us/'>Blog</a>
        <a href='https://github.com/amio'>Github</a>
        <a href='https://twitter.com/amiocn'>Twitter</a>
        <a href='https://instagram.com/amiocn'>Instagram</a>
      </div>

      <style jsx>{`
        .upside {
          height: 50vh;
          background-color: #FAFAFA;
          user-select: none;
        }
        .downside {
          height: 50vh;
          background-color: #222;
          text-align: center;
          box-sizing: border-box;
          padding-top: 1vh;
          user-select: none;
        }
        .downside a {
          color: #999;
          margin: 3vh 2vw;
          font-size: 16px;
          display: inline-block;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid transparent;
        }
        .downside a:hover {
          color: #EEE;
          border-bottom: 1px solid #EEE;
        }
        @media (max-width: 400px) {
          .downside {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </Base>
  )
}
