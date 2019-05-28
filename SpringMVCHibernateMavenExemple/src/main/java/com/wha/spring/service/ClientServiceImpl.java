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
public class ClientServiceImpl implements IClientService {

	@Autowired
	private IClientDao dao;

	public void saveClient(Client client) {
		dao.saveClient(client);
	}

	public List<Client> findAllClients() {
		return dao.findAllClients();
	}

	public void deleteClient(int id_client) {
		dao.deleteClient(id_client);
	}

	public void updateClient(int id_client) {
		dao.updateClient(id_client);
	}

	public Client findById(int id_client) {
		return dao.findById(id_client);
	}

	public List<Client> findAllClientsByConseiller(int mle) {
		return dao.findAllClientsByConseiller(mle);
	}



}
