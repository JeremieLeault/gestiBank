package com.wha.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wha.spring.idao.ITransactionDao;
import com.wha.spring.iservice.ITransactionService;
import com.wha.spring.model.Client;
import com.wha.spring.model.Transaction;

@Service("transactionService")
@Transactional
public class TransactionServiceImpl implements ITransactionService {

	@Autowired
	private ITransactionDao dao;

	public void saveTransaction(Transaction transaction) {
		dao.saveTransaction(transaction);
	}

	public List<Transaction> findAllTransactions() {
		return dao.findAllTransactions();
	}

	public Transaction findById(int id_transaction) {
		// TODO Auto-generated method stub
		return dao.findById(id_transaction);
	}

	public List<Transaction> findByCompte(int numCompte) {
		// TODO Auto-generated method stub
		return dao.findByNum(numCompte);
	}

}
