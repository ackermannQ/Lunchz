package com.lunchz;

import static org.springframework.data.mongodb.core.query.Criteria.where;

import com.mongodb.example.User;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.client.MongoClients;

public class MongoApp {

    private static final Log log = LogFactory.getLog(MongoApp.class);

    public static void main(String[] args) throws Exception {

        MongoOperations mongoOps = new MongoTemplate(MongoClients.create(), "database");
        mongoOps.insert(new User("1", "Ackermann", "oui", "Administrateur"));

        log.info(mongoOps.findOne(new Query(where("username").is("1")), User.class));

        mongoOps.dropCollection("person");
    }
}