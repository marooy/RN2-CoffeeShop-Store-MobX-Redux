import React, { Component } from "react";
import { decorate, computed, observable } from "mobx";
import axios from "axios";

class CoffeeStore {
  coffeeshops = [];
  coffeeshop = null;
  loading = true;

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");
      const data = res.data;
      this.coffeeshops = data;
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeShop: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();
export default coffeeStore;
