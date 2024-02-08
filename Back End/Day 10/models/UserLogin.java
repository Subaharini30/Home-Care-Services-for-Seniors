package com.example.homecare.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity

public class UserLogin {
    
    @Id
    private int userId;
    
    @Column(name = "userName", nullable = false)
    private String userName;
    
    @Column(name = "password", nullable = false)
    private String password;

    public UserLogin(int userId, String userName, String password) {
        this.userId = userId;
        this.userName = userName;
        this.password = password;
    }

}
