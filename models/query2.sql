insert into roles (role, name, levelaccess) 
	values ('seller', 'vendedor',1);

insert into roles (role, name, levelaccess) 
	values ('manager', 'gerente', 3);

insert into roles (role, name, levelaccess) 
	values ('admin', 'administrador', 5);

insert into users
	(username, password, name, lastname, workshop_id, active, role_id, lastlogin, created, updated) 
	values ('admin',
			'$2a$10$3IYgxcX6i.qEOheOSztYXO/GrxLPVFKRUvB94n7ACjmpGZxC4ORMS', 
			'El admin', 'master', 1, true, 'admin', null, current_date, current_date);
			
insert into clients (number_card, dui, name,creation_date, birthday,state) 
	values ('3000 5874 4589','00124587-9','Cristian Alfaro',current_date,current_date,TRUE);
insert into clients (number_card, dui, name,creation_date, birthday,state) 
	values ('3000 5874 7896','00124587-9','Luis Trujillo',current_date,current_date,TRUE);
insert into clients (number_card, dui, name,creation_date, birthday,state) 
	values ('3000 5874 4826','00124587-9','Jose Luis Gonzales',current_date,current_date,TRUE);
insert into clients (number_card, dui, name,creation_date, birthday,state) 
	values ('3000 5874 3659','00124587-9','Marvin Josue Lopez',current_date,current_date,TRUE);
	

insert into identificative_types(name) values ('Talla Camisa');
insert into identificative_types(name) values ('Talla Pantalon');
insert into identificative_types(name) values ('Talla Calzado');
insert into identificatives(name,type_id) values ('Talla M',1);
insert into identificatives(name,type_id) values ('Talla S',1);
insert into identificatives(name,type_id) values ('Talla L',1);
insert into identificatives(name,type_id) values ('Talla XL',1);
insert into identificatives(name,type_id) values ('Talla XS',1);
insert into identificatives(name,type_id) values ('Talla M',2);
insert into identificatives(name,type_id) values ('Talla S',2);
insert into identificatives(name,type_id) values ('Talla L',2);
insert into identificatives(name,type_id) values ('Numero 28',3);
insert into identificatives(name,type_id) values ('Numero 29',3);
insert into identificatives(name,type_id) values ('Numero 30',3);
insert into identificatives(name,type_id) values ('Numero 32',3);
insert into identificatives(name,type_id) values ('Numero 27',3);
insert into identificatives(name,type_id) values ('Numero 25',3);
insert into product_types(name,type_id) values ('Camisa Polo',1);
insert into product_types(name,type_id) values ('Camisa Manga Larga',1);
insert into product_types(name,type_id) values ('Camisa Tres Cuartos',1);
insert into product_types(name,type_id) values ('Centro',1);
insert into product_types(name,type_id) values ('Tractores',3);
insert into product_types(name,type_id) values ('Pantalon baquero',2);
insert into product_types(name,type_id) values ('Chort',2);
insert into product_types(name,type_id) values ('Jeans',2);
insert into product_types(name,type_id) values ('Zapatilla',3);
insert into product_types(name,type_id) values ('Tacones Altos',3);
insert into product_types(name,type_id) values ('Tacon Corto',3);

insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta tipo polo','Oscar de la renta',50,102.99,1,1);
insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta manga larga','Oscar de la renta',30,150.99,1,1);
	insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta tipo polo','Oscar de la renta',50,102.99,1,1);
insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta manga larga','Oscar de la renta',30,150.99,1,2);
	insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta tipo polo','Oscar de la renta',50,102.99,1,2);
insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta manga larga','Oscar de la renta',30,150.99,1,3);
	insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta tipo polo','Oscar de la renta',50,102.99,1,3);
insert into products (name,brand,stock,price,type_id,identificative_id) 
	values ('Camiseta manga larga','Oscar de la renta',30,150.99,1,4);

insert into users
	(username, password, name, lastname, workshop_id, active, role_id, lastlogin, created, updated) 
	values ('admin2',
			'$2a$10$3IYgxcX6i.qEOheOSztYXO/GrxLPVFKRUvB94n7ACjmpGZxC4ORMS', 
			'El admin 2', 'master 2', 1, true, 'admin', null, current_date, current_date);
insert into users
	(username, password, name, lastname, workshop_id, active, role_id, lastlogin, created, updated) 
	values ('admin3',
			'$2a$10$3IYgxcX6i.qEOheOSztYXO/GrxLPVFKRUvB94n7ACjmpGZxC4ORMS', 
			'El admin', 'master', 1, true, 'admin', null, current_date, current_date);
insert into users
	(username, password, name, lastname, workshop_id, active, role_id, lastlogin, created, updated) 
	values ('manager',
			'$2a$10$3IYgxcX6i.qEOheOSztYXO/GrxLPVFKRUvB94n7ACjmpGZxC4ORMS', 
			'El admin', 'master', 1, true, 'admin', null, current_date, current_date);
insert into users
	(username, password, name, lastname, workshop_id, active, role_id, lastlogin, created, updated) 
	values ('manager 2',
			'$2a$10$3IYgxcX6i.qEOheOSztYXO/GrxLPVFKRUvB94n7ACjmpGZxC4ORMS', 
			'El admin', 'master', 1, true, 'admin', null, current_date, current_date);
insert into users
	(username, password, name, lastname, workshop_id, active, role_id, lastlogin, created, updated) 
	values ('seller',
			'$2a$10$3IYgxcX6i.qEOheOSztYXO/GrxLPVFKRUvB94n7ACjmpGZxC4ORMS', 
			'El admin', 'master', 1, true, 'admin', null, current_date, current_date);

