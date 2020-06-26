package com.lunchz;

import com.mongodb.example.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    User user = new User("1", "Ackermann");

    @GetMapping("/lunchz")
    public String displayInfos() {
        return user.toString();
    }


}

