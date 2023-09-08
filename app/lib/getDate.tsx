export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-AE', { dateStyle: 'long' }).format(new Date(dateString))
}