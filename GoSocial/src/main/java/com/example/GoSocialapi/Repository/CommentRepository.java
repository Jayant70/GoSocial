package com.example.GoSocialapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.GoSocialapi.Entity.Comment;


public interface CommentRepository extends MongoRepository<Comment, UUID>{

	
Comment save(Comment comment);
	
	//@AllowFiltering
	ArrayList<Comment> findAllByPostID(UUID postID);
}
