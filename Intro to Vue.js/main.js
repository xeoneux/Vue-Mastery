var app = new Vue({
  el: "#app",
  data: {
    cart: 0,
    inStock: true,
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      { variantId: 2234, variantColor: "green" },
      { variantId: 2235, variantColor: "blue" }
    ]
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    }
  }
});
