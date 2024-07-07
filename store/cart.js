import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();
export const useCardStor = defineStore("cart", {
  state: () => {
    return {
      card: [],
    };
  },
  getters: {
    allIems(state) {
      return state.card;
    },
    totalAmount(state){
      return state.card.reduce((total,product)=>{
        return product.is_sale ? total+(product.sale_price*product.qty) :total+(product.price*product.qty)
      },0)
    }
  },
  actions: {
    addToCart(product, count) {
      this.card.push({
        ...product,
        qty: count,
      });
      toast.success("محصول به سبد خرید اضافه شد");
    },
    clear(){
      this.card=[];
    }
    ,
    increment(id) {
      const item = this.card.find((p) => p.id == id);
      if (item) {
        item.qty++;
      }
    },
    dicrement(id) {
      const item = this.card.find((p) => p.id == id);
      if (item) {
       
          item.qty--;
        
      }
    },
    remove(id) {
      this.card = this.card.filter((p) => p.id != id);
    },
  },
  persist: {
    storage: persistedState.localStorage,
    key: "shopping-cart",
  },
});
