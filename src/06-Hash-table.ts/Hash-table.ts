export class DSA101_HashMap {

    public buckets: Array<any>
    public allocated: number;
    public occupied: number;

    constructor( initCapoacity = 16 ){
        this.buckets = [];
        this.allocated = initCapoacity;
        this.occupied = 0;
        for( let i=0; i<this.allocated; i++ ){
            this.buckets.push(null);
        }
    }

    getIndex(key){
        // Calculate hash of key
        const hashValue = this.hash1(key);
        // get index by modulo
        if( hashValue == 0 ) return;
        const index = (hashValue % this.allocated);
        // return index
        return index;
    }

    set(key, value){
        const bucketIndex = this.getIndex(key);
        if( !bucketIndex ) return;
        // new entry to add to HashMap
        let newEntry = { key, value };
        // Is bucket already occupied
        if( this.buckets[bucketIndex] == null ){
            this.buckets[bucketIndex] = [];
        }
        else {
            for( let i=0; i<this.buckets[bucketIndex].length; i++ ){
                if( this.buckets[bucketIndex][i].key === key ) return;
            }
        }
        // Add entry to bucket array
        this.buckets[bucketIndex].push(newEntry);
        // Incerement occupied
        this.occupied++;
    }

    get(key){
        // index
        const bucketIndex = this.getIndex(key);
        // check if bucket is empty?
        if( this.buckets[bucketIndex] == null ){
            return null;
        }
        // Search in bucket for key
        for( let i=0; i<this.buckets[bucketIndex].length; i++ ){
            if( key === this.buckets[bucketIndex][i].key ){
                return this.buckets[bucketIndex][i].value;
            }
        }
        return null;
    }

    hash1(key){
        let hashValue = 0;
        if( key == null ) return 0;
        // Generate unique hashing source from key and type of key object
        const stringWithKeyAndType = `${key}${typeof key}`;
        // Loop on unique has source
        for( let i=0; i< stringWithKeyAndType.length; i++ ){
            const charVal = stringWithKeyAndType.charCodeAt(i);
            hashValue += charVal << (i*8);
        }
        // return
        return hashValue;
    }

    toString(){
        let outStr = 'DSA101_HashMap::{'
        outStr += '\"allocated\":'+this.allocated;
        outStr += ', \"occupied\":'+this.occupied;
        outStr += ', \"buckets\" : ['
        for( let i=0; i<this.buckets.length; i++ ){
            if( i > 0 ){ outStr += ', '}
            outStr += '\n\t[';
            if( this.buckets[i] != null ){
                for( let j=0; j<this.buckets[i].length; j++ ){
                    if( j > 0 ){ outStr += ', '}
                    outStr += '{ "\key\":'+ (this.buckets[i][j]).key + ", \"value\":"+(this.buckets[i][j]).value +' }';
                }
            }
            outStr += ']';
        }
        outStr += ']}'
        return outStr;
    }

}

export default DSA101_HashMap;