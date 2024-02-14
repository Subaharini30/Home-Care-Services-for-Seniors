package com.example.homecare.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.dto.UserBookingsDto;
import com.example.homecare.models.Bookings;
import com.example.homecare.service.UserBookingsApiService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/bookdto")

public class UserBookingsApiController {

    @Autowired
    UserBookingsApiService bookingsDtoService;

    @PostMapping("/post")
    public String addBooking(@RequestBody UserBookingsDto bookingsDto) {
        String result=bookingsDtoService.addBooking(bookingsDto);
           return result;
    }

    @GetMapping("/get/{name}")
    public List<Bookings> getBookingsByName(@PathVariable String name) {
        return bookingsDtoService.getBookingsByName(name);
    }

    @PutMapping("/put/{bookingId}")
    public boolean updateBookings(@PathVariable int bookingId, @RequestBody UserBookingsDto bookings) {
        if (bookingsDtoService.updateBookings(bookingId, bookings)) {
            return true;
        } 
        else {
            return false;
        }
    }

    @DeleteMapping("/delete/{bookingId}")
    public boolean deleteBookingByName(@PathVariable int bookingId) {
        if (bookingsDtoService.deleteBookingById(bookingId)) {
            return true;
        } 
        else {
            return false;
        }
    }
}
