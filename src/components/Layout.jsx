import Cabecalho from './Cabecalho'
import MenuLateral from './MenuLateral'
function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <div className="layout">
        <MenuLateral />

        <main className="conteudo">
          {children}
        </main>
      </div>
    </>
  )
}
export default Layout