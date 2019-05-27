package com.wha.spring.dao;

import javax.persistence.Query;
import org.springframework.stereotype.Repository;

import com.wha.spring.idao.ILoginConseillerDao;
@Repository("loginConseillerDaoImpl")
public class LoginConseillerDaoImpl extends AbstractDao implements ILoginConseillerDao{

	public int verifUnicite(String email) {
		Query q = em.createNamedQuery("verifUnicite");
		q.setParameter("email", email);
		int res = (Integer) q.getSingleResult();
		return res;
	}

}
