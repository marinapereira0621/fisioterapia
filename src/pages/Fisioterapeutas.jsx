function Fisioterapeutas() {
  const profissionais = [
    { id: 1, nome: 'João Silva', especialidade: 'Ortopedia' },
    { id: 2, nome: 'Maria Souza', especialidade: 'Fisioterapia Esportiva' },
    { id: 3, nome: 'Pedro Santos', especialidade: 'Neurologia' }
  ]
  return (
    <div>
      <h1>Fisioterapeutas</h1>
      <p>Profissionais da nossa clínica.</p>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {profissionais.map((profissional) => (
            <tr key={profissional.id}>
              <td>{profissional.nome}</td>
              <td>{profissional.especialidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Fisioterapeutas