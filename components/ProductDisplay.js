app.component('product-display',{
    props:{
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:
    //html
    `<div class="product-display">
      <div class="product-container">
      <div class="product-image">
        <img :src="image" :class="{ 'out-of-stock-img': !inStock }" >
      </div>
      <div class="product-info">

        <h1>{{ title }}</h1>
        
        <p v-if="onSale">{{ saleMessage }}</p>
        
        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
        <p v-else>Out of Stock</p>
    
        <p>Shipping: {{shipping}}</p>

        <product-details :details="details"></product-details>

        <a :href="url">Vuejs</a>

        
        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id"  
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor: variant.color}"
          > </div>

        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{size}}</li>
        </ul>

        <button 
          class="button" 
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="AddToCart">Add to Cart</button>
        <button class="button" @click="removeFromCart">Remover Item</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data: function(){
        return {
            product: 'Socks',
            brand: 'Mastery Course',
            description: 'Descricao do produto.',
            selectedVariant:0,
            url: 'https://vuejs.org/',
            inventory:100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            onSale: true,
            variants:[
                {id:2234, color:'green', image: './assets/images/socks_green.jpg',quantity:50},
                {id:2235, color:'blue', image:'./assets/images/socks_blue.jpg',quantity:0},
            ],
            reviews:[],
            sizes: ['S', 'M', 'L', 'XL'],

        }
    },
    methods: {
        AddToCart(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].id);
        },
        removeFromCart(){
            this.$emit('remove-from-cart',this.variants[this.selectedVariant].id);
          
        },
        updateVariant(index){
            this.selectedVariant = index;
            
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed:{
        title(){
            return this.brand +' '+ this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity;
        },
        saleMessage(){
            if(this.onSale){
                return this.brand + ' ' + this.product + ' is on sale';
            }
            return '';
        },
        shipping(){
            if(this.premium){
                return 'Free';
            }

            return 2.99;
        }
    }
})