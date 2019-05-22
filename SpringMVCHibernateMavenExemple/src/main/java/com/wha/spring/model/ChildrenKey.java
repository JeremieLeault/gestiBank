package com.wha.spring.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Id;

import org.hibernate.annotations.Type;
import org.joda.time.LocalDate;

@Embeddable
public class ChildrenKey implements Serializable{

	
	public ChildrenKey() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ChildrenKey(String name, LocalDate date_naissance, String sex) {
		this.name = name;
		this.date_naissance = date_naissance;
		this.sex = sex;
	}
	
		
	@Column(name="NAME", nullable=false)
	private String name;
	
	@Column(name="date_naissance", nullable=false)
	@Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDate")
	private LocalDate date_naissance;
	
	@Column(name="sex", nullable=false)
	private String sex;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDate_naissance() {
		return date_naissance;
	}

	public void setDate_naissance(LocalDate date_naissance) {
		this.date_naissance = date_naissance;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	@Override
	public String toString() {
		return "ChildrenKey [name=" + name + ", date_naissance=" + date_naissance + ", sex=" + sex + "]";
	}
}
