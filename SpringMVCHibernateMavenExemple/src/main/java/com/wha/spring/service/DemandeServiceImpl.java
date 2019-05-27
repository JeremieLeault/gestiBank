package com.wha.spring.service;

import java.util.Calendar;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.spring.idao.IDemandeDao;
import com.wha.spring.iservice.IDemandeService;
import com.wha.spring.model.Demande;

@Service("demandeService")
@Transactional
public class DemandeServiceImpl implements IDemandeService {

	@Autowired
	private IDemandeDao dao;
	
	public Demande findById(int id_demande) {
		return dao.findById(id_demande);
	}

	public List<Demande> findAllDemandes() {
		return dao.findAllDemandes();
	}

	public void saveDemande(Demande dmd) {
		dao.saveDemande(dmd);
	}

	public List<Demande> findByClient(int id_client) {
		// TODO Auto-generated method stub
		return dao.findByClient(id_client);
	}

	public Demande findByDate(Calendar date_demande) {
		// TODO Auto-generated method stub
		return dao.findByDate(date_demande);
	}

}
