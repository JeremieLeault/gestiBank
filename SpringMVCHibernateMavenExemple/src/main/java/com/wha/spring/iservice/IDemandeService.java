package com.wha.spring.iservice;

import java.util.Calendar;
import java.util.List;

import com.wha.spring.model.Demande;

public interface IDemandeService {


	Demande findById(int id_demande);

	List<Demande> findAllDemandes();

	void saveDemande(Demande dmd);

	List<Demande> findByClient(int id_client);

	Demande findByDate(Calendar date_demande);

}
