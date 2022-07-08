package com.example.GoSocialapi.Controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.GoSocialapi.Entity.Post;
import com.example.GoSocialapi.Entity.User;
import com.example.GoSocialapi.Service.UserService;

@Controller
@CrossOrigin
@RestController
@RequestMapping("/api/userService")
public class UserController {
	
	@Autowired
	UserService userService;
	
	/*
	@GetMapping("/hello")
	public String hello() {
		return "Hello World!";
	}
	*/	
	
	@PostMapping("/save")
	public String saveUserMetaData(@RequestBody User user) {
		User temp = userService.submitMetaDataOfUser(user);
		return temp.getUserName();
	}
	
	
	@PostMapping("/login")
	public String loginCheck(@RequestBody User user) {
		//boolean status = false;
		String status = ""; 
		ArrayList<User> allUsers = userService.retrieveAllUserDetails();
		for(User i : allUsers) {
			if(i.getEmailID().equals(user.getEmailID()) && i.getPasswordEn().equals(user.getPasswordEn())) {
				status += i.getUserName();
			}
		}
		return status;
		
	}
	/*
	@PostMapping("/login")
	public User loginCheck(@RequestBody User user) {
		if(user.getEmailID().equals("abcd@gmail.com") && user.getPasswordEn().equals("admin")) {
			return user;
		}
		user.setUserID(null);
		user.setEmailID(null);
		return user;
		
	}
	*/
	@GetMapping("/getAllUsers")
	public ArrayList<User> getAllUserDetails(){
		return userService.retrieveAllUserDetails();
	}
	
	@GetMapping("/getAllUsers/{userName}")
	public User getUserDetail(@PathVariable("userName") String userName) {
		return userService.getUserData(userName);
	}
	
	@GetMapping("/getAllUsers/email/{emailID}")
	public User getUserDetailbyEmailID(@PathVariable("emailID") String emailID) {
		return userService.getUserDatabyEmailID(emailID);
	}
	
	/*
	@DeleteMapping("/delete/{userID}")
	public ArrayList<User> deleteParticularPost(@PathVariable("userID") String userID){
		ArrayList<User> result=UserService.deleteUserFromDB(userID);
		return result;
	}
	*/

}
