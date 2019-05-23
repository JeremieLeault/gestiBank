package com.wha.spring.idao;

import java.util.List;

import com.wha.spring.model.Compte;

public interface ICompteDao {
	
	void saveCompte(Compte compte);

	List<Compte> findAllComptes();

	void deleteCompteByNum(int numCompte);

	Compte findCompteByNum(int numCompte);
	
	public void updateCompte(Compte compte);

}
