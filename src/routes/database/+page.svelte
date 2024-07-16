<script lang="ts">
    import { db } from '$lib/firebase';
    import { collection, getDocs } from 'firebase/firestore';

    async function loadData() {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    }
</script>

<button on:click={loadData}>Load Data</button>