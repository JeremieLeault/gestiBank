package com.wha.spring.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.joda.time.LocalDate;

@Entity
@NamedQueries({ @NamedQuery(name = "findAllClients", query = "SELECT c from Client c"),
				@NamedQuery(name = "findAllClientsByConseiller", query = "SELECT c from Client c WHERE c.conseiller.mle=:mle"),
				@NamedQuery(name = "findClientById", query = "SELECT c from Client c WHERE c.id_client=:id_client") })
@Table(name = "CLIENT")
public class Client implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_client;

	@Column(name = "NOM", nullable = false)
	private String nom;

	@Column(name = "PRENOM", nullable = false)
	private String prenom;

	@Column(name = "DATE_NAISSANCE", nullable = false)
	private Calendar dateNaissance;

	@Column(name = "DATE_DEMANDE", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Calendar dateDemande;

	@Column(name = "EMAIL", unique = true, nullable = false)
	private String email;

	@Column(name = "TEL", nullable = false)
	private String tel;

	@Column(name = "SITUATION_PERSO", nullable = false)
	private String situation_perso;

	@Column(name = "SALAIRE", nullable = false)
	private BigDecimal salaire;

	// justificatif optionel
	// @Column(name = "URL_JUSTIF", nullable = true)
	// private String url_justif;


	@OneToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
	private Collection<Compte> compte;

	@OneToOne(cascade = { CascadeType.ALL })
	private Address address;
	
	@OneToMany(cascade = { CascadeType.ALL}, fetch = FetchType.EAGER)
	private Collection<Demande> demande;

	@OneToOne(cascade = { CascadeType.ALL})
	private Conseiller conseiller;
	
	public int getId_client() {
		return id_client;
	}

	public void setId_client(int id_client) {
		this.id_client = id_client;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public Calendar getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Calendar dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public Calendar getDateDemande() {
		return dateDemande;
	}

	public void setDateDemande(Calendar dateDemande) {
		this.dateDemande = dateDemande;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getSituation_perso() {
		return situation_perso;
	}

	public void setSituation_perso(String situation_perso) {
		this.situation_perso = situation_perso;
	}

	public BigDecimal getSalaire() {
		return salaire;
	}

	public void setSalaire(BigDecimal salaire) {
		this.salaire = salaire;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "ClientKey [id_client=" + id_client + ", nom=" + nom + ", prenom=" + prenom + ", dateNaissance="
				+ dateNaissance + ", dateDemande=" + dateDemande + ", email=" + email + ", tel=" + tel
				+ ", situation_perso=" + situation_perso + ", salaire=" + salaire + ", address=" + address + "]";
	}

}
