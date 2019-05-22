package com.wha.spring.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ADDRESS")
public class Address implements Serializable{

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Address(String rue, String cp, String ville) {
		this.rue = rue;
		this.cp = cp;
		this.ville = ville;
	}

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private int id;
	
	@Column(name="RUE", nullable=false)
	private String rue;
	
	@Column(name="CP", nullable=false)
	private String cp;
	
	@Column(name="VILLE", nullable=false)
	private String ville;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRue() {
		return rue;
	}

	public void setRue(String rue) {
		this.rue = rue;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public String getVille() {
		return ville;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	@Override
	public String toString() {
		return "Address [id=" + id + ", rue=" + rue + ", cp=" + cp + ", ville=" + ville + "]";
	}
	
}
