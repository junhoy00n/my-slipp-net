package net.slipp.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	User findFirstById(Long id);
	User findByUserId(String userId);
}