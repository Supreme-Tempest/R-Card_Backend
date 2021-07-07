/*
select * from roles;
select * from users;
select * from verification_tokens;
select * from departments;
select * from municipios;
*/
/*
drop table verification_tokens;
drop table users;
drop table roles;
drop table workshops;
drop table municipios; 
drop table departments;
drop table clients;
drop table products;
drop table identificatives;
drop table product_types;
*/

insert into roles (role, name, levelaccess) 
	values ('seller', 'vendedor',1);

insert into roles (role, name, levelaccess) 
	values ('manager', 'gerente', 3);

insert into roles (role, name, levelaccess) 
	values ('admin', 'administrador', 5);
	
insert into departments (name) values ('Ahuchapan');
insert into departments (name) values ('Santa Ana');
insert into departments (name) values ('Sonsonate');
insert into departments (name) values ('Chalatenango');
insert into departments (name) values ('La Libertad');
insert into departments (name) values ('San Salvador');
insert into departments (name) values ('Cuscatlan');
insert into departments (name) values ('La Paz');
insert into departments (name) values ('Cabañas');
insert into departments (name) values ('San Vicente');
insert into departments (name) values ('San Usulutan');
insert into departments (name) values ('San Miguel');
insert into departments (name) values ('Morazan');
insert into departments (name) values ('La Union');


insert into municipios (department_id, name)values (1, 'Ahuachapán');
insert into municipios (department_id, name)values (1, 'Apaneca');
insert into municipios (department_id, name)values (1, 'Atiquizaya');
insert into municipios (department_id, name)values (1, 'Concepción de Ataco');
insert into municipios (department_id, name)values (1, 'El Refugio');
insert into municipios (department_id, name)values (1, 'Guaymango');
insert into municipios (department_id, name)values (1, 'Jujutla');
insert into municipios (department_id, name)values (1, 'San Francisco Menéndez');
insert into municipios (department_id, name)values (1, 'San Lorenzo');
insert into municipios (department_id, name)values (1, 'San Pedro Puxtla');
insert into municipios (department_id, name)values (1, 'Tacuba');
insert into municipios (department_id, name)values (1, 'Turín');
insert into municipios (department_id, name)values (2, 'Candelaria de la Frontera');
insert into municipios (department_id, name)values (2, 'Chalchuapa');
insert into municipios (department_id, name)values (2, 'Coatepeque');
insert into municipios (department_id, name)values (2, 'El Congo');
insert into municipios (department_id, name)values (2, 'El Porvenir');
insert into municipios (department_id, name)values (2, 'Masahuat');
insert into municipios (department_id, name)values (2, 'Metapán');
insert into municipios (department_id, name)values (2, 'San Antonio Pajonal');
insert into municipios (department_id, name)values (2, 'San Sebastián Salitrillo');
insert into municipios (department_id, name)values (2, 'Santa Ana');
insert into municipios (department_id, name)values (2, 'Santa Rosa Guachipilín');
insert into municipios (department_id, name)values (2, 'Santiago de la Frontera');
insert into municipios (department_id, name)values (2, 'Texistepeque');
insert into municipios (department_id, name)values (3, 'Acajutla');
insert into municipios (department_id, name)values (3, 'Armenia');
insert into municipios (department_id, name)values (3, 'Caluco');
insert into municipios (department_id, name)values (3, 'Cuisnahuat');
insert into municipios (department_id, name)values (3, 'Izalco');
insert into municipios (department_id, name)values (3, 'Juayúa');
insert into municipios (department_id, name)values (3, 'Nahuizalco');
insert into municipios (department_id, name)values (3, 'Nahulingo');
insert into municipios (department_id, name)values (3, 'Salcoatitán');
insert into municipios (department_id, name)values (3, 'San Antonio del Monte');
insert into municipios (department_id, name)values (3, 'San Julián');
insert into municipios (department_id, name)values (3, 'Santa Catarina Masahuat');
insert into municipios (department_id, name)values (3, 'Santa Isabel Ishuatán');
insert into municipios (department_id, name)values (3, 'Santo Domingo Guzmán');
insert into municipios (department_id, name)values (3, 'Sonsonate');
insert into municipios (department_id, name)values (3, 'Sonzacate');
insert into municipios (department_id, name)values (4, 'Agua Caliente');
insert into municipios (department_id, name)values (4, 'Arcatao');
insert into municipios (department_id, name)values (4, 'Azacualpa');
insert into municipios (department_id, name)values (4, 'Chalatenango');
insert into municipios (department_id, name)values (4, 'Comalapa');
insert into municipios (department_id, name)values (4, 'Citalá');
insert into municipios (department_id, name)values (4, 'Concepción Quezaltepeque');
insert into municipios (department_id, name)values (4, 'Dulce Nombre de María');
insert into municipios (department_id, name)values (4, 'El Carrizal');
insert into municipios (department_id, name)values (4, 'El Paraíso');
insert into municipios (department_id, name)values (4, 'La Laguna');
insert into municipios (department_id, name)values (4, 'La Palma');
insert into municipios (department_id, name)values (4, 'La Reina');
insert into municipios (department_id, name)values (4, 'Las Vueltas');
insert into municipios (department_id, name)values (4, 'Nueva Concepción');
insert into municipios (department_id, name)values (4, 'Nueva Trinidad');
insert into municipios (department_id, name)values (4, 'Nombre de Jesús');
insert into municipios (department_id, name)values (4, 'Ojos de Agua');
insert into municipios (department_id, name)values (4, 'Potonico');
insert into municipios (department_id, name)values (4, 'San Antonio de la Cruz');
insert into municipios (department_id, name)values (4, 'San Antonio Los Ranchos');
insert into municipios (department_id, name)values (4, 'San Fernando');
insert into municipios (department_id, name)values (4, 'San Francisco Lempa');
insert into municipios (department_id, name)values (4, 'San Francisco Morazán');
insert into municipios (department_id, name)values (4, 'San Ignacio');
insert into municipios (department_id, name)values (4, 'San Isidro Labrador');
insert into municipios (department_id, name)values (4, 'San José Cancasque');
insert into municipios (department_id, name)values (4, 'San José Las Flores');
insert into municipios (department_id, name)values (4, 'San Luis del Carmen');
insert into municipios (department_id, name)values (4, 'San Miguel de Mercedes');
insert into municipios (department_id, name)values (4, 'San Rafael');
insert into municipios (department_id, name)values (4, 'Santa Rita');
insert into municipios (department_id, name)values (4, 'Tejutla');
insert into municipios (department_id, name)values (5, 'Candelaria');
insert into municipios (department_id, name)values (5, 'Cojutepeque');
insert into municipios (department_id, name)values (5, 'El Carmen');
insert into municipios (department_id, name)values (5, 'El Rosario');
insert into municipios (department_id, name)values (5, 'Monte San Juan');
insert into municipios (department_id, name)values (5, 'Oratorio de Concepción');
insert into municipios (department_id, name)values (5, 'San Bartolomé Perulapía');
insert into municipios (department_id, name)values (5, 'San Cristóbal');
insert into municipios (department_id, name)values (5, 'San José Guayabal');
insert into municipios (department_id, name)values (5, 'San Pedro Perulapán');
insert into municipios (department_id, name)values (5, 'San Rafael Cedros');
insert into municipios (department_id, name)values (5, 'San Ramón');
insert into municipios (department_id, name)values (5, 'Santa Cruz Analquito');
insert into municipios (department_id, name)values (5, 'Santa Cruz Michapa');
insert into municipios (department_id, name)values (5, 'Suchitoto');
insert into municipios (department_id, name)values (5, 'Tenancingo');
insert into municipios (department_id, name)values (6, 'Aguilares');
insert into municipios (department_id, name)values (6, 'Apopa');
insert into municipios (department_id, name)values (6, 'Ayutuxtepeque');
insert into municipios (department_id, name)values (6, 'Cuscatancingo');
insert into municipios (department_id, name)values (6, 'Ciudad Delgado');
insert into municipios (department_id, name)values (6, 'El Paisnal');
insert into municipios (department_id, name)values (6, 'Guazapa');
insert into municipios (department_id, name)values (6, 'Ilopango');
insert into municipios (department_id, name)values (6, 'Mejicanos');
insert into municipios (department_id, name)values (6, 'Nejapa');
insert into municipios (department_id, name)values (6, 'Panchimalco');
insert into municipios (department_id, name)values (6, 'Rosario de Mora');
insert into municipios (department_id, name)values (6, 'San Marcos');
insert into municipios (department_id, name)values (6, 'San Martín');
insert into municipios (department_id, name)values (6, 'San Salvador');
insert into municipios (department_id, name)values (6, 'Santiago Texacuangos');
insert into municipios (department_id, name)values (6, 'Santo Tomás');
insert into municipios (department_id, name)values (6, 'Soyapango');
insert into municipios (department_id, name)values (6, 'Tonacatepeque');
insert into municipios (department_id, name)values (7, 'Antiguo Cuscatlán');
insert into municipios (department_id, name)values (7, 'Chiltiupán');
insert into municipios (department_id, name)values (7, 'Ciudad Arce');
insert into municipios (department_id, name)values (7, 'Colón');
insert into municipios (department_id, name)values (7, 'Comasagua');
insert into municipios (department_id, name)values (7, 'Huizúcar');
insert into municipios (department_id, name)values (7, 'Jayaque');
insert into municipios (department_id, name)values (7, 'Jicalapa');
insert into municipios (department_id, name)values (7, 'La Libertad');
insert into municipios (department_id, name)values (7, 'Santa Tecla');
insert into municipios (department_id, name)values (7, 'Nuevo Cuscatlán');
insert into municipios (department_id, name)values (7, 'San Juan Opico');
insert into municipios (department_id, name)values (7, 'Quezaltepeque');
insert into municipios (department_id, name)values (7, 'Sacacoyo');
insert into municipios (department_id, name)values (7, 'San José Villanueva');
insert into municipios (department_id, name)values (7, 'San Matías');
insert into municipios (department_id, name)values (7, 'San Pablo Tacachico');
insert into municipios (department_id, name)values (7, 'Talnique');
insert into municipios (department_id, name)values (7, 'Tamanique');
insert into municipios (department_id, name)values (7, 'Teotepeque');
insert into municipios (department_id, name)values (7, 'Tepecoyo');
insert into municipios (department_id, name)values (7, 'Zaragoza');
insert into municipios (department_id, name)values (8, 'Apastepeque');
insert into municipios (department_id, name)values (8, 'Guadalupe');
insert into municipios (department_id, name)values (8, 'San Cayetano Istepeque');
insert into municipios (department_id, name)values (8, 'San Esteban Catarina');
insert into municipios (department_id, name)values (8, 'San Ildefonso');
insert into municipios (department_id, name)values (8, 'San Lorenzo');
insert into municipios (department_id, name)values (8, 'San Sebastián');
insert into municipios (department_id, name)values (8, 'San Vicente');
insert into municipios (department_id, name)values (8, 'Santa Clara');
insert into municipios (department_id, name)values (8, 'Santo Domingo');
insert into municipios (department_id, name)values (8, 'Tecoluca');
insert into municipios (department_id, name)values (8, 'Tepetitán');
insert into municipios (department_id, name)values (8, 'Verapaz');
insert into municipios (department_id, name)values (9, 'Cinquera');
insert into municipios (department_id, name)values (9, 'Dolores');
insert into municipios (department_id, name)values (9, 'Guacotecti');
insert into municipios (department_id, name)values (9, 'Ilobasco');
insert into municipios (department_id, name)values (9, 'Jutiapa');
insert into municipios (department_id, name)values (9, 'San Isidro');
insert into municipios (department_id, name)values (9, 'Sensuntepeque');
insert into municipios (department_id, name)values (9, 'Tejutepeque');
insert into municipios (department_id, name)values (9, 'Victoria');
insert into municipios (department_id, name)values (10, 'Cuyultitán');
insert into municipios (department_id, name)values (10, 'El Rosario');
insert into municipios (department_id, name)values (10, 'Jerusalén');
insert into municipios (department_id, name)values (10, 'Mercedes La Ceiba');
insert into municipios (department_id, name)values (10, 'Olocuilta');
insert into municipios (department_id, name)values (10, 'Paraíso de Osorio');
insert into municipios (department_id, name)values (10, 'San Antonio Masahuat');
insert into municipios (department_id, name)values (10, 'San Emigdio');
insert into municipios (department_id, name)values (10, 'San Francisco Chinameca');
insert into municipios (department_id, name)values (10, 'San Juan Nonualco');
insert into municipios (department_id, name)values (10, 'San Juan Talpa');
insert into municipios (department_id, name)values (10, 'San Juan Tepezontes');
insert into municipios (department_id, name)values (10, 'San Luis Talpa');
insert into municipios (department_id, name)values (10, 'San Luis La Herradura');
insert into municipios (department_id, name)values (10, 'San Miguel Tepezontes');
insert into municipios (department_id, name)values (10, 'San Pedro Masahuat');
insert into municipios (department_id, name)values (10, 'San Pedro Nonualco');
insert into municipios (department_id, name)values (10, 'San Rafael Obrajuelo');
insert into municipios (department_id, name)values (10, 'Santa María Ostuma');
insert into municipios (department_id, name)values (10, 'Santiago Nonualco');
insert into municipios (department_id, name)values (10, 'Tapalhuaca');
insert into municipios (department_id, name)values (10, 'Zacatecoluca');
insert into municipios (department_id, name)values (11, 'Alegría');
insert into municipios (department_id, name)values (11, 'Berlín');
insert into municipios (department_id, name)values (11, 'California');
insert into municipios (department_id, name)values (11, 'Concepción Batres');
insert into municipios (department_id, name)values (11, 'El Triunfo');
insert into municipios (department_id, name)values (11, 'Ereguayquín');
insert into municipios (department_id, name)values (11, 'Estanzuelas');
insert into municipios (department_id, name)values (11, 'Jiquilisco');
insert into municipios (department_id, name)values (11, 'Jucuapa');
insert into municipios (department_id, name)values (11, 'Jucuarán');
insert into municipios (department_id, name)values (11, 'Mercedes Umaña');
insert into municipios (department_id, name)values (11, 'Nueva Granada');
insert into municipios (department_id, name)values (11, 'Ozatlán');
insert into municipios (department_id, name)values (11, 'Puerto El Triunfo');
insert into municipios (department_id, name)values (11, 'San Agustín');
insert into municipios (department_id, name)values (11, 'San Buenaventura');
insert into municipios (department_id, name)values (11, 'San Dionisio');
insert into municipios (department_id, name)values (11, 'San Francisco Javier');
insert into municipios (department_id, name)values (11, 'Santa Elena');
insert into municipios (department_id, name)values (11, 'Santa María');
insert into municipios (department_id, name)values (11, 'Santiago de María');
insert into municipios (department_id, name)values (11, 'Tecapán');
insert into municipios (department_id, name)values (11, 'Usulután');
insert into municipios (department_id, name)values (12, 'Carolina');
insert into municipios (department_id, name)values (12, 'Chapeltique');
insert into municipios (department_id, name)values (12, 'Chinameca');
insert into municipios (department_id, name)values (12, 'Chirilagua');
insert into municipios (department_id, name)values (12, 'Ciudad Barrios');
insert into municipios (department_id, name)values (12, 'Comacarán');
insert into municipios (department_id, name)values (12, 'El Tránsito');
insert into municipios (department_id, name)values (12, 'Lolotique');
insert into municipios (department_id, name)values (12, 'Moncagua');
insert into municipios (department_id, name)values (12, 'Nueva Guadalupe');
insert into municipios (department_id, name)values (12, 'Nuevo Edén de San Juan');
insert into municipios (department_id, name)values (12, 'Quelepa');
insert into municipios (department_id, name)values (12, 'San Antonio del Mosco');
insert into municipios (department_id, name)values (12, 'San Gerardo');
insert into municipios (department_id, name)values (12, 'San Jorge');
insert into municipios (department_id, name)values (12, 'San Luis de la Reina');
insert into municipios (department_id, name)values (12, 'San Miguel');
insert into municipios (department_id, name)values (12, 'San Rafael Oriente');
insert into municipios (department_id, name)values (12, 'Sesori');
insert into municipios (department_id, name)values (12, 'Uluazapa');
insert into municipios (department_id, name)values (13, 'Arambala');
insert into municipios (department_id, name)values (13, 'Cacaopera');
insert into municipios (department_id, name)values (13, 'Chilanga');
insert into municipios (department_id, name)values (13, 'Corinto');
insert into municipios (department_id, name)values (13, 'Delicias de Concepción');
insert into municipios (department_id, name)values (13, 'El Divisadero');
insert into municipios (department_id, name)values (13, 'El Rosario');
insert into municipios (department_id, name)values (13, 'Gualococti');
insert into municipios (department_id, name)values (13, 'Guatajiagua');
insert into municipios (department_id, name)values (13, 'Joateca');
insert into municipios (department_id, name)values (13, 'Jocoaitique');
insert into municipios (department_id, name)values (13, 'Jocoro');
insert into municipios (department_id, name)values (13, 'Lolotiquillo');
insert into municipios (department_id, name)values (13, 'Meanguera');
insert into municipios (department_id, name)values (13, 'Osicala');
insert into municipios (department_id, name)values (13, 'Perquín');
insert into municipios (department_id, name)values (13, 'San Carlos');
insert into municipios (department_id, name)values (13, 'San Fernando');
insert into municipios (department_id, name)values (13, 'San Francisco Gotera');
insert into municipios (department_id, name)values (13, 'San Isidro');
insert into municipios (department_id, name)values (13, 'San Simón');
insert into municipios (department_id, name)values (13, 'Sensembra');
insert into municipios (department_id, name)values (13, 'Sociedad');
insert into municipios (department_id, name)values (13, ' Torola');
insert into municipios (department_id, name)values (13, 'Yamabal');
insert into municipios (department_id, name)values (13, 'Yoloaiquín');
insert into municipios (department_id, name)values (14, 'Anamorós');
insert into municipios (department_id, name)values (14, 'Bolívar');
insert into municipios (department_id, name)values (14, 'Concepción de Oriente');
insert into municipios (department_id, name)values (14, 'Conchagua');
insert into municipios (department_id, name)values (14, 'El Carmen');
insert into municipios (department_id, name)values (14, 'El Sauce');
insert into municipios (department_id, name)values (14, 'Intipucá');
insert into municipios (department_id, name)values (14, 'La Unión');
insert into municipios (department_id, name)values (14, 'Lislique');
insert into municipios (department_id, name)values (14, 'Meanguera del Golfo');
insert into municipios (department_id, name)values (14, 'Nueva Esparta');
insert into municipios (department_id, name)values (14, 'Pasaquina');
insert into municipios (department_id, name)values (14, 'Polorós');
insert into municipios (department_id, name)values (14, 'San Alejo');
insert into municipios (department_id, name)values (14, 'San José');
insert into municipios (department_id, name)values (14, 'Santa Rosa de Lima');
insert into municipios (department_id, name)values (14, 'Yayantique');
insert into municipios (department_id, name)values (14, 'Yucuaiquín');

insert into workshops (name, municipio_id) values ('workshop 01', 1);
insert into workshops (name, municipio_id) values ('workshop 02', 2);
insert into workshops (name, municipio_id) values ('workshop 03', 3);
insert into workshops (name, municipio_id) values ('workshop 04', 1);
insert into workshops (name, municipio_id) values ('workshop 05', 1);
insert into workshops (name, municipio_id) values ('workshop 06', 1);
insert into workshops (name, municipio_id) values ('workshop 07', 4);
insert into workshops (name, municipio_id) values ('workshop 08', 3);
insert into workshops (name, municipio_id) values ('workshop 09', 5);
insert into workshops (name, municipio_id) values ('workshop 10', 1);
insert into workshops (name, municipio_id) values ('workshop 11', 2);
insert into workshops (name, municipio_id) values ('workshop 12', 1);
insert into workshops (name, municipio_id) values ('workshop 13', 3);
insert into workshops (name, municipio_id) values ('workshop 14', 2);

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
