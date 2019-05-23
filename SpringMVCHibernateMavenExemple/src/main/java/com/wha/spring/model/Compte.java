package com.wha.spring.model;

import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity

@NamedQueries({
	@NamedQuery( name = "findAllComptes", query = "SELECT co from Compte co"),
	@NamedQuery( name = "findCompteByNum", query = "SELECT co from Compte co WHERE co.numCompte=:numCompte")
})

@Table(name = "COMPTE")
public class Compte {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCompte;

	@Column(name = "NUM_COMPTE", nullable = false)
	private String numCompte;

	@Column(name = "TYPE_COMPTE", nullable = false)
	private String typeCompte;
	
	@Column(name = "SOLDE", nullable = true)
	private Float solde;

	public int getIdCompte() {
		return idCompte;
	}

	public void setIdCompte(int idCompte) {
		this.idCompte = idCompte;
	}

	public String getNumCompte() {
		return numCompte;
	}

	public void setNumCompte(String numCompte) {
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
		return "Compte [idCompte=" + idCompte + ", numCompte=" + numCompte + ", typeCompte=" + typeCompte + ", solde="
				+ solde + "]";
	}
	
	
	
}
