export
function merge (collection_1: number[], collection_2: number[]) : number[] {
    let collection_3: number[] = []
    let i:number = 0
    let j:number = 0
    let k:number = 0
    while(i<collection_1.length && j<collection_2.length) {
        if(collection_1[i]<=collection_2[j]) {
            collection_3[k] = collection_1[i]
            i++
        }
        else {
            collection_3[k] = collection_2[j]
            j++
        }
        k++
    }
    
    while(i<collection_1.length) {
        collection_3[k] = collection_1[i];
        i++;
        k++;
    }

    while(j<collection_2.length) {
        collection_3[k] = collection_2[j];
        j++;
        k++;
    }

    return collection_3
}