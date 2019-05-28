package com.wha.spring.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@NamedQueries({
	@NamedQuery( name = "findAllTransactions", query = "SELECT t from Transaction t"),
	@NamedQuery( name = "findTransactionById", query = "SELECT t from Transaction t WHERE t.id_transaction=:id_transaction")
})
@Table(name= "TRANSACTION")
public class Transaction implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_transaction;
	
	@Column(name = "MONTANT")
	private int montant;
	
	@Column(name = "TYPE")
	private String type;
	
	@Column(name = "DATE_TRANSACTION")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Calendar dateTransaction;
	
	@Column(name = "LIBELLE")
	private String libelle;

	@ManyToOne(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
	private Compte compte;
	
	public int getId_transaction() {
		return id_transaction;
	}

	public void setId_transaction(int id_transaction) {
		this.id_transaction = id_transaction;
	}

	public int getMontant() {
		return montant;
	}

	public void setMontant(int montant) {
		this.montant = montant;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Calendar getDateTransaction() {
		return dateTransaction;
	}

	public void setDateTransaction(Calendar dateTransaction) {
		this.dateTransaction = dateTransaction;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}

	@Override
	public String toString() {
		return "Transaction [id_transaction=" + id_transaction + ", montant=" + montant + ", type=" + type
				+ ", dateTransaction=" + dateTransaction + ", libelle=" + libelle + ", Compte=" + compte + "]";
	}

	public Compte getCompte() {
		return compte;
	}

	public void setCompte(Compte compte) {
		this.compte = compte;
	}
	
}
