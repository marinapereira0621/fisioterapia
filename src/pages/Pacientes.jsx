
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import Botao from '../components/Botao'

function Pacientes() {
  const [busca, setBusca] = useState('')

  const pacientes = [
    { id: 1, nome: 'Ana Souza', idade: 25, telefone: '(24) 99999-1111' },
    { id: 2, nome: 'Carlos Oliveira', idade: 32, telefone: '(24) 99999-2222' },
    { id: 3, nome: 'Mariana Santos', idade: 40, telefone: '(24) 99999-3333' }
  ]

  const pacientesFiltrados = pacientes.filter((paciente) =>
    paciente.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div>
      <h1>Pacientes</h1>
      <p>Gerenciamento de pacientes da clínica.</p>

      <div className="pesquisa">
        <CampoTexto
          label="Pesquisar paciente"
          placeholder="Digite o nome"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <Botao onClick={() => setBusca('')}>
          Limpar
        </Botao>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Telefone</th>
          </tr>
        </thead>

        <tbody>
          {pacientesFiltrados.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nome}</td>
              <td>{paciente.idade} anos</td>
              <td>{paciente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Pacientes
