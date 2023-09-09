export default function getFormattedDate(dateString: string): string {
    return new Intl.DateTimeFormat('en-EU', { dateStyle: 'long' }).format(new Date(dateString))
}