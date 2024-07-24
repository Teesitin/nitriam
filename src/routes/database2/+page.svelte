<script lang='ts'>
    import { db } from '$lib/firebase';
    import { collection, onSnapshot, query } from 'firebase/firestore';
    import { writable } from 'svelte/store';
    
    interface Size {
        weight: number;
        fur: string;
        tail: string;
    }

    interface Cat {
        name: string;
        breed: string;
        color: string;
        active: boolean;
        size: Size;
        id: string;
    }
    
    let cats=writable<Cat[]>([]);

    async function loadData() {
        const querySnapshot = query(collection(db, 'cats'));
        
        onSnapshot(querySnapshot,
            (querySnapshot)=>{
                let catsArray:Cat[]=[];

                querySnapshot.forEach((doc)=>{
                    catsArray.push({ id: doc.id, ...doc.data() } as Cat)
                });

                cats.set(catsArray);
            }
        );
    }

    loadData();
</script>

<div>
    {#each $cats as cat}
        <div>
            {cat.name}
        </div>
    {/each}
</div>