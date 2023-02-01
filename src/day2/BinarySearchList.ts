export default function bs_list(haystack: number[], needle: number): boolean {

    // Low Value
    let lo = 0;
    // High Value
    let hi = haystack.length;
    do{
        // Middle Value
        const m = Math.floor(lo + (hi - lo)/2);
        const v = haystack[m];
        if(v === needle){
            return true;
        } else if(v > needle){
            // High Value is exclusive and Low value is inclusive.
            hi = m;
        } else{
            // Drop mid-point as Low value is inclusive
            lo = m +1;
        }
    } while (lo < hi)

    return false;
}