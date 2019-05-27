package com.wha.spring.iservice;

import java.util.List;

import com.wha.spring.model.Client;

public interface IClientService {

	void saveClient(Client client);

	List<Client> findAllClients();

	void deleteCLientById(int id_client);

	Client findById(int id_client);

	void updateClient(Client client);

	List<Client> findAllClientsByConseiller(int mle);
}
