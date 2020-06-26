package com.lunchz;

import com.repository.UsersRepository;
import com.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	@Autowired
	private UsersRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	public void run(String... args) throws Exception {

		repository.deleteAll();
		repository.save(new Users("1", "Ackermann", "oui", "a@a.fr", "Administrateur"));
		repository.save(new Users("2", "achambri", "licorne", "b@a.fr", "User"));
		repository.save(new Users("3", "rbiehler", "non", "c@a.fr", "User"));

		System.out.println("Users found with findAll():");
		System.out.println("-------------------------------");
		for (Users users : repository.findAll()) {
			System.out.println(users);
		}
		System.out.println();

		// fetch an individual customer
		System.out.println("Customer found with findByUsername('achambri'):");
		System.out.println("--------------------------------");
		System.out.println(repository.findByUsername("achambri"));

		System.out.println("Customers found with findByUserType('User'):");
		System.out.println("--------------------------------");
		for (Users users : repository.findByUserType("User")) {
			System.out.println(users);
		}
	}


	}
