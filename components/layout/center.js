export default (props) => {
  return (
    <div style={{...wrapperStyle, ...props.style}}>
      {props.children}
    </div>
  )
}

const wrapperStyle = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
