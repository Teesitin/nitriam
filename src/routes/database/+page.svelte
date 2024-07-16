<script lang="ts">
    import { db } from '$lib/firebase';
    import { addDoc, collection, getDocs } from 'firebase/firestore';

    // Declare 'products' as an array, this is reactive by default in Svelte
    let products: any[] = [];
    
    let name: string='';
    let description: string='';
    let image: string='';
    let price: string='';

    // Function to load data
    async function loadData() {
        const querySnapshot = await getDocs(collection(db, "products"));
        // Svelte will react to this reassignment
        products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(products);
    }

    async function createdata() {
        await addDoc(collection(db, "products"), {
            description: '',
            image: '',
            name: '',
            price: 0
        });
    }
</script>

<button on:click={loadData} class="bg-slate-800 text-white p-2 hover:scale-110 focus:scale-110 m-10">Load Data</button>
<button on:click={createdata} class="bg-slate-800 text-white p-2 hover:scale-110 focus:scale-110 m-10">Create Data</button>

<div>
    {#each products as product}
        <div>{product.name}</div>
    {/each}
</div>
