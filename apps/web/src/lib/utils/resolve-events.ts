import type { Grouped } from '@jinen/annotations';
import type { Event } from '@jinen/cms-annotations';
import { generateMonthsRange, groupBy } from '@jinen/helpers';

const allMonths = generateMonthsRange({ locales: 'es' });

function sortMonthsDescending(a: Event, b: Event) {
    return allMonths.indexOf(b.month) - allMonths.indexOf(a.month);
}

export function resolveEvents({ events }: { events: Event[] | string[] }): Grouped<Event> {
    const grouped = groupBy({
        items: (events as Event[]) ?? [],
        key: 'year',
    });

    for (const year of Object.keys(grouped)) {
        grouped[year].sort(sortMonthsDescending);
    }

    return grouped;
}
