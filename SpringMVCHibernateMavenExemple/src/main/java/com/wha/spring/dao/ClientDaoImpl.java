package com.wha.spring.dao;

import java.util.List;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wha.spring.idao.IClientDao;
import com.wha.spring.model.Client;

@Repository("clientDao")
public class ClientDaoImpl extends AbstractDao implements IClientDao {

	public void saveClient(Client client) {
		persist(client);
	}

	public List<Client> findAllClients() {
		Query q = em.createNamedQuery("findAllClients");
		List<Client> res = q.getResultList();
		return res;
	}

	public void deleteCLientById(int id_client) {

	}

	public Client findById(int id_client) {
		Query q = em.createNamedQuery("findClientById");
		q.setParameter("id_client", id_client);
		Client res = (Client) q.getSingleResult();
		return res;
	}

	public void updateClient(Client client) {
		// TODO Auto-generated method stub
		em.merge(client);
	}
}
