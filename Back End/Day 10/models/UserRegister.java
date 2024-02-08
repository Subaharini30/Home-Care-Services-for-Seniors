package com.example.homecare.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity

public class UserRegister {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "userId", nullable = false)
    private int userId;
    
    @Column(unique = true,name = "userName", nullable = false)
    private String userName;
    
    @Column(unique = true,name = "email", nullable = false)
    private String email;
    
    @Column(name = "password", nullable = false)
    private String password;
    
    @Column(name = "confirmPassword", nullable = false)
    private String confirmPassword;
    
    @Column(name = "mobileNumber", nullable = false)
    private int mobileNumber;

    // public UserRegister(int userId, String userName, String email, String password, String confirmPassword,
    //         int mobileNumber) {
    //     this.userId = userId;
    //     this.userName = userName;
    //     this.email = email;
    //     this.password = password;
    //     this.confirmPassword = confirmPassword;
    //     this.mobileNumber = mobileNumber;
    // }

}
