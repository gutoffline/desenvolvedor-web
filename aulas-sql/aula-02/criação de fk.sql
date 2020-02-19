desc vendas;
desc clientes;

show indexes in vendas;

show create table vendas;

/*CRIANDO FK*/
alter table vendas
add constraint fk_codigoCliente foreign key(codigoCliente)
references clientes(codigo);
/*FIM CRIANDO FK*/


/*EXCLUIR FK*/
alter table vendas
drop foreign key fk_codigoCliente;
/*FIM EXCLUIR FK*/

/*EXCLUIR ÍNDICE*/
alter table vendas
drop index fk_codigoCliente;
/*FIM EXCLUIR ÍNDICE*/