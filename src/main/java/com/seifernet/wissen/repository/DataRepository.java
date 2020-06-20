package com.seifernet.wissen.repository;

import com.seifernet.wissen.model.Data;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.validation.Valid;
import java.util.List;

@RepositoryRestResource(collectionResourceRel = "data", path = "data")
public interface DataRepository extends MongoRepository<Data, String> {

    @RestResource(path="in")
    public List<Data> findByPath(@Param("path") String path);

    @RestResource(path="byFullPath")
    public List<Data> findByFullPath(@Param("fullPath") String fullPath);
}
