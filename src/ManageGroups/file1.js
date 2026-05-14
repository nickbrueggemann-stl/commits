function sortThisArray(arr) {
    return arr.sort((a, b) => {
        const nameA = String(a.name || '').toLowerCase();
        const nameB = String(b.name || '').toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}