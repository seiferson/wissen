package com.seifernet.wissen.model.finance;

import java.util.List;

public class BalanceData {

    private Double balance;
    private Double incomeAmount;
    private Double expensesAmount;
    private List<Transaction> expenses;
    private List<Transaction> income;

    public Double getIncomeAmount() {
        return incomeAmount;
    }

    public void setIncomeAmount(Double incomeAmount) {
        this.incomeAmount = incomeAmount;
    }

    public Double getExpensesAmount() {
        return expensesAmount;
    }

    public void setExpensesAmount(Double expensesAmount) {
        this.expensesAmount = expensesAmount;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
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
