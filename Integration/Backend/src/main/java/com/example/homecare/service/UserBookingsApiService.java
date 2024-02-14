package com.example.homecare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.dto.UserBookingsDto;
import com.example.homecare.models.Bookings;
import com.example.homecare.models.Services;
import com.example.homecare.models.Users;
import com.example.homecare.repository.BookingsRepo;
import com.example.homecare.repository.ServicesRepo;
import com.example.homecare.repository.UsersRepository;

@Service

public class UserBookingsApiService {

    @Autowired
    private BookingsRepo bookingRepo;

    @Autowired
    private UsersRepository userRepo;

    @Autowired
    private ServicesRepo servicesRepo;

    // done by user
    //@SuppressWarnings("null")
    public String addBooking(UserBookingsDto bookingsDto) {
        Bookings booking = new Bookings();
        booking.setName(bookingsDto.getName());
        booking.setPhoneNumber(bookingsDto.getPhoneNumber());
        booking.setDate(bookingsDto.getDate());
        booking.setServiceType(bookingsDto.getServiceType());
        booking.setCareBeneficiary(bookingsDto.getCareBeneficiary());
        booking.setAddress(bookingsDto.getAddress());
        booking.setDuration(bookingsDto.getDuration());
        booking.setDescription(bookingsDto.getDescription());
        Users existingUser = userRepo.findByName(bookingsDto.getName());
        Services serviceAvailable = servicesRepo.isServiceAvailable(bookingsDto.getServiceType(),true);
        
        if (existingUser == null) {
            return "Provide the registered Username";
        } 
        else if (serviceAvailable == null) {
            return "Oops!! Service Unavailable";
        } 
        else {
            bookingRepo.save(booking);
            return "Booking Confirmed";
        }

    }

    // visible in user side
    public List<Bookings> getBookingsByName(String name) {
        return bookingRepo.findBookingsByName(name);
    }

    // update by user
    public boolean updateBookings(int bookingId, UserBookingsDto bookings) {
        Optional<Bookings> existingBooking = bookingRepo.findById(bookingId);
        if (existingBooking.isPresent()) {
            Bookings booking = existingBooking.get();
            booking.setAddress(bookings.getAddress());
            booking.setCareBeneficiary(bookings.getCareBeneficiary());
            booking.setDate(bookings.getDate());
            booking.setDescription(bookings.getDescription());
            booking.setDuration(bookings.getDuration());
            booking.setPhoneNumber(bookings.getPhoneNumber());
            booking.setServiceType(bookings.getServiceType());
    
            bookingRepo.save(booking);
            return true;
        } else {
            return false; // Booking with given bookingId not found
        }
    }

    // delete by user
    public boolean deleteBookingById(int bookingId) {
        Optional<Bookings> existingBookingOptional = bookingRepo.findById(bookingId);
        if (existingBookingOptional.isPresent()) {
            Bookings existingBooking = existingBookingOptional.get();
            bookingRepo.delete(existingBooking);
            return true;
        } else {
            return false;
        }
    }
    

}
