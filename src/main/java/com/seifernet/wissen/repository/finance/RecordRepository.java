package com.seifernet.wissen.repository.finance;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.seifernet.wissen.model.finance.Record;

public interface RecordRepository extends MongoRepository<Record, String>{
	
	@PreAuthorize("@hashgen.md5gen(authentication.name) == #owner")
	public ArrayList<Record> findByOwner(String owner); 
	
	@PreAuthorize("@hashgen.md5gen(authentication.name) == #owner")
	public Optional<Record> findByOwnerAndType(@Param("owner") String owner, @Param("type") String type);

}
