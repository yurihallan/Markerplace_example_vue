app.component('product-details', {
    props:{
        details:{
            type: Array,
            required: true
        }
    },
    // html
    template:
    `
    <p>Product Detail</p>
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>`
   
})