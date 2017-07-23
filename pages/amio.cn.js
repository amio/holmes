import FullPage from '../components/layout/full-page.js'
import Center from '../components/layout/center.js'
import Amcon from '../static/Amcon.svg'

export default (props) => {
  return (
    <FullPage>
      <Center>
        <Amcon className='amcon' />
        <style jsx>{`
          span {
            color: red;
          }
        `}</style>
        <style global jsx>{`
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
      </Center>
    </FullPage>
  )
}
