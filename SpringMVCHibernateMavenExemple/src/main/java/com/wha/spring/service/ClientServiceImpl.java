package com.wha.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wha.spring.idao.IClientDao;
import com.wha.spring.iservice.IClientService;
import com.wha.spring.model.Client;

@Service("clientService")
@Transactional
public class ClientServiceImpl implements IClientService{

	@Autowired
	private IClientDao dao;
	
	
	public void saveClient(Client client) {
		// TODO Auto-generated method stub
		dao.saveClient(client);
	}

	public List<Client> findAllClients() {
		// TODO Auto-generated method stub
		return dao.findAllClients();
	}

	public void deleteCLientById(int id_client) {
		// TODO Auto-generated method stub
		dao.deleteCLientById(id_client);
	}

	public Client findById(int id_client) {
		// TODO Auto-generated method stub
		return dao.findById(id_client);
	}

	public void updateClient(Client client) {
		// TODO Auto-generated method stub
		dao.saveClient(client);
	}

	public List<Client> findAllClientsByConseiller(int mle) {
		// TODO Auto-generated method stub
		return dao.findAllClientsByConseiller(mle);
	}

}
