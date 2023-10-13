import dayjs from "dayjs";

// Default is current month and year
export const generateDate = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
    // First date
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    // Last date
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
    // Empty array to store the dates for the month
	const arrayOfDate = [];

	// Populate date array with additional dates before the month (previous month)
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);
		arrayOfDate.push({
			currentMonth: false,
			date,
		});
	}

	// Populate date array with current month
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

    // Using 42 days, similar to google calendar.
    // This variable helps has generate extra days for the next month
	const remaining = 42 - arrayOfDate.length;
	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
		});
	}
	return arrayOfDate;
};

// Months of the year
export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];