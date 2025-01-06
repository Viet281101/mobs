package com.example.casestudy.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class BaseRepo {
    private static String jdbcURL = "jdbc:mysql://localhost:3306/new_case?useSSL=false";
    //    new_case là tên database
    private static String jdbcUsername = "root";
    private static String jdbcPassword = "ducchi_2904";


    public static Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return connection;
    }
}
