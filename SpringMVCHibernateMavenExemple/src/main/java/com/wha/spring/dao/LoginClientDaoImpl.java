package com.wha.spring.dao;

import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wha.spring.idao.ILoginClientDao;
import com.wha.spring.idao.ILoginConseillerDao;

@Repository("loginClientDaoImpl")
public class LoginClientDaoImpl extends AbstractDao implements ILoginClientDao{


	public int verifUniciteClient(String email) {
		Query q = em.createNamedQuery("verifUniciteClient");
		q.setParameter("email", email);
		int res = (Integer) q.getSingleResult();
		return res;
	}

}
