package com.example.GoSocialapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class GoSocialApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoSocialApplication.class, args);
	}

}
