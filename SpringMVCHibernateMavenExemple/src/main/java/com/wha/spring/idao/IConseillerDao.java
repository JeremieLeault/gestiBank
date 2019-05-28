package com.wha.spring.idao;

import java.util.List;

import com.wha.spring.model.Conseiller;

public interface IConseillerDao {


	void saveConseiller(Conseiller conseiller);

	List<Conseiller> findAllConseillers();

	Conseiller findByMle(int mle);
	
	public void deleteConseiller(int mle);

}
