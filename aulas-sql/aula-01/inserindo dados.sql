
insert into clientes( nome, razao, dataCadastro, telefone) values
('Cleyton Rodrigues' , '' , '2019-12-30' , '19 99999-9999'),  
('Clau Doces', 'Claudia Ltda', '2020-01-19','19 3456-7344'),
('Cartucho e Cia', 'Info ltda' , '2020-01-15','19 3456-4578');

select * from clientes;

delete from clientes;

truncate table clientes;

insert into fornecedores(nome, razao, telefone)
values
('Coca Cola', 'Coca Cola do Brasil','11 1234-9878'),
('Antártica' , 'Antártica SA' , '11 6532-9898'),
('Dolly' , 'Dolly Guaraná' , '11 9898-7878');

select * from fornecedores