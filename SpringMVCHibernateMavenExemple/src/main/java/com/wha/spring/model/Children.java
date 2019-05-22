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
public class Children implements Serializable {

	@EmbeddedId
	private ChildrenKey childrenKey;

	public ChildrenKey getChildrenKey() {
		return childrenKey;
	}

	public void setChildrenKey(ChildrenKey childrenKey) {
		this.childrenKey = childrenKey;
	}

	@Override
	public String toString() {
		return "Children [childrenKey=" + childrenKey + "]";
	}
	

}
