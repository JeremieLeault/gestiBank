package com.wha.spring.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wha.spring.idao.ITransactionDao;
import com.wha.spring.model.Client;
import com.wha.spring.model.Conseiller;
import com.wha.spring.model.Transaction;

@Repository("transactionDao")
public class TransactionDaoImpl extends AbstractDao implements ITransactionDao{

	public void saveTransaction(Transaction transaction) {
		persist(transaction);
	}

	public List<Transaction> findAllTransactions() {
		Query q = em.createNamedQuery("findAllTransactions");
		List<Transaction> res = q.getResultList();
		return res;
	}

	public Transaction findById(int id_transaction) {
		// TODO Auto-generated method stub
		Query q = em.createNamedQuery("findTransactionById");
		q.setParameter("id_transaction", id_transaction);
		Transaction res = (Transaction) q.getSingleResult();
		return res;
	}

}
