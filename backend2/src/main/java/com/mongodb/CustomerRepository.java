package com.mongodb;
import java.util.List;

import com.mongodb.example.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepository extends MongoRepository<User, String> {

    public User findByUserName(String username);
    public List<User> findByuserType(String userType);


}
