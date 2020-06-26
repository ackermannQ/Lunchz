package com.lunchz;

import com.service.UsersService;
import com.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @GetMapping
    public List<Users> findAll(){
        return usersService.deleteById();
    }

    @GetMapping("/{id}")
    public Users findById(@PathVariable String id){
        return usersService(id);
    }

    @PostMapping
    public Users create(@RequestBody ToDo toDo){
        return usersService.save(toDo);
    }

}
