package com.wha.spring.iservice;

import java.util.List;

import com.wha.spring.model.Client;

public interface IClientService {

	public void saveClient(Client client);

	public List<Client> findAllClients();

	public Client findById(int id_client);

	public void updateClient(int id_client);

	public List<Client> findAllClientsByConseiller(int mle);
	
	public void deleteClient(int id_client);	
	
}
