package com.wha.spring.idao;

import java.util.List;

import com.wha.spring.model.Conseiller;

public interface ConseillerDao {


	void saveConseiller(Conseiller conseiller);

	List<Conseiller> findAllConseillers();

	void deleteConseillerByMle(int mle);

	Conseiller findByMle(int mle);

}
