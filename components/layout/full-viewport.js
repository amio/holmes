export default (props) => {
  return (
    <div style={props.style}>
      {props.children}
      <style jsx>{`
        div {
          height: 100vh;
          width: 100vw;
        }
      `}</style>
    </div>
  )
}
