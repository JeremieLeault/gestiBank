package com.wha.spring.iservice;

import java.util.List;

import com.wha.spring.model.Conseiller;

public interface ConseillerService {

	void saveConseiller(Conseiller conseiller);

	List<Conseiller> findAllConseillers();

	void deleteConseillerByMle(int mle);

	Conseiller findByMle(int mle);

}
