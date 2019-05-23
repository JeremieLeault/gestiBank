package com.wha.spring.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wha.spring.idao.ConseillerDao;
import com.wha.spring.iservice.ConseillerService;
import com.wha.spring.model.Conseiller;

@Service("conseillerService")
@Transactional
public class ConseillerServiceImpl implements ConseillerService{

	@Autowired
	private ConseillerDao dao;
	
	
	public void saveConseiller(Conseiller conseiller) {
		// TODO Auto-generated method stub
		dao.saveConseiller(conseiller);
	}

	public List<Conseiller> findAllConseillers() {
		// TODO Auto-generated method stub
		return dao.findAllConseillers();
	}

	public void deleteConseillerByMle(int mle) {
		// TODO Auto-generated method stub
		dao.deleteConseillerByMle(mle);
	}

	public Conseiller findByMle(int mle) {
		// TODO Auto-generated method stub
		return dao.findByMle(mle);
	}

	public void updateConseiller(Conseiller conseiller) {
		// TODO Auto-generated method stub
		dao.saveConseiller(conseiller);
	}


}
