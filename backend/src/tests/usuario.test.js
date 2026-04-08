import { listarUsuarios, buscarPorId, criarUsuario, buscarUsuarioPorEmail, deletarUsuario } from "../models/usuarioModel";
import { listar, criar, login, deletar, buscarPorId } from "../controllers/usuarioController";

describe("Teste dos usuários", () =>{
    test("Deve listar os usuários", () =>{
        expect(listarUsuarios).toBe()
    })
})