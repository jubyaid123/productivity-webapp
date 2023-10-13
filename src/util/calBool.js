export default function calBool(...classes) {
	return classes.filter(Boolean).join(" ");
}