package com.wha.spring.dao;

import java.util.Calendar;
import java.util.List;

import javax.persistence.Query;

import com.wha.spring.idao.IDemandeDao;
import com.wha.spring.model.Demande;

public class DemandeDaoImpl extends AbstractDao implements IDemandeDao {

	public Demande findById(int id_demande) {
		Query q = em.createNamedQuery("findDemandeById");
		q.setParameter("id_demande", id_demande);
		Demande res = (Demande) q.getSingleResult();
		return res;
	}

	public List<Demande> findAllDemandes() {
		Query q = em.createNamedQuery("findAllDemandes");
		List<Demande> res = q.getResultList();
		return res;
	}

	public void saveDemande(Demande dmd) {
		persist(dmd);
	}

	public Demande findByClient(int id_client) {
		Query q = em.createNamedQuery("findDemandeByClient");
		q.setParameter("client_id_client", id_client);
		Demande res = (Demande) q.getSingleResult();
		return res;
	}

	public Demande findByDate(Calendar date_demande) {
		Query q = em.createNamedQuery("findDemandeByDate");
		q.setParameter("date_demande", date_demande);
		Demande res = (Demande) q.getSingleResult();
		return res;
	}

}
