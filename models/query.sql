--select * from roles;
--select * from users;
--select * from verification_tokens;

insert into roles (name, createdAt, updatedAt) 
	values ('admin', current_date, current_date);
	
insert into roles (name, createdAt, updatedAt) 
	values ('user', current_date, current_date);