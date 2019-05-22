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

import com.wha.spring.model.Employee;
import com.wha.spring.service.EmployeeService;

@RestController
@RequestMapping("employee")
public class HelloControllerRestService {

	@Autowired
	EmployeeService service;

//	@Autowired
//	AddressService addrService;

	@RequestMapping(value = "", method = RequestMethod.GET)
	public String helloWorld() {
		return "Bienvenue";
	}

	@RequestMapping(value = "/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable int id) {
		Employee resultat = service.findById(id);
		System.out.println(resultat);
		return new ResponseEntity<Employee>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/getAll")
	public ResponseEntity<List<Employee>> getAllEmployee() {
		List<Employee> resultat = service.findAllEmployees();
		System.out.println(resultat);
		return new ResponseEntity<List<Employee>>(resultat, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/create", method=RequestMethod.POST)
	public Employee createEmployee(@RequestBody Employee emp) {
		service.saveEmployee(emp);
		return emp;
	}
	
//	@RequestMapping(value = "/insert", method = RequestMethod.GET)
//	public Response
	
}
