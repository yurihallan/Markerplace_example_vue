const app = Vue.createApp({
    data: function(){
        return {
            product: 'Boots',
            description: 'Descricao do produto.',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/',
            inventory:100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {id:2234, color:'green'},
                {id:2235, color:'blue'},
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
    }
})