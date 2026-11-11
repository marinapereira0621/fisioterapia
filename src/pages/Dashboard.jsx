import CardIndicador from '../components/CardIndicador'
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo ao sistema da clínica!</p>
      <div className="indicadores">
        <CardIndicador
          titulo="Total de pacientes"
          valor="120"
        />
        <CardIndicador
          titulo="Fisioterapeutas"
          valor="08"
        />
        <CardIndicador
          titulo="Consultas realizadas"
          valor="85"
        />
      </div>
      <div className="painel">
        <h2>Bem-vindo à FisioVida</h2>
        <p>
          Aqui você pode acompanhar os pacientes,
          consultar os fisioterapeutas e organizar
          as informações da clínica.
        </p>
      </div>
    </div>
  )
}
export default Dashboard