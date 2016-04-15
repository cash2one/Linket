package com.linkit.garsi.common.authorize.vo;

/**
 * 修改密码模块
 * 
 * @author wang.sheng
 * 
 */
public class PasswordForm
{
	private String oldPassword;
	private String newPassword;

	public String getOldPassword()
	{
		return oldPassword;
	}

	public void setOldPassword(String oldPassword)
	{
		this.oldPassword = oldPassword;
	}

	public String getNewPassword()
	{
		return newPassword;
	}

	public void setNewPassword(String newPassword)
	{
		this.newPassword = newPassword;
	}

}
