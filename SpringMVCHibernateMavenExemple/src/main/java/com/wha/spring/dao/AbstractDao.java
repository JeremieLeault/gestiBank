package com.wha.spring.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class AbstractDao {
	@PersistenceContext
	protected EntityManager em;

	public void persist(Object entity) {
		em.persist(entity);
	}

	public void delete(Object entity) {
		em.remove(entity);
	}
}
