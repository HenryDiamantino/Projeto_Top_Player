import { useEffect, useState } from "react";
import { listarPlayers, criarPlayer, deletarPlayer } from "../api/players";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [nickname, setNickname] = useState("");
  const [plataforma, setPlataforma] = useState("PC");
  const [msg, setMsg] = useState("");

  async function carregar() {
    const data = await listarPlayers();
    setPlayers(data);
  }

  useEffect(() => { carregar(); }, []);

  async function adicionar(e) {
    e.preventDefault();
    setMsg("");
    if (!nickname) return setMsg("Preencha o nickname.");

    await criarPlayer({ nickname, plataforma });
    setNickname("");
    setMsg("Player criado!");
    carregar();
  }

  async function remover(id) {
    await deletarPlayer(id);
    carregar();
  }

  return (
    <div className="page">
      <h2>Players</h2>

      <form className="row" onSubmit={adicionar}>
        <input placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />

        <select value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
          <option value="PC">PC</option>
          <option value="PS">PS</option>
          <option value="XBOX">XBOX</option>
          <option value="MOBILE">MOBILE</option>
          <option value="SWITCH">SWITCH</option>
          <option value="OUTRO">OUTRO</option>
        </select>

        <button className="btn">Adicionar</button>
      </form>

      {msg && <p className="hint">{msg}</p>}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th><th>Nickname</th><th>Plataforma</th><th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nickname}</td>
              <td>{p.plataforma}</td>
              <td>
                <button className="btn danger" onClick={() => remover(p.id)}>Excluir</button>
              </td>
            </tr>
          ))}
          {players.length === 0 && (
            <tr><td colSpan="4">Nenhum player cadastrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}