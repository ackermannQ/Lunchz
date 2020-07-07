package com.lunchz.dao;

import com.lunchz.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres")
public class UserDataAccessService implements UserDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public UserDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertUser(UUID id, User user) {
        return 0;
    }

    @Override
    public List<User> selectAllUser() {
        final String sql = "SELECT id, username, password, userType FROM usertable;";
        List<User> users = jdbcTemplate.query(sql, (resultSet, i) -> {
          return new User(
                  UUID.fromString(resultSet.getString("id")), resultSet.getString("username"),
                  resultSet.getString("password"), resultSet.getString("userType"));
        });
        return users;
    }

    @Override
    public Optional<User> selectUserById(UUID id) {
        return Optional.empty();
    }

    @Override
    public int deleteUserById(UUID id) {
        return 0;
    }

    @Override
    public int updateUserById(UUID id, User user) {
        return 0;
    }
}
