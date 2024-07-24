<script lang="ts">
    import { db } from '$lib/firebase';
    import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

    interface Products {
        name: string,
        description: string,
        image: string,
        price: number,
        id: string,
    }

    let products: Products[] = [];

    let name_create: string = '';
    let description_create: string = '';
    let image_create: string = '';
    let price_create: number = 0;
    let loading = false;
    let createButtonDisabled = false;

    let name_update: string = '';
    let description_update: string = '';
    let image_update: string = '';
    let price_update: number = 0;
    let editingId: string | null = null;

    async function loadData() {
        const querySnapshot = await getDocs(collection(db, "products"));
        products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    async function createData() {
        if (createButtonDisabled) return;
        createButtonDisabled = true;
        loading = true;
        await addDoc(collection(db, "products"), { name: name_create, description: description_create, image: image_create, price: price_create });
        loadData();
        name_create = '';
        description_create = '';
        image_create = '';
        price_create = 0;
        loading = false;
        // function to disable button for x time, in this case 10 sec
        setTimeout(() => {
            createButtonDisabled = false;
        }, 10000);
    }

    async function updateData(id: string) {
        await updateDoc(doc(db, "products", id), { name: name_update, description: description_update, image: image_update, price: price_update });
        loadData();
        editingId = null;
    }

    async function deleteData(id: string) {
        await deleteDoc(doc(db, "products", id));
        loadData();
    }

    function editProduct(product: Products) {
        editingId = product.id;
        name_update = product.name;
        description_update = product.description;
        image_update = product.image;
        price_update = product.price;
    }
        // adding file upload function
    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            image_create = e.target.result as string;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    loadData();
</script>

<!-- create document -->
<div class="border-2 w-fit min-h-24 m-4 bg-gray-100 rounded-xl p-4">
    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Name</div>
        <input class="border-2 rounded" bind:value={name_create} />
    </div>

    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Description</div>
        <input class="border-2 rounded" bind:value={description_create} />
    </div>

    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Image URL</div>
        <input class="border-2 rounded" bind:value={image_create} />
    </div>
    <!-- adding a file upload field -->
    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-8">or Upload Image</div>
        <input type="file" accept="image/*" on:change={handleFileUpload} />
    </div>

    <div class="mb-2 w-72 flex justify-between">
        <div class="mr-2">Price</div>
        <input type="number" class="border-2 rounded w-10" bind:value={price_create} />
    </div>

    <button on:click={createData} class="bg-slate-800 text-white p-2 hover:scale-110 focus:scale-110 mt-5" disabled={createButtonDisabled}>
        <!-- new if/else to make text display diff when button no longer works, plus disabled for a base state outside the class area -->
        {#if createButtonDisabled}
            Blocked
        {:else if loading}
            Loading Data
        {:else}
            Create Data
        {/if}
    </button>
</div>

<!-- Editing field values for list of products -->
<div class="border-2 min-w-24 min-h-24 m-4 bg-gray-100 rounded-xl p-4">
    Each Product
    {#each products as product}
        <div class="flex gap-10 border-2 mb-4 p-2 items-center">
            <input value={product.name} on:input={(event) => name_update = event.target.value} disabled={editingId !== product.id} />
            <input value={product.description} on:input={(event) => description_update = event.target.value} disabled={editingId !== product.id} />
            <!-- adding a display for images -->
            <img src={product.image} alt={product.name} style="width: 300px; height: 300px;" />
            <input value={product.price} on:input={(event) => price_update = event.target.value} disabled={editingId !== product.id} />
            {#if editingId === product.id}
                <button on:click={() => updateData(product.id)} class="bg-green-500 text-white p-2">
                    Save Changes
                </button>
            {:else}
                <button on:click={() => editProduct(product)} class="bg-slate-800 text-white p-2">
                    Edit Product
                </button>
            {/if}
            <button on:click={() => deleteData(product.id)} class="bg-rose-500 text-white p-2">
                Delete Product
            </button>
        </div>
    {/each}
</div>

<!-- Set timeout for create button -->
<!-- make table look pretty -->
<!-- make images work -->
<!-- show as much data as possible while still being swag -->