package com.wha.spring.iservice;

import java.util.List;

import com.wha.spring.model.Conseiller;

public interface IConseillerService {

	void saveConseiller(Conseiller conseiller);

	List<Conseiller> findAllConseillers();

	void deleteConseillerByMle(int mle);

	Conseiller findByMle(int mle);

}
