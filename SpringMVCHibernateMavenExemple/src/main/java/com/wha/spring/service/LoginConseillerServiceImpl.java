package com.wha.spring.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wha.spring.idao.ILoginConseillerDao;
import com.wha.spring.iservice.ILoginConseillerService;

@Service("loginConseillerService")
@Transactional
public class LoginConseillerServiceImpl implements ILoginConseillerService{

	@Autowired
	private ILoginConseillerDao dao;
	
	public int verifUnicite(String email) {
		return dao.verifUnicite(email);
	}
}
