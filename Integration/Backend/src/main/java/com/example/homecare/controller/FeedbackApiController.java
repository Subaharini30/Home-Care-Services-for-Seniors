package com.example.homecare.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.Feedback;
import java.util.List;
import com.example.homecare.service.FeedbackApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/feed")
public class FeedbackApiController{
    @Autowired
	FeedbackApiService service;
	
	@PostMapping("/post")
	public boolean create(@RequestBody Feedback student)
	{
		return service.addFeedback(student);
	}
	@GetMapping("/get")
	public List<Feedback>read()
	{
		return service.getFeedback();
	}


}