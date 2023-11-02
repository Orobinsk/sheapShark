export function converDate(timestamp: number) {
    if (timestamp !== 0) {
        const date = new Date(timestamp * 1000);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const formattedDate = month + '/' + day + '/' + year;
        return formattedDate
    } else return ''
}