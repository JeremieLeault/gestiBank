package com.wha.spring.iservice;

import java.util.List;

import com.wha.spring.model.Compte;

public interface ICompteService {
	
	void saveCompte(Compte compte);

	List<Compte> findAllComptes();

	void deleteCompteByNum(int numCompte);

	Compte findCompteByNum(int numCompte);
	
	public void updateCompte(Compte compte);

	Float findSoldeByNum(int num);

}
