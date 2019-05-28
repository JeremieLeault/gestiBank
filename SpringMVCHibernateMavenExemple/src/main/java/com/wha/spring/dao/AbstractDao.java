package com.wha.spring.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public abstract class AbstractDao {
	@PersistenceContext
	protected EntityManager em;

	public void persist(Object entity) {
		em.persist(entity);
	}

	public void delete(Object entity) {
		em.remove(entity);
	}

	public EntityManager getEm() {
		return em;
	}

	public void setEm(EntityManager em) {
		this.em = em;
	}
}
