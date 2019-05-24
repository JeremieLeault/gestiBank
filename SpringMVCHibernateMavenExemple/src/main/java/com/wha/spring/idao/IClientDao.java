package com.wha.spring.idao;

import java.util.List;


import com.wha.spring.model.Client;

public interface IClientDao {
	
	public void saveClient(Client client);

	public List<Client> findAllClients();

	public void deleteCLientById(int id_client);

	public Client findById(int id_client);

	public void updateClient(Client client);
}
