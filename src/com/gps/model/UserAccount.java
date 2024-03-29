package com.gps.model;

import java.util.Date;

public class UserAccount
{
  public static final int USER_TYPE_DEVICE = 1;
  public static final int USER_TYPE_CLIENT = 2;
  public static final String USER_ACCOUNT_ADMIN = "admin";
  public static final String USER_ACCOUNT_ADMINISTRATOR = "administrator";
  private Integer id;
  private String name;
  private String Account;
  private String password;
  private Integer type;
  private Date validity;
  
  public Integer getId()
  {
    return this.id;
  }
  
  public void setId(Integer id)
  {
    this.id = id;
  }
  
  public String getName()
  {
    return this.name;
  }
  
  public void setName(String name)
  {
    this.name = name;
  }
  
  public String getAccount()
  {
    return this.Account;
  }
  
  public void setAccount(String account)
  {
    this.Account = account;
  }
  
  public String getPassword()
  {
    return this.password;
  }
  
  public void setPassword(String password)
  {
    this.password = password;
  }
  
  public Integer getType()
  {
    return this.type;
  }
  
  public void setType(Integer type)
  {
    this.type = type;
  }
  
  public Date getValidity()
  {
    return this.validity;
  }
  
  public void setValidity(Date validity)
  {
    this.validity = validity;
  }
}
