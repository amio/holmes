import Amcon from '../static/Amcon.svg'

const ICON_SIZE = '128px'

export default (props) => {
  return <div>
    <Amcon />
    <style jsx>{`
      div {
        width: 12vh;
        height: 12vh;
        border-radius: ${ICON_SIZE};
        background-color: #111;
        border: 2px solid #111;
      }
      div :global(svg) {
        width: 12vh;
        height: 12vh;
      }
      div :global(path) {
        fill: #FFF;
      }
    `}</style>
  </div>
}
