package com.wha.spring.model;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

@NamedQueries({
	@NamedQuery( name = "findAllComptes", query = "SELECT co from Compte co"),
	@NamedQuery( name = "findAllComptesByClient", query = "SELECT co from Compte co WHERE co.client.id_client=:id_client"),
	@NamedQuery( name = "findCompteByNum", query = "SELECT co from Compte co WHERE co.numCompte=:numCompte"),
	@NamedQuery( name = "findSoldeByNum", query = "SELECT co.solde from Compte co WHERE co.numCompte=:numCompte")
})

@Table(name = "COMPTE")
public class Compte {

	public Compte() {
	}

	public Compte(int numCompte, String typeCompte, Float solde, Collection<Transaction> transaction) {
		this.numCompte = numCompte;
		this.typeCompte = typeCompte;
		this.solde = solde;
		this.transaction = transaction;
	}

	@Id
	@Column(name = "NUM_COMPTE", unique = true, nullable = false)
	private int numCompte;

	@Column(name = "TYPE_COMPTE", nullable = false)
	private String typeCompte;
	
	@Column(name = "SOLDE", nullable = true)
	private Float solde;

	@OneToMany(cascade = { CascadeType.ALL}, fetch = FetchType.EAGER )
	private Collection<Transaction> transaction;
	
	
	@ManyToOne(cascade = { CascadeType.ALL}, fetch = FetchType.EAGER)
	private Client client;

	public int getNumCompte() {
		return numCompte;
	}

	public void setNumCompte(int numCompte) {
		this.numCompte = numCompte;
	}

	public String getTypeCompte() {
		return typeCompte;
	}

	public void setTypeCompte(String typeCompte) {
		this.typeCompte = typeCompte;
	}

	public Float getSolde() {
		return solde;
	}

	public void setSolde(Float solde) {
		this.solde = solde;
	}

	@Override
	public String toString() {
		return "Compte [numCompte=" + numCompte + ", typeCompte=" + typeCompte + ", solde=" + solde + ", transaction="
				+ transaction + "]";
	}

	public Collection<Transaction> getTransaction() {
		return transaction;
	}

	public void setTransaction(Collection<Transaction> transaction) {
		this.transaction = transaction;
	}
	
	
	
}
