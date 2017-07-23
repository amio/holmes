export default (props) => {
  return (
    <div>
      {props.children}
      <style jsx>{`
        div {
          height: 100vh;
        }
      `}</style>
      <style global jsx>{`
        html, body {
          margin: 0;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
