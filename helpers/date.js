export default function formatDate(date) {
	const d = new Date(date); 
	return d.toLocaleString('en-us', { month: 'short', year: 'numeric' });;
}
