package com.wha.spring.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@NamedQuery (name ="verifUniciteClient", query = " SELECT COUNT(l) from LoginClient l " 
		+ "WHERE l.client.email=:email")

@Table(name = "LOGIN_CLIENT")
public class LoginClient implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_login;
	
	@Column(name = "MOT_DE_PASSE", nullable = false)
	private String Mot_de_passe;
	
	@OneToOne(cascade = { CascadeType.ALL})
	private Client client;
}
