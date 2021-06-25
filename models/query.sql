--select * from roles;
--select * from users;
--select * from verification_tokens;

insert into roles (name, createdAt, updatedAt) 
	values ('admin', current_date, current_date);
	
insert into roles (name, createdAt, updatedAt) 
	values ('manager', current_date, current_date);

insert into roles (name, createdAt, updatedAt) 
	values ('seller', current_date, current_date);