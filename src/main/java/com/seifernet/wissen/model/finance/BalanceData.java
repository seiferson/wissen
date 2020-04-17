package com.seifernet.wissen.model.finance;

import java.util.List;

public class BalanceData {

    private double balance;
    private double incomeAmount;
    private double expensesAmount;
    private List<Transaction> expenses;
    private List<Transaction> income;

    public double getIncomeAmount() {
        return incomeAmount;
    }

    public void setIncomeAmount(double incomeAmount) {
        this.incomeAmount = incomeAmount;
    }

    public double getExpensesAmount() {
        return expensesAmount;
    }

    public void setExpensesAmount(double expensesAmount) {
        this.expensesAmount = expensesAmount;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<Transaction> getIncome() {
        return income;
    }

    public void setIncome(List<Transaction> income) {
        this.income = income;
    }

    public List<Transaction> getExpenses() {
        return expenses;
    }

    public void setExpenses(List<Transaction> expenses) {
        this.expenses = expenses;
    }
}
