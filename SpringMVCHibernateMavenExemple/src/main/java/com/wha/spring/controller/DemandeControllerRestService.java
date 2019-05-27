package com.wha.spring.controller;

import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wha.spring.iservice.IDemandeService;
import com.wha.spring.model.Demande;

@RestController
@RequestMapping("demande")
public class DemandeControllerRestService {

	@Autowired
	IDemandeService service;

	@RequestMapping(value = "", method = RequestMethod.GET)
	public String helloWorld() {
		return "demande";
	}
	
	@RequestMapping(value = "/{id_demande}")
	public ResponseEntity<Demande> getDemandeById(@PathVariable int id_demande) {
		Demande resultat = service.findById(id_demande);
		System.out.println(resultat);
		return new ResponseEntity<Demande>(resultat, HttpStatus.OK);
	}
	@RequestMapping(value = "/client/{id_client}")
	public ResponseEntity<Demande> getDemandeByClient(@PathVariable int id_client) {
		Demande resultat = service.findByClient(id_client);
		System.out.println(resultat);
		return new ResponseEntity<Demande>(resultat, HttpStatus.OK);
	}
	@RequestMapping(value = "/date/{date_demande}")
	public ResponseEntity<Demande> getDemandeById(@PathVariable Calendar date_demande) {
		Demande resultat = service.findByDate(date_demande);
		System.out.println(resultat);
		return new ResponseEntity<Demande>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getAll")
	public ResponseEntity<List<Demande>> getAllDemandes() {
		List<Demande> resultat = service.findAllDemandes();
		System.out.println(resultat);
		return new ResponseEntity<List<Demande>>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create", method=RequestMethod.POST)
	public Demande createDemande(@RequestBody Demande dmd) {
		service.saveDemande(dmd);
		return dmd;
	}
	
}