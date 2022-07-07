package com.example.GoSocialapi.Repository;

import java.util.ArrayList;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.GoSocialapi.Entity.User;

public interface UserRepository extends MongoRepository<User, String>{
	
	User save(User user);
	ArrayList<User> findAll();
	User findAllByuserName(String userName);

}
