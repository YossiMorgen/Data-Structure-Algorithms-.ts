import DSA101_HashMap from "../data_structure/06-Hash-map.ts/Hash-map";

// O(n) for unsorted array using hash table
export default function TwoSum(nums: number[], target: number): number[] {
    let hash = new DSA101_HashMap();

    for (let i = 0; i < nums.length; i++) {
        const val = hash.get(target - nums[i])
        console.log(val);
        
        if (typeof val == "number" && val !== i) {
            return [val, i]
        } else if(val && typeof val == "object"){            
            if(val[0] === i) return [val[1], val[0]];
            return [val[0], i]
        }
        hash.set(nums[i], i)
    }

}
