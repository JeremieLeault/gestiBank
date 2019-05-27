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
@NamedQuery (name ="verifUnicite", query = " SELECT COUNT(l) from LoginConseiller l " 
		+ "WHERE l.conseiller.email=:email")

@Table(name = "LOGIN_CONSEILLER")
public class LoginConseiller implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_login;
	
	@Column(name = "MOT_DE_PASSE", nullable = false)
	private String Mot_de_passe;
	
	@OneToOne(cascade = {CascadeType.ALL})
	private Conseiller conseiller;
}
