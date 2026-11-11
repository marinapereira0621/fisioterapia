function Botao({ children, onClick, type = "button" }) {
  return (
    <button
      className="botao"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Botao