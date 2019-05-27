package com.wha.spring.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.spring.idao.ILoginClientDao;
import com.wha.spring.idao.ILoginConseillerDao;
import com.wha.spring.iservice.IloginClientService;

@Service("loginClientService")
@Transactional
public class LoginClientServiceImpl implements IloginClientService {

	@Autowired
	private ILoginClientDao dao;

	public int verifUniciteClient(String email) {
		return dao.verifUniciteClient(email);		
	}
	
}
