package com.wha.spring.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.joda.time.LocalDate;

@Entity
@Table(name = "CHILDREN")
public class Client implements Serializable {

	@EmbeddedId
	private ClientKey clientKey;

	public ClientKey getChildrenKey() {
		return clientKey;
	}

	public void setChildrenKey(ClientKey clientKey) {
		this.clientKey = clientKey;
	}

	@Override
	public String toString() {
		return "Children [childrenKey=" + clientKey + "]";
	}
	

}
