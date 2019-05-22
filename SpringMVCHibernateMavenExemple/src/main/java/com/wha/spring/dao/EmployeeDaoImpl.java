package com.wha.spring.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wha.spring.model.Employee;

@Repository("employeeDao")
public class EmployeeDaoImpl extends AbstractDao implements EmployeeDao {

	public void saveEmployee(Employee employee) {
		// TODO Auto-generated method stub
		persist(employee);
	}

	public List<Employee> findAllEmployees() {
		// TODO Auto-generated method stub
		//String req = "SELECT e from Employee e";
		Query q = em.createNamedQuery("findAllEmployees");
		List<Employee> res = q.getResultList();
		return res;
	}

	public void deleteEmployeeBySsn(String ssn) {
		// TODO Auto-generated method stub

	}

	public Employee findBySsn(String ssn) {
	//	String req = "SELECT e from Employee e WHERE e.ssn=:ssn";
	//	Query q = em.createQuery(req);
		Query q = em.createNamedQuery("findBySsn");
		q.setParameter("ssn", ssn);
		Employee res = (Employee) q.getSingleResult();
		return res;
	}

	public void updateEmployee(Employee employee) {
		// TODO Auto-generated method stub
		em.merge(employee);
	}

	public Employee findById(int id) {
		// TODO Auto-generated method stub
		Query q = em.createNamedQuery("findById");
		q.setParameter("id", id);
		Employee res = (Employee) q.getSingleResult();
		return res;
	}

}
