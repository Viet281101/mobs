create database new_case;
use new_case;
create table categories(
	category_ID int primary key,
    category_Name varchar(50) not null,
    category_Description varchar(150)
);
create table books(
	book_ID int primary key,
    book_Name varchar(150) not null,
    author varchar(50) not null,
    publisher varchar(150),
    book_ISBN int,
    price int not null,
	stock int not null,
    category_ID int,
    foreign key (category_ID) references categories(category_ID)
);
create table users(
	user_ID int primary key,
    user_name varchar(50) not null,
    user_pass varchar(50) not null,
    email varchar(100),
    user_role varchar(10) not null,
    user_status varchar(50) not null,
    phone int not null
);

create table orders(
	order_ID int primary key,
    user_ID int not null,
    foreign key (user_ID) references users(user_ID),
    orderDate date not null,
    order_TotalAmount int,
    order_status varchar(50) not null
);
create table orderDetails(
	orderDetail_ID int primary key,
    order_ID int not null,
    foreign key (order_ID) references orders(order_ID),
    book_ID int not null,
    foreign key (book_ID) references books(book_ID),
    quantity int not null,
    subTotal bigint
);

create table reviews(
	review_ID int primary key,
    book_ID int,
    user_ID int,
    rating int,
    review_Comment text,
    review_Date date,
    foreign key(book_ID) references books(book_ID),
    foreign key(user_ID) references users(user_ID)
);
