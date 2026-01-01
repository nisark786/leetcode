-- Write your PostgreSQL query statement below
delete from Person p1 
using Person p2 
where p1.Email = p2.Email 
and p1.id>p2.id;