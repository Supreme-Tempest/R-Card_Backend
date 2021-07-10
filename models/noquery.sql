//total de productos y cantidad
//select * from products;
select count(p.id) as products, sum(p.stock) as total from products as p;



//total de productos y cantidad
//select * from factures;
select count(f.id) as total, sum(f.total) as amount from factures as f;

//select * from products_sales;
select p.product_id, pd.name, sum(p.amount) as total 
	from products_sales as p, products as pd 
	where p.product_id = pd.id
	group by p.product_id, pd.name
	order by total desc fetch first 3 rows only;
	
select p.product_id, pd.name, sum(p.amount) as total 
	from products_sales as p, products as pd 
	where p.product_id = pd.id
	group by p.product_id, pd.name
	order by total asc fetch first 3 rows only;
	