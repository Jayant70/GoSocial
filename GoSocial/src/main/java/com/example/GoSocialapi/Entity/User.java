package com.example.GoSocialapi.Entity;

//import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document("User")
public class User {
	@Id
	private String userID;
	private String passwordEn;
	private String emailID;
	private String userName;
	
	//public static int index=0;
//	private String userImage;
//	private boolean active;
	//private Timestamp joiningDate;
	
	
	public String getPasswordEn() {
		return passwordEn;
	}
	public String getUserID() {
		return userID;
	}
	public void setUserID(String userID) {
		this.userID = userID;
	}
	public void setPasswordEn(String passwordEn) {
		this.passwordEn = passwordEn;
	}
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
//	public String getUserImage() {
//		return userImage;
//	}
//	public void setUserImage(String userImage) {
//		this.userImage = userImage;
//	}
//	public boolean isActive() {
//		return active;
//	}
//	public void setActive(boolean active) {
//		this.active = active;
//	}
	/*
	public Timestamp getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(Timestamp joiningDate) {
		this.joiningDate = joiningDate;
	}
	*/
	
	public User() {
		super();
		
		// TODO Auto-generated constructor stub
	}
	public User(String userID, String passwordEn, String emailID, String userName) {
	super();
	this.userID = userID;
	this.passwordEn = passwordEn;
	this.emailID = emailID;
	this.userName = userName;
}
	@Override
	public String toString() {
		return "User [ passwordEn=" + passwordEn + ", emailID=" + emailID + ", userName="
				+ userName + ",   getPasswordEn()=" + getPasswordEn() + ", getEmailID()="
				+ getEmailID() + ", getUserName()=" + getUserName() + ",   getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
}
