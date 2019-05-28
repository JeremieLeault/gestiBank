package com.wha.spring.iservice;

import java.util.List;

import com.wha.spring.model.Client;
import com.wha.spring.model.Transaction;

public interface ITransactionService {
	
	void saveTransaction(Transaction transaction);

	List<Transaction> findAllTransactions();

	Transaction findById(int id_transaction);

	List<Transaction> findByCompte(int numCompte);

}
