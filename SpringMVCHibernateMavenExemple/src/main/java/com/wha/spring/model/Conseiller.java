package com.wha.spring.model;

import java.util.Calendar;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;



@Entity
@NamedQueries({
	@NamedQuery( name = "findAllConseillers", query = "SELECT c from Conseiller c"),
	@NamedQuery( name = "findByMle", query = "SELECT c from Conseiller c WHERE c.mle=:mle")
})

@Table(name = "CONSEILLER")
public class Conseiller {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mle;

	@Column(name = "NOM", nullable = false)
	private String nom;

	@Column(name = "PRENOM", nullable = false)
	private String prenom;
	
	@Column(name = "DATE_EMBAUCHE", nullable = true)
	private Calendar dateEmbauche;

	@Column(name = "EMAIL", unique= true, nullable = false)
	private String email;
	
	@Column(name = "TEL", nullable = false)
	private String tel;

	


	@OneToOne(cascade = { CascadeType.ALL })
	private Address address;

	@OneToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
	private Collection<Client> client;

	public Address getAddress() {
		return address;
	}


	public void setAddress(Address address) {
		this.address = address;
	}


	public int getMle() {
		return mle;
	}


	public void setMle(int mle) {
		this.mle = mle;
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


	public Calendar getDateEmbauche() {
		return dateEmbauche;
	}


	public void setDateEmbauche(Calendar dateEmbauche) {
		this.dateEmbauche = dateEmbauche;
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


	public Collection<Client> getClient() {
		return client;
	}


	public void setClient(Collection<Client> client) {
		this.client = client;
	}


	@Override
	public String toString() {
		return "Conseiller [mle=" + mle + ", nom=" + nom + ", prenom=" + prenom + ", dateEmbauche=" + dateEmbauche
				+ ", email=" + email + ", tel=" + tel + ", address=" + address + ", client=" + client + "]";
	}

	
}
