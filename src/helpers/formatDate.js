export const formatDate = () => {
    const date = new Date();
    return date.toLocaleDateString('en-Us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
};