import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

// lista criada para executar os casos de testes
export default class TestesValidarLista{

    public clientes: Array<Cliente>
    public produtos: Array<Produto>
    public servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>){
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public gerarUsuariosTeste(){
        // Clientes
        this.clientes.push(new Cliente('Angelina', 'Ziraldo', new CPF('87233765626', new Date())))
        this.clientes.push(new Cliente('Bernardo', 'Yago', new CPF('66158113247', new Date())))
        this.clientes.push(new Cliente('Cecilia', 'Xerxes', new CPF('77513597901', new Date())))
        this.clientes.push(new Cliente('Daniel', 'Wilda', new CPF('52179724918', new Date())))
        this.clientes.push(new Cliente('Diana', 'Wilson', new CPF('12154974155', new Date())))
        this.clientes.push(new Cliente('Eric', 'Vitoria', new CPF('77753398024', new Date())))
        this.clientes.push(new Cliente('Fabiola', 'Ulisses', new CPF('33203424010', new Date())))
        this.clientes.push(new Cliente('Gabriel', 'Talita', new CPF('23572520061', new Date())))
        this.clientes.push(new Cliente('Helena', 'Theo', new CPF('81161508040', new Date())))
        this.clientes.push(new Cliente('Icaro', 'Samanta', new CPF('82191377033', new Date())))
        this.clientes.push(new Cliente('Juliana', 'Romulo', new CPF('52376507081', new Date())))
        this.clientes.push(new Cliente('Jean', 'Queila', new CPF('11836899009', new Date())))
        this.clientes.push(new Cliente('Karen', 'Pedro', new CPF('33851696077', new Date())))
        this.clientes.push(new Cliente('Luis', 'Olivia', new CPF('20294030085', new Date())))
        this.clientes.push(new Cliente('Monique', 'Nelson', new CPF('39387663019', new Date())))
        this.clientes.push(new Cliente('Natanael', 'Miriam', new CPF('01671415035', new Date())))
        this.clientes.push(new Cliente('Nicole', 'Leonardo', new CPF('28641837060', new Date())))
        this.clientes.push(new Cliente('Orlando', 'Kimberly', new CPF('26494158005', new Date())))
        this.clientes.push(new Cliente('Patricia', 'Joao', new CPF('96200240019', new Date())))
        this.clientes.push(new Cliente('Pietro', 'Isis', new CPF('66847450096', new Date())))
        this.clientes.push(new Cliente('Quenia', 'Henrique', new CPF('10970330073', new Date())))
        this.clientes.push(new Cliente('Ricardo', 'Gilda', new CPF('77607516050', new Date())))
        this.clientes.push(new Cliente('Sofia', 'Gustavo', new CPF('17064086093', new Date())))
        this.clientes.push(new Cliente('Thales', 'Fernanda', new CPF('17325679050', new Date())))
        this.clientes.push(new Cliente('Ursula', 'Enzo', new CPF('22586438051', new Date())))
        this.clientes.push(new Cliente('Vicente', 'Dalila', new CPF('29971566028', new Date())))
        this.clientes.push(new Cliente('Walesca', 'Cicero', new CPF('67342794058', new Date())))
        this.clientes.push(new Cliente('Xavier', 'Catarina', new CPF('78111707010', new Date())))
        this.clientes.push(new Cliente('Yara', 'Bruno', new CPF('91882130057', new Date())))
        this.clientes.push(new Cliente('Zacarias', 'Aline', new CPF('12448918007', new Date())))

        //Produtos
        this.produtos.push(new Produto('Esmalte Dog', 5))
        this.produtos.push(new Produto('Esmalte Cat', 4))
        this.produtos.push(new Produto('Shampoo Dog', 6))
        this.produtos.push(new Produto('Condicionador Dog', 7))
        this.produtos.push(new Produto('Shampoo Cat', 8))
        this.produtos.push(new Produto('Condicionador Cat', 9))
        this.produtos.push(new Produto('Escova Dog', 10))
        this.produtos.push(new Produto('Escova Cat', 11))
        this.produtos.push(new Produto('Lacinho Dog', 1))
        this.produtos.push(new Produto('Lacinho Cat', 2))
        this.produtos.push(new Produto('Pente Dog', 12))
        this.produtos.push(new Produto('Pente Cat', 13))
        this.produtos.push(new Produto('Fralda Dog', 40))
        this.produtos.push(new Produto('Fralda Cat', 50))
        this.produtos.push(new Produto('Tapete Dog', 60))
        this.produtos.push(new Produto('Tapete Cat', 70))
        this.produtos.push(new Produto('Caixa Areia', 80))
        this.produtos.push(new Produto('Areia', 90))
        this.produtos.push(new Produto('Racao Dog', 100))
        this.produtos.push(new Produto('Racao Cat', 110))
        
        //Serviços
        this.servicos.push(new Servico('Banho Dog', 30))
        this.servicos.push(new Servico('Banho Cat', 40))
        this.servicos.push(new Servico('Tosa Dog', 50))
        this.servicos.push(new Servico('Tosa Cat', 60))
        this.servicos.push(new Servico('Unha Dog', 20))
        this.servicos.push(new Servico('Unha Cat', 25))
        this.servicos.push(new Servico('Massagem Dog', 70))
        this.servicos.push(new Servico('Massagem Cat', 80))
        this.servicos.push(new Servico('Veterinario Dog', 100))
        this.servicos.push(new Servico('Veterinario Cat', 110))
        this.servicos.push(new Servico('Exame Sangue Dog', 120))
        this.servicos.push(new Servico('Exame Sangue Cat', 130))
        this.servicos.push(new Servico('Tratar Dente Dog', 140))
        this.servicos.push(new Servico('Tratar Dente Cat', 150))
        this.servicos.push(new Servico('Adestrar Dog', 160))
        this.servicos.push(new Servico('Adestrar Cat', 170))
        this.servicos.push(new Servico('Castrar Dog', 180))
        this.servicos.push(new Servico('Castrar Cat', 190))
        this.servicos.push(new Servico('Hotelzinho Dog', 200))
        this.servicos.push(new Servico('Hotelzinho Cat', 210))
    }
}