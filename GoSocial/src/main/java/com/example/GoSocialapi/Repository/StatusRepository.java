package com.example.GoSocialapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.GoSocialapi.Entity.Status;

public interface StatusRepository extends MongoRepository<Status, UUID> {

	
	
	Status save(Status status);
	ArrayList<Status> findAll();
}
