-- CRIAÇÃO DAS TABELAS
/*
create table clientes(
    codigo int not null auto_increment,
    nome varchar(100),
    razao varchar(100),
    dataCadastro date,
    telefone varchar(20),
    primary key (codigo)
);
*/

-- desc clientes;

-- alter table clientes auto_increment = 100;
/*
create table fornecedores(
    codigo int not null auto_increment,
    nome varchar(100),
    razao varchar(100),
    telefone varchar(20),
    primary key(codigo)
);
*/
/*
create table vendedores(
    codigo int not null auto_increment,
    nome varchar(100),
    razao varchar(100),
    telefone varchar(20),
    porcentagemComissao float(10,2),
    primary key(codigo)
);
*/
/*
create table produtos(
    codigo int not null auto_increment,
    descricao varchar(100),
    valor float(10,2),
    situacao varchar(1),
    codigoFornecedor int,
    primary key(codigo)
);
*/
/*
create table vendas(
    codigo int not null auto_increment,
    codigoCliente int,
    codigoVendedor int,
    valorVenda float(10,2),
    descontoVenda float(10,2),
    totalVenda float(10,2),
    dataVenda date,
    primary key(codigo)
);
*/
/*
create table itensVenda(
    codigo int not null auto_increment,
    codigoVenda int,
    codigoProduto int,
    desconto float(10,2),
    quantidade int,
    valor float(10,2),
    primary key(codigo)
);
*/