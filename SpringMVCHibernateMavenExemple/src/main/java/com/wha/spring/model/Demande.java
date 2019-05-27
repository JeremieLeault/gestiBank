package com.wha.spring.model;

import java.util.Calendar;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@NamedQueries({
		@NamedQuery(name = "findDemandeById", query = "SELECT d from Demande d WHERE d.id_demande=:id_demande"),
		@NamedQuery(name = "findDemandeByClient", query = "SELECT d from Demande d WHERE d.client.id_client=:id_client"),
		@NamedQuery(name = "findDemandeByDate", query = "SELECT d from Demande d WHERE d.date_demande=:date_demande") })
@Table(name = "DEMANDE")
public class Demande {

	@Id
	@Column(name = "ID_DEMANDE")
	private int id_demande;

	@Column(name = "DATE_DEMANDE")
	private Calendar date_demande;

	@Column(name = "TYPE_DEMANDE")
	private String type_demande;

	@ManyToOne(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
	private Client client;

	public int getId_demande() {
		return id_demande;
	}

	public void setId_demande(int id_demande) {
		this.id_demande = id_demande;
	}

	public Calendar getDate_demande() {
		return date_demande;
	}

	public void setDate_demande(Calendar date_demande) {
		this.date_demande = date_demande;
	}

	public String getType_demande() {
		return type_demande;
	}

	public void setType_demande(String type_demande) {
		this.type_demande = type_demande;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	@Override
	public String toString() {
		return "Demande [id_demande=" + id_demande + ", date_demande=" + date_demande + ", type_demande=" + type_demande
				+ ", client=" + client + "]";
	}
}
