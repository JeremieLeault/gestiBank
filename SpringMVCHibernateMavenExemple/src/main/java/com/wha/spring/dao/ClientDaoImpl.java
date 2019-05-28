package com.wha.spring.dao;

import java.util.List;

import javax.persistence.Query;

import org.apache.log4j.Logger;
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

	public Client findById(int id_client) {
		Query q = em.createNamedQuery("findClientById");
		q.setParameter("id_client", id_client);
		Client res = (Client) q.getSingleResult();
		return res;
	}

	public void updateClient(int id_client) {
		Query q = em.createNamedQuery("updateClient");
		q.setParameter("id_client", id_client);
		em.merge(id_client);
	}
	
	public void deleteClient(int id_client) {
		Client cli = findById(id_client);
		em.remove(cli);
	}

	public List<Client> findAllClientsByConseiller(int mle) {
		Query q = em.createNamedQuery("findAllClientsByConseiller");
		q.setParameter("mle", mle);
		List<Client> res = q.getResultList();
		return res;
	}

	private final static Logger logger = Logger.getLogger(ClientDaoImpl.class);

	public Client saveUser(Client client) {
//Appel de la méthod Warn de la class Logger
		logger.warn("begin save user process");
		getEm().persist(client);

//Appel de la méthod debug de la class Logger
		logger.debug("end save user process");
		return client;
	}

	public Client findByIdLog(int id_client) {
//Appel de la méthod init de la class Logger
		logger.info("find user by ID");
		return (Client) getEm().find(Client.class, id_client);
	}

}
