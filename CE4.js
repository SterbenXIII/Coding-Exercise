function areThereDuplicates(...args) {
    if (!args || args.length === 0) return false;
    const set = new Set(args);
    return set.size === args.length ? false : true;
}

areThereDuplicates(1,2,3,4)

