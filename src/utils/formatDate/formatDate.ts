export const formatDateTime = (iso: string) => {
    new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(new Date(iso))
}
