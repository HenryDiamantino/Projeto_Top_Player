import { api } from "./api";

export async function listarJogos() {
  const { data } = await api.get("/jogos");
  return data;
}

export async function criarJogo(payload) {
  const { data } = await api.post("/jogos", payload);
  return data;
}

export async function deletarJogo(id) {
  const { data } = await api.delete(`/jogos/${id}`);
  return data;
}