package com.seifernet.wissen.repository.finance;

import com.seifernet.wissen.model.finance.FinancialAccount;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FinancialAccountRepository extends MongoRepository<FinancialAccount, String> {

    public List<FinancialAccount> findByOwner(String owner);
}
