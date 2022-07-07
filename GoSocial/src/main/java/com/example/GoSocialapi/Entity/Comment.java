package com.example.GoSocialapi.Entity;

import java.sql.Timestamp;
import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("comment")
public class Comment {
	
	@Id
	private UUID commentID;
	
	private UUID postID;
	private String userID;
	
	private String userImage;
	private String userName;
	
	private String comment;
	//private java.sql.Timestamp timestamp;
	
	
	
	
	public Comment() {
		super();
	}
	
	
	public Comment(UUID commentID, UUID postID, String userID, String userImage, String userName, String comment) {
		super();
		this.commentID = commentID;
		this.postID = postID;
		this.userID = userID;
		this.userImage = userImage;
		this.userName = userName;
		this.comment = comment;
		//this.timestamp = timestamp;
	}
	
	
	
	


	public UUID getCommentID() {
		return commentID;
	}


	public void setCommentID(UUID commentID) {
		this.commentID = commentID;
	}


	public UUID getPostID() {
		return postID;
	}


	public void setPostID(UUID postID) {
		this.postID = postID;
	}


	public String getUserID() {
		return userID;
	}


	public void setUserID(String userID) {
		this.userID = userID;
	}


	public String getComment() {
		return comment;
	}


	public void setComment(String comment) {
		this.comment = comment;
	}

/*
	public Timestamp getTimestamp() {
		return timestamp;
	}


	public void setTimestamp(java.sql.Timestamp dateTime) {
		this.timestamp = dateTime;
	}

*/
	public String getUserImage() {
		return userImage;
	}
	public void setUserImage(String userImage) {
		this.userImage = userImage;
	}
	
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	

}
