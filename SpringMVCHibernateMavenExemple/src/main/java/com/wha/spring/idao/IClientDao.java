package com.wha.spring.idao;

import java.util.List;


import com.wha.spring.model.Client;

public interface IClientDao {
	
	public void saveClient(Client client);

	public List<Client> findAllClients();

	public Client findById(int id_client);

	public void updateClient(int id_client);

	public List<Client> findAllClientsByConseiller(int mle);
	
	public void deleteClient(int id_client);

}
