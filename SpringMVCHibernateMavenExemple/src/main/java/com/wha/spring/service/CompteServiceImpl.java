package com.wha.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wha.spring.idao.ICompteDao;
import com.wha.spring.iservice.ICompteService;
import com.wha.spring.model.Compte;

@Service("compteService")
@Transactional
public class CompteServiceImpl implements ICompteService{
	
	@Autowired
	private ICompteDao dao;

	public void saveCompte(Compte compte) {
		dao.saveCompte(compte);
	}

	public List<Compte> findAllComptes() {
		return dao.findAllComptes();
	}

	public void deleteCompteByNum(int numCompte) {
		dao.deleteCompteByNum(numCompte);
	}

	public Compte findCompteByNum(int numCompte) {
		return dao.findCompteByNum(numCompte);
	}

	public void updateCompte(Compte compte) {
		dao.updateCompte(compte);
	}

	public Float findSoldeByNum(int num) {
		// TODO Auto-generated method stub
		return dao.findSoldeByNum(num);
	}

	public List<Compte> findAllComptesByClient(int id_client) {
		return dao.findAllComptesByClient(id_client);
	}

	
}
