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
            name,
            description,
            image,
            price
        });
    }
</script>

<button on:click={loadData} class="bg-slate-800 text-white p-2 hover:scale-110 focus:scale-110 m-10">Load Data</button>
<button on:click={createdata} class="bg-slate-800 text-white p-2 hover:scale-110 focus:scale-110 m-10">Create Data</button>


<div class="border-2 w-fit min-h-24 m-4 bg-gray-100 rounded-xl p-4">
    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Name</div>
        <input class="border-2 rounded" bind:value={name}/>
    </div>

    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Description</div>
        <input class="border-2 rounded" bind:value={description}/>
    </div>

    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Image</div>
        <input class="border-2 rounded" bind:value={image}/>
    </div>

    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Price</div>
        <input type="number" class="border-2 rounded  w-10" bind:value={price}/>
    </div>
</div>


<div class="border-2 min-w-24 min-h-24 m-4 bg-gray-100 rounded-xl p-4">
    Every Data
    {#each products as product}
        <div class="flex gap-10 border-2 mb-4">
            <div class="mt-2">{product.name}</div>
            <div class="mt-2">{product.description}</div>
            <div class="mt-2">{product.image}</div>
            <div class="mt-2">{product.price}</div>
        </div>
    {/each}
</div>
