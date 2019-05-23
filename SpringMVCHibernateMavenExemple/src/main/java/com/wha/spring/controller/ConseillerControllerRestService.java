package com.wha.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wha.spring.iservice.ConseillerService;
import com.wha.spring.model.Conseiller;

@RestController
@RequestMapping("conseiller")
public class ConseillerControllerRestService {

	@Autowired
	ConseillerService service;

//	@Autowired
//	AddressService addrService;

	@RequestMapping(value = "", method = RequestMethod.GET)
	public String helloWorld() {
		return "Conseiller";
	}

	@RequestMapping(value = "/{mle}")
	public ResponseEntity<Conseiller> getConseiller(@PathVariable int mle) {
		Conseiller resultat = service.findByMle(mle);
		System.out.println(resultat);
		return new ResponseEntity<Conseiller>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getAll")
	public ResponseEntity<List<Conseiller>> getAllConseillers() {
		List<Conseiller> resultat = service.findAllConseillers();
		System.out.println(resultat);
		return new ResponseEntity<List<Conseiller>>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create", method=RequestMethod.POST)
	public Conseiller createEmployee(@RequestBody Conseiller cns) {
		service.saveConseiller(cns);
		return cns;
	}
	
	
}
