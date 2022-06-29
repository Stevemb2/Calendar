export const getTodaysDate = () => {
    const today = new Date();
    
    const day = today.getDate();
    const dayOfWeek = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();

    return {
        day,
        dayOfWeek,
        month,
        year
    }
}