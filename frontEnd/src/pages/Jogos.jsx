import { useEffect, useState } from "react";
import { listarJogos, criarJogo, deletarJogo } from "../api/jogos";

export default function Jogos() {
  const [jogos, setJogos] = useState([]);
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [msg, setMsg] = useState("");

  async function carregar() {
    const data = await listarJogos();
    setJogos(data);
  }

  useEffect(() => { carregar(); }, []);

  async function adicionar(e) {
    e.preventDefault();
    setMsg("");
    if (!nome || !genero) return setMsg("Preencha nome e gênero.");

    await criarJogo({ nome, genero });
    setNome(""); setGenero("");
    setMsg("Jogo criado!");
    carregar();
  }

  async function remover(id) {
    await deletarJogo(id);
    carregar();
  }

  return (
    <div className="page">
      <h2>Jogos</h2>

      <form className="row" onSubmit={adicionar}>
        <input placeholder="Nome do jogo" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input placeholder="Gênero (FPS, Battle Royale...)" value={genero} onChange={(e) => setGenero(e.target.value)} />
        <button className="btn">Adicionar</button>
      </form>

      {msg && <p className="hint">{msg}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Nome</th><th>Gênero</th><th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {jogos.map((j) => (
            <tr key={j.id}>
              <td>{j.id}</td>
              <td>{j.nome}</td>
              <td>{j.genero}</td>
              <td>
                <button className="btn danger" onClick={() => remover(j.id)}>Excluir</button>
              </td>
            </tr>
          ))}
          {jogos.length === 0 && (
            <tr><td colSpan="4">Nenhum jogo cadastrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}