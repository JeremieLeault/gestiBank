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

import com.wha.spring.iservice.IClientService;
import com.wha.spring.model.Client;
import com.wha.spring.model.Conseiller;

@RestController
@RequestMapping("client")
public class ClientControllerRestService {
	
	@Autowired
	IClientService service;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String helloWorld() {
		return "Client";
	}
	
	@RequestMapping(value = "/{id_client}")
	public ResponseEntity<Client> getClient(@PathVariable int id_client) {
		Client resultat = service.findById(id_client);
		System.out.println(resultat);
		return new ResponseEntity<Client>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getAll")
	public ResponseEntity<List<Client>> getAllClients() {
		List<Client> resultat = service.findAllClients();
		System.out.println(resultat);
		return new ResponseEntity<List<Client>>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create", method=RequestMethod.POST)
	public Client createEmployee(@RequestBody Client clt) {
		service.saveClient(clt);
		return clt;
	}
}
