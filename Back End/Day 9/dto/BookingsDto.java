package com.example.homecare.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class BookingsDto {

    private String name;
    private int phoneNumber;
    private String serviceType;
    private String description;
    private LocalDate date;
    private LocalTime duration;
    private String careBeneficiary;
    private String address;
    
}
