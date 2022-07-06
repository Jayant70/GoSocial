package com.example.GoSocialapi.Repository;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.GoSocialapi.Entity.Post;

@Repository
public interface PostRepository extends MongoRepository<Post, UUID>{
	
	ArrayList<Post> findAll();
	Post save(Post post);
	void deleteById(UUID postID);

}
