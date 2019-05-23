package com.wha.spring.idao;

import java.util.List;

import com.wha.spring.model.Client;
import com.wha.spring.model.Transaction;

public interface ITransactionDao {
	
	void saveTransaction(Transaction transaction);

	List<Transaction> findAllTransactions();

	Transaction findById(int id_transaction);
}
