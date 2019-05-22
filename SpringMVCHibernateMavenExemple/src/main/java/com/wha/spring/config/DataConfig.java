package com.wha.spring.config;

import java.util.Properties;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.AvailableSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@PropertySource("classpath:database.properties")
public class DataConfig {
	
	@Autowired
	private Environment env;
	
	@Bean
	public DataSource getDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(env.getRequiredProperty("datasource.driver"));
		dataSource.setUrl(env.getRequiredProperty("datasource.url"));
		dataSource.setUsername(env.getRequiredProperty("datasource.username"));
		dataSource.setPassword(env.getRequiredProperty("datasource.password"));
		return dataSource;
	}

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(getDataSource());
		em.setPackagesToScan(new String[] { "com.wha.spring.model" });

		JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		em.setJpaProperties(getHibernateProperties());

		return em;
	}

	@Bean
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(emf);

		return transactionManager;
	}

	@Bean
	public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
		return new PersistenceExceptionTranslationPostProcessor();
	}

	private Properties getHibernateProperties() {
		Properties properties = new Properties();
		properties.put(AvailableSettings.DIALECT, env.getRequiredProperty("hibernate.dialect"));
		properties.put(AvailableSettings.SHOW_SQL, env.getRequiredProperty("hibernate.show_sql"));
		properties.put(AvailableSettings.HBM2DDL_AUTO, env.getRequiredProperty("hibernate.hbm2ddl.auto"));
		return properties;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
//	private final String PROPERTY_DRIVER = "driver";
//	private final String PROPERTY_URL = "url";
//	private final String PROPERTY_USERNAME = "user";
//	private final String PROPERTY_PASSWORD = "password";
//	private final String PROPERTY_SHOW_SQL = "hibernate.show_sql";
//	private final String PROPERTY_DIALECT = "hibernate.dialect";
//	private final String PROPERTY_HBM2DDL = "hibernate.hbm2ddl.auto";
//
//	@Autowired
//	Environment environment;
//
//	@Bean
//	public LocalSessionFactoryBean sessionFactory() {
//		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
//		sessionFactory.setDataSource(dataSource());
//		sessionFactory.setPackagesToScan(new String[] { "com.wha.spring.model" });
//		sessionFactory.setHibernateProperties(hibernateProps());
//		return sessionFactory;
//	}
//
//	Properties hibernateProps() {
//		Properties properties = new Properties();
//		properties.setProperty(PROPERTY_HBM2DDL, environment.getProperty(PROPERTY_HBM2DDL));
//		properties.setProperty(PROPERTY_DIALECT, environment.getProperty(PROPERTY_DIALECT));
//		properties.setProperty(PROPERTY_SHOW_SQL, environment.getProperty(PROPERTY_SHOW_SQL));
//		return properties;
//	}
//
//	@Bean
//	DataSource dataSource() {
//		DriverManagerDataSource ds = new DriverManagerDataSource();
//		ds.setUrl(environment.getProperty(PROPERTY_URL));
//		ds.setUsername(environment.getProperty(PROPERTY_USERNAME));
//		ds.setPassword(environment.getProperty(PROPERTY_PASSWORD));
//		ds.setDriverClassName(environment.getProperty(PROPERTY_DRIVER));
//		ds.setConnectionProperties(hibernateProps());
//		return ds;
//	}
//
//	@Bean
//	@Autowired
//	HibernateTransactionManager transactionManager(SessionFactory s) {
//		HibernateTransactionManager hibernateTXManager = new HibernateTransactionManager();
//		hibernateTXManager.setSessionFactory(s);
//		return hibernateTXManager;
//	}
}
