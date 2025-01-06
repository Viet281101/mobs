create database new_case;
use new_case;
create table categories(
	category_ID int primary key auto_increment,
    category_Name varchar(50) not null,
    category_Description varchar(150)
);
create table books(
	book_ID int primary key auto_increment,
    book_Name varchar(150) not null,
    author varchar(50) not null,
    publisher varchar(150),
    book_ISBN varchar(20) unique,
    price decimal(10,2) not null,
	stock int not null,
    category_ID int,
    foreign key (category_ID) references categories(category_ID)
);
create table users(
	user_ID int primary key auto_increment,
    user_name varchar(50) not null,
    user_pass varchar(255) not null,  
    email varchar(100) not null unique,
    user_role enum('Admin', 'User') default 'Customer',
    user_status enum('Active', 'Inactive', 'Banned') default 'Active',
    phone varchar(10) not null
);

create table orders(
	order_ID int primary key auto_increment,
    user_ID int not null,
    foreign key (user_ID) references users(user_ID),
    orderDate date not null,
    order_TotalAmount decimal(10,2),
    order_status enum('Pending', 'Processing','Completed','Cancelled') default 'Pending'
);
create table orderDetails(
	orderDetail_ID int primary key auto_increment,
    order_ID int not null,
    foreign key (order_ID) references orders(order_ID),
    book_ID int not null,
    foreign key (book_ID) references books(book_ID),
    quantity int not null,
    subTotal decimal(10,2)
);

create table reviews(
	review_ID int primary key auto_increment,
    book_ID int not null,
    user_ID int not null,
    rating tinyint check (rating between 1 and 5),
    review_Comment text,
    review_Date date,
    foreign key(book_ID) references books(book_ID),
    foreign key(user_ID) references users(user_ID)
);
