package com.wha.spring.idao;

import java.util.Calendar;
import java.util.List;

import com.wha.spring.model.Demande;

public interface IDemandeDao {
	Demande findById(int id_demande);

	List<Demande> findAllDemandes();

	void saveDemande(Demande dmd);

	Demande findByClient(int id_client);

	Demande findByDate(Calendar date_demande);
}
