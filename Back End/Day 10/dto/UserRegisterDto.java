package com.example.homecare.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserRegisterDto {

    private String userName;
    private String email; 
    private int mobileNumber;

}
