package com.wha.spring.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wha.spring.idao.ICompteDao;
import com.wha.spring.model.Compte;

@Repository("compteDao")
public class CompteDaoImpl extends AbstractDao implements ICompteDao{

	public void saveCompte(Compte compte) {
		persist(compte);
	}

	public List<Compte> findAllComptes() {
		Query q = em.createNamedQuery("findAllComptes");
		List<Compte> res = q.getResultList();
		return res;	
	}
	public List<Compte> findAllComptesByClient(int id_client) {
		Query q = em.createNamedQuery("findAllComptesByClient");
		q.setParameter("id_client", id_client);
		List<Compte> res = q.getResultList();
		return res;	
	}

	public void deleteCompteByNum(int numCompte) {		
	}

	public Compte findCompteByNum(int numCompte) {
		Query q = em.createNamedQuery("findCompteByNum");
		q.setParameter("numCompte", numCompte);
		Compte res = (Compte) q.getSingleResult();
		return res;
	}
	
	public void updateCompte(Compte compte) {
		em.merge(compte);
	}

	public Float findSoldeByNum(int numCompte) {
		Query q = em.createNamedQuery("findSoldeByNum");
		q.setParameter("numCompte", numCompte);
		Float res = (Float) q.getSingleResult();
		return res;
	}
	
	

}
