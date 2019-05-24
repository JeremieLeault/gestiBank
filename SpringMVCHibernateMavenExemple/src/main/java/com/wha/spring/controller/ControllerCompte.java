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

import com.wha.spring.iservice.ICompteService;
import com.wha.spring.model.Compte;


@RestController
@RequestMapping("compte")
public class ControllerCompte {
	
	@Autowired
	ICompteService compteService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String helloWorld() {
		return "Compte";
	}

	@RequestMapping(value = "/{num}")
	public ResponseEntity<Compte> getCompte(@PathVariable int num) {
		Compte resultat = compteService.findCompteByNum(num);
		System.out.println(resultat);
		return new ResponseEntity<Compte>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{num}/solde")
	public Float getSolde(@PathVariable int num) {
		Float resultat = compteService.findSoldeByNum(num);
		System.out.println(resultat);
		return resultat;
	}
	
	@RequestMapping(value = "/getAll")
	public ResponseEntity<List<Compte>> getAllComptes() {
		List<Compte> resultat = compteService.findAllComptes();
		System.out.println(resultat);
		return new ResponseEntity<List<Compte>>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create", method=RequestMethod.POST)
	public Compte createCompte(@RequestBody Compte cpt) {
		compteService.saveCompte(cpt);
		return cpt;
	}
}
