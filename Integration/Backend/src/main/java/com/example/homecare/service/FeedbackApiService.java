package com.example.homecare.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.Feedback;
import com.example.homecare.repository.FeedbackRepo;

@Service
public class FeedbackApiService
{
	@Autowired
	FeedbackRepo repository;
	public boolean addFeedback(Feedback feed)
	{
		repository.save(feed);
		return true;
	}
	public List<Feedback>getFeedback()
	{
		return repository.findAll();
	}
	
}
