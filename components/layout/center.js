export default (props) => {
  return (
    <div style={props.style}>
      {props.children}
      <style jsx>{`
        div {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
