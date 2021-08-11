import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Jadsin", 10000, 12345678900);
diretor.cadastrarSenha("246810")
const gerente = new Gerente("Geralda", 7000, 98765432101); 
gerente.cadastrarSenha("137911")

const cliente = new Cliente("Sotero", 123456789,  "176894");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "246810");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "137911");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "176894");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);



