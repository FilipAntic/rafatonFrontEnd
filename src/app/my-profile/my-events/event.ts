export interface Event {

    name: string,
    locale: string,
    eventUrl: string
    promoterId: number[],
    images: [
        {
            ratio: string,
            url: string,
            width: number,
            height: number,
            fallback: string
        }
    ]
    dates: {
        start: {
            dateTime: Date,
            localDate: Date,
            localTime: Date
        },
        end: {
            dateTime: Date,
            localDate: Date,
            localTime: Date
        },
        timezone: string,
        displayOptions: {
            range: {
                localStartDate: Date,
                localEndDate: Date
            }
        },
        status: {
            code: string
        }
    },
    test: false,
    groupId: string,
    _links: {
        self: {
            href: string
        },
        categories: [
            {
                href: string
            }
        ],
        attractions: [
            {
                href: string
            }
        ],
        venue: {
            href: string
        }
    },
    id: string,
    _embedded: {
        venue: [
            {
                name: string,
                marketId: number[],
                country: {
                    countryCode: string
                },
                state: {
                    stateCode: string
                },
                city: {
                    name: string
                },
                location: {
                    latitude: string,
                    longitude: string
                },
                postalCode: string,
                address: {
                    line1: string,
                    line2: string
                },
                timeZone: string,
                _links: {
                    self: {
                        href: string
                    }
                },
                id: string,
                type: string
            }
        ],
        categories: [
            {
                name: string,
                level: number,
                _links: {
                    self: {
                        href: string
                    }
                },
                id: string,
                type: string
            }
        ],
        attractions: [
            {
                url: string,
                image: {
                    url: string
                },
                name: string,
                _links: {
                    self: {
                        href: string
                    }
                },
                id: string,
                type: string
            }
        ]
    },
    type: string

}
