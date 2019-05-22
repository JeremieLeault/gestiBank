package com.wha.spring.model;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
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

import org.hibernate.annotations.Type;
import org.joda.time.LocalDate;

import lombok.Data;

@Entity
@NamedQueries({
	@NamedQuery( name = "findAllEmployees", query = "SELECT e from Employee e"),
	@NamedQuery( name = "findBySsn", query = "SELECT e from Employee e WHERE e.ssn=:ssn"),
	@NamedQuery( name = "findById", query ="SELECT e from Employee e WHERE e.id=:id")
})
@Table(name = "EMPLOYEE2")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "NAME", nullable = false)
	private String name;

	@Column(name = "JOINING_DATE", nullable = true)
	@Type(type = "org.jadira.usertype.dateandtime.joda.PersistentLocalDate")
	private LocalDate joiningDate;

	@Column(name = "SALARY", nullable = false)
	private BigDecimal salary;

	@Column(name = "SSN", unique = true, nullable = false)
	private String ssn;

	@OneToOne(cascade = { CascadeType.ALL })
	private Address address;

	@OneToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
	private Collection<Children> children;

	public Address getAddress() {
		return address;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(LocalDate joiningDate) {
		this.joiningDate = joiningDate;
	}

	public BigDecimal getSalary() {
		return salary;
	}

	public void setSalary(BigDecimal salary) {
		this.salary = salary;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Collection<Children> getChildren() {
		return children;
	}

	public void setChildren(Collection<Children> children) {
		this.children = children;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", joiningDate=" + joiningDate + ", salary=" + salary
				+ ", ssn=" + ssn + ", address=" + address + ", children=" + children + "]";
	}

	
}
