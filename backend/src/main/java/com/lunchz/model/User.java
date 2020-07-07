package com.lunchz.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class User {

    private final UUID id;
    private String userName;
    private String userPassword;
    private String userType;

    public User(@JsonProperty("id") UUID id, @JsonProperty("username") String userName,
                @JsonProperty("password") String userPassword, @JsonProperty("userType") String userType) {
        this.id = id;
        this.userName = userName;
        this.userPassword = userPassword;
        this.userType = userType;
    }

    public UUID getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public String getUserType() {
        return userType;
    }

}
