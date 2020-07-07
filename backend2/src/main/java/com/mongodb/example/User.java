package com.mongodb.example;

import org.springframework.web.bind.annotation.GetMapping;

public class User {

    private String id;
    private String username;
    private String password;
    private String userType;

    public User(String id, String username, String password, String userType) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.userType = userType;
    }

    public String getId() {
        return id;
    }
    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }
    public String getUserType() {
        return userType;
    }

    @Override
    public String toString() {
        return "Person [id=" + id + ", Username=" + username + ", password = "+ password + ", userType = " + userType + "]";
    }
}