export default props => {
  return (
    <div>
      <svg width='1024' height='1024' xmlns='http://www.w3.org/2000/svg' style={{ background: '#000' }}>
        <path d='M512 896l-75-128h150l-75 128zm280-192H232l280-560 280 560z' fill='#FFF' fill-rule='evenodd' />
      </svg>
      <style jsx>{`
        svg {
          border-radius: 2000px;
          border: 2px solid #111;
          transform: scale(0.12);
        }
      `}</style>
    </div>
  )
}
