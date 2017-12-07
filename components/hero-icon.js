export default props => {
  return (
    <div>
      <svg width='1024' height='1024' xmlns='http://www.w3.org/2000/svg'>
        <path fill='#000' fillRule='evenodd'
          d='M512 892l-75-128h150l-75 128zm280-188H232l280-560 280 560z' />
      </svg>
      <style jsx>{`
        svg {
          transform: scale(0.1);
        }
      `}</style>
    </div>
  )
}
