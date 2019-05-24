package com.wha.spring.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wha.spring.idao.IConseillerDao;
import com.wha.spring.model.Conseiller;

@Repository("conseillerDao")
public class ConseillerDaoImpl extends AbstractDao implements IConseillerDao {

	public void saveConseiller(Conseiller conseiller) {
		persist(conseiller);
	}

	public List<Conseiller> findAllConseillers() {
		Query q = em.createNamedQuery("findAllConseillers");
		List<Conseiller> res = q.getResultList();
		return res;
	}

	public void deleteConseillerByMle(int mle) {

	}

	public Conseiller findByMle(int mle) {
		Query q = em.createNamedQuery("findByMle");
		q.setParameter("mle", mle);
		Conseiller res = (Conseiller) q.getSingleResult();
		return res;
	}

	public void updateConseiller(Conseiller conseiller) {
		// TODO Auto-generated method stub
		em.merge(conseiller);
	}

	

}
