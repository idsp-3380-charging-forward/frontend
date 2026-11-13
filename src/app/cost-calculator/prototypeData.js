export const INITIAL_FORM_DATA = {
    vehicle: 'compact-sedan',
    firstFuel: 'electric',
    secondFuel: 'plugin',
    province: 'bc',
    ownershipYears: '4',
    annualKm: '43000',
    highwayPct: '50',
    electricityRate: '12.7',
    gasPrice: '1.740',
};

export const VEHICLE_OPTIONS = [
    { value: 'compact-sedan', label: 'Compact sedan', multiplier: 1.0 },
    { value: 'compact-suv', label: 'Compact SUV', multiplier: 1.15 },
    { value: 'midsize-suv', label: 'Midsize SUV', multiplier: 1.3 },
    { value: 'pickup-truck', label: 'Pickup truck', multiplier: 1.55 },
    { value: 'luxury-sedan', label: 'Luxury sedan', multiplier: 1.2 },
    { value: 'minivan', label: 'Minivan', multiplier: 1.25 },
];

export const FUEL_OPTIONS = [
    { value: 'electric', label: 'Electric' },
    { value: 'plugin', label: 'Plug-in hybrid' },
    { value: 'gasoline', label: 'Gasoline' },
];

export const PROVINCE_OPTIONS = [
    { value: 'bc', label: 'British Columbia', elecRate: '12.7', gasPrice: '1.740' },
    { value: 'mb', label: 'Manitoba', elecRate: '10.6', gasPrice: '1.530' },
    { value: 'ab', label: 'Alberta', elecRate: '22.9', gasPrice: '1.540' },
    { value: 'on', label: 'Ontario', elecRate: '17.0', gasPrice: '1.590' },
    { value: 'qc', label: 'Quebec', elecRate: '8.3', gasPrice: '1.760' },
];

export const OWNERSHIP_OPTIONS = [
    { value: '2', label: '2 years' },
    { value: '4', label: '4 years' },
    { value: '7', label: '7 years' },
    { value: '10', label: '10 years' },
    { value: '14', label: '14 years' },
];

export const ANNUAL_KM_OPTIONS = [
    { value: '15000', label: '15,000 km' },
    { value: '25000', label: '25,000 km' },
    { value: '43000', label: '43,000 km' },
    { value: '60000', label: '60,000 km' },
    { value: '75000', label: '75,000 km' },
];

export const HIGHWAY_OPTIONS = [
    { value: '10', label: '10%' },
    { value: '30', label: '30%' },
    { value: '50', label: '50%' },
    { value: '70', label: '70%' },
    { value: '90', label: '90%' },
];

export const ELECTRICITY_RATE_OPTIONS = [
    { value: '8.3', label: '8.3 cents/kWh' },
    { value: '10.6', label: '10.6 cents/kWh' },
    { value: '12.7', label: '12.7 cents/kWh' },
    { value: '17.0', label: '17.0 cents/kWh' },
    { value: '22.9', label: '22.9 cents/kWh' },
];

export const GAS_PRICE_OPTIONS = [
    { value: '1.530', label: '$1.530 / L' },
    { value: '1.590', label: '$1.590 / L' },
    { value: '1.740', label: '$1.740 / L' },
    { value: '1.860', label: '$1.860 / L' },
];

export function calculateDemoEstimate(formData) {
    const vehicle = VEHICLE_OPTIONS.find((v) => v.value === formData.vehicle) || VEHICLE_OPTIONS[0];
    const years = Number(formData.ownershipYears) || 4;
    const km = Number(formData.annualKm) || 43000;
    const highwayPct = Number(formData.highwayPct) || 50;
    const elecRateDollars = (Number(formData.electricityRate) || 12.7) / 100;
    const gasPrice = Number(formData.gasPrice) || 1.74;

    const getAnnualCost = (fuelType) => {
        if (fuelType === 'electric') {
            const hwFactor = 1 - (highwayPct - 50) * 0.001;
            return (km / 100) * 16.5 * vehicle.multiplier * hwFactor * elecRateDollars;
        }
        if (fuelType === 'plugin') {
            const elecPart = (km / 100) * 6.0 * elecRateDollars;
            const gasPart = (km / 100) * 2.8 * gasPrice;
            return (elecPart + gasPart) * vehicle.multiplier;
        }
        const hwFactor = 1 + (highwayPct - 50) * 0.0015;
        return (km / 100) * 8.0 * vehicle.multiplier * hwFactor * gasPrice;
    };

    const annualFirst = Math.round(getAnnualCost(formData.firstFuel));
    const annualSecond = Math.round(getAnnualCost(formData.secondFuel));
    const totalFirst = annualFirst * years;
    const totalSecond = annualSecond * years;

    return {
        years,
        annualFirst,
        annualSecond,
        totalFirst,
        totalSecond,
        totalSavings: Math.abs(totalSecond - totalFirst),
        cheaperFuel: totalFirst <= totalSecond ? formData.firstFuel : formData.secondFuel,
    };
}