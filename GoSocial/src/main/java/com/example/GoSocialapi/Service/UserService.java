package com.example.GoSocialapi.Service;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.GoSocialapi.Entity.Post;
import com.example.GoSocialapi.Entity.User;
import com.example.GoSocialapi.Repository.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	

	public User submitMetaDataOfUser(User user) {
		/*Date date=new Date();
		long time=date.getTime();
		Timestamp dateTime=new Timestamp(time);

		user.setActive(true);
		//user.setJoiningDate(dateTime);
		*/
		return userRepository.save(user);
	}

	public ArrayList<User> retrieveAllUserDetails() {
		return userRepository.findAll();
	}

	public User getUserData(String userName) {
		return userRepository.findAllByuserName(userName);
	}


	public User getUserDatabyEmailID(String emailID) {
		return userRepository.findAllByemailID(emailID);
	}
	/*
	public ArrayList<User> deleteUserFromDB(String userID){
		userRepository.deleteById(userID);
		
		return userRepository.findAll();
	}
	*/

}
