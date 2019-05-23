package com.wha.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wha.spring.iservice.ITransactionService;
import com.wha.spring.model.Transaction;

@RestController
@RequestMapping("transaction")
public class TransactionControllerRestService {
	
	@Autowired
	ITransactionService service;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String helloWorld() {
		return "Transaction";
	}
	
	@RequestMapping(value = "/{id_transaction}")
	public ResponseEntity<Transaction> getTransaction(@PathVariable int id_transaction) {
		Transaction resultat = service.findById(id_transaction);
		System.out.println(resultat);
		return new ResponseEntity<Transaction>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getAll")
	public ResponseEntity<List<Transaction>> getAllTransactions() {
		List<Transaction> resultat = service.findAllTransactions();
		System.out.println(resultat);
		return new ResponseEntity<List<Transaction>>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create", method=RequestMethod.POST)
	public Transaction createTransaction(@RequestBody Transaction tct) {
		service.saveTransaction(tct);
		return tct;
	}
}
