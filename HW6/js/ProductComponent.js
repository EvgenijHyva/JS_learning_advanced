Vue.component('products', {
    props: ['products', 'img'],
    template: `
            <main>
               <div class="products">
               <product v-for="product of products" :key="product.id_product" :img="img" :product="product"> </product>
               </div>
           </main>   
               `
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product-item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}}</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
})

