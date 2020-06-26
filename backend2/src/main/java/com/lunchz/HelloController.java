package com.lunchz;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/sayhello")
    public String sayHelloWorld() {
        return "Hello World!";
    }


}

