export const VEHICLES_DATA = [
    {
        id: 'compact-sedan',
        label: 'Compact sedan',
        variants: {
            BEV: {
                examples: ['Tesla Model 3', 'Chevrolet Bolt EUV', 'Hyundai IONIQ 6'],
                efficiency_kwh_per_100km: 16.5,
                range_km: 420,
                msrp_avg: 52000,
                maintenance_cad_annual: 800,
                insurance_cad_annual: 1800,
                depreciation_pct_annual: 15.0,
            },
            PHEV: {
                examples: ['Toyota Prius Prime', 'BMW 330e'],
                efficiency_kwh_per_100km: 6.0,
                efficiency_l_per_100km: 2.5,
                range_km: 60,
                msrp_avg: 44000,
                maintenance_cad_annual: 1100,
                insurance_cad_annual: 1650,
                depreciation_pct_annual: 17.0,
            },
            Gasoline: {
                examples: ['Toyota Corolla', 'Honda Civic', 'Mazda3'],
                efficiency_l_per_100km: 7.5,
                msrp_avg: 27000,
                maintenance_cad_annual: 1500,
                insurance_cad_annual: 1600,
                depreciation_pct_annual: 18.0,
            },
        },
    },
    {
        id: 'compact-suv',
        label: 'Compact SUV',
        variants: {
            BEV: {
                examples: ['Hyundai IONIQ 5', 'Volkswagen ID.4', 'Kia EV6'],
                efficiency_kwh_per_100km: 18.0,
                range_km: 380,
                msrp_avg: 60000,
                maintenance_cad_annual: 850,
                insurance_cad_annual: 1900,
                depreciation_pct_annual: 15.0,
            },
            PHEV: {
                examples: ['Toyota RAV4 Prime', 'Mitsubishi Outlander PHEV'],
                efficiency_kwh_per_100km: 6.0,
                efficiency_l_per_100km: 2.5,
                range_km: 60,
                msrp_avg: 47000,
                maintenance_cad_annual: 1200,
                insurance_cad_annual: 1750,
                depreciation_pct_annual: 17.0,
            },
            Gasoline: {
                examples: ['Toyota RAV4', 'Honda CR-V', 'Mazda CX-5'],
                efficiency_l_per_100km: 8.5,
                msrp_avg: 36000,
                maintenance_cad_annual: 1600,
                insurance_cad_annual: 1700,
                depreciation_pct_annual: 18.0,
            },
        },
    },
    {
        id: 'midsize-suv',
        label: 'Midsize SUV',
        variants: {
            BEV: {
                examples: ['Tesla Model Y', 'Ford Mustang Mach-E', 'Kia EV9'],
                efficiency_kwh_per_100km: 20.0,
                range_km: 420,
                msrp_avg: 72000,
                maintenance_cad_annual: 900,
                insurance_cad_annual: 2100,
                depreciation_pct_annual: 15.0,
            },
            PHEV: {
                examples: ['Ford Escape PHEV', 'Jeep Grand Cherokee 4xe'],
                efficiency_kwh_per_100km: 6.5,
                efficiency_l_per_100km: 3.0,
                range_km: 45,
                msrp_avg: 53000,
                maintenance_cad_annual: 1350,
                insurance_cad_annual: 1950,
                depreciation_pct_annual: 18.0,
            },
            Gasoline: {
                examples: ['Toyota Highlander', 'Ford Explorer', 'Chevrolet Equinox'],
                efficiency_l_per_100km: 10.5,
                msrp_avg: 48000,
                maintenance_cad_annual: 1800,
                insurance_cad_annual: 2000,
                depreciation_pct_annual: 20.0,
            },
        },
    },
    {
        id: 'pickup-truck',
        label: 'Pickup truck',
        variants: {
            BEV: {
                examples: ['Ford F-150 Lightning', 'Chevrolet Silverado EV', 'GMC Sierra EV'],
                efficiency_kwh_per_100km: 26.0,
                range_km: 480,
                msrp_avg: 82000,
                maintenance_cad_annual: 1000,
                insurance_cad_annual: 2400,
                depreciation_pct_annual: 16.0,
            },
            PHEV: {
                examples: ['Ram 1500 PHEV'],
                efficiency_kwh_per_100km: 22.0,
                efficiency_l_per_100km: 7.0,
                range_km: 45,
                msrp_avg: 82000,
                maintenance_cad_annual: 1500,
                insurance_cad_annual: 2400,
                depreciation_pct_annual: 20.0,
            },
            Gasoline: {
                examples: ['Ford F-150', 'Ram 1500', 'Chevrolet Silverado'],
                efficiency_l_per_100km: 13.5,
                msrp_avg: 57000,
                maintenance_cad_annual: 2000,
                insurance_cad_annual: 2300,
                depreciation_pct_annual: 22.0,
            },
        },
    },
    {
        id: 'luxury-sedan',
        label: 'Luxury sedan',
        variants: {
            BEV: {
                examples: ['Tesla Model S', 'BMW i4', 'Mercedes EQE'],
                efficiency_kwh_per_100km: 19.0,
                range_km: 500,
                msrp_avg: 103000,
                maintenance_cad_annual: 900,
                insurance_cad_annual: 3200,
                depreciation_pct_annual: 18.0,
            },
            PHEV: {
                examples: ['BMW 545e xDrive', 'Volvo S90 Recharge T8'],
                efficiency_kwh_per_100km: 8.0,
                efficiency_l_per_100km: 3.5,
                range_km: 65,
                msrp_avg: 95000,
                maintenance_cad_annual: 1800,
                insurance_cad_annual: 3100,
                depreciation_pct_annual: 20.0,
            },
            Gasoline: {
                examples: ['BMW 5 Series', 'Mercedes C-Class', 'Audi A6'],
                efficiency_l_per_100km: 9.5,
                msrp_avg: 84000,
                maintenance_cad_annual: 2200,
                insurance_cad_annual: 3000,
                depreciation_pct_annual: 22.0,
            },
        },
    },
    {
        id: 'minivan',
        label: 'Minivan',
        variants: {
            BEV: {
                examples: ['Chrysler Pacifica PHEV (BEV mode)', 'Volkswagen ID. Buzz'],
                efficiency_kwh_per_100km: 22.0,
                range_km: 300,
                msrp_avg: 66000,
                maintenance_cad_annual: 950,
                insurance_cad_annual: 2100,
                depreciation_pct_annual: 16.0,
            },
            PHEV: {
                examples: ['Chrysler Pacifica Hybrid'],
                efficiency_kwh_per_100km: 7.5,
                efficiency_l_per_100km: 3.5,
                range_km: 50,
                msrp_avg: 62000,
                maintenance_cad_annual: 1300,
                insurance_cad_annual: 2000,
                depreciation_pct_annual: 18.0,
            },
            Gasoline: {
                examples: ['Toyota Sienna (HEV)', 'Honda Odyssey', 'Chrysler Grand Caravan'],
                efficiency_l_per_100km: 10.0,
                msrp_avg: 43000,
                maintenance_cad_annual: 1700,
                insurance_cad_annual: 1900,
                depreciation_pct_annual: 20.0,
            },
        },
    },
];

export const PROVINCES_DATA = {
    AB: { name: 'Alberta', electricity_rate_cad_kwh: 0.229, gas_price_cad_l: 1.54, grid_co2_g_per_kwh: 490, source: 'AUC / Kalibrate June 2026', updated: '2026-07' },
    BC: { name: 'British Columbia', electricity_rate_cad_kwh: 0.127, gas_price_cad_l: 1.74, grid_co2_g_per_kwh: 12, source: 'BC Hydro / Kalibrate June 2026', updated: '2026-07' },
    MB: { name: 'Manitoba', electricity_rate_cad_kwh: 0.106, gas_price_cad_l: 1.53, grid_co2_g_per_kwh: 2, source: 'Manitoba Hydro / Kalibrate June 2026', updated: '2026-07' },
    NB: { name: 'New Brunswick', electricity_rate_cad_kwh: 0.154, gas_price_cad_l: 1.68, grid_co2_g_per_kwh: 270, source: 'NB Power / Kalibrate June 2026', updated: '2026-07' },
    NL: { name: 'Newfoundland and Labrador', electricity_rate_cad_kwh: 0.158, gas_price_cad_l: 1.86, grid_co2_g_per_kwh: 38, source: 'NL Hydro / Kalibrate June 2026', updated: '2026-07' },
    NS: { name: 'Nova Scotia', electricity_rate_cad_kwh: 0.191, gas_price_cad_l: 1.65, grid_co2_g_per_kwh: 600, source: 'Nova Scotia Power / Kalibrate June 2026', updated: '2026-07' },
    NT: { name: 'Northwest Territories', electricity_rate_cad_kwh: 0.300, gas_price_cad_l: 1.70, grid_co2_g_per_kwh: 420, source: 'NWT Power / Kalibrate June 2026', updated: '2026-07' },
    NU: { name: 'Nunavut', electricity_rate_cad_kwh: 0.354, gas_price_cad_l: 2.38, grid_co2_g_per_kwh: 880, source: 'Qulliq Energy / NRCan', updated: '2026-07' },
    ON: { name: 'Ontario', electricity_rate_cad_kwh: 0.170, gas_price_cad_l: 1.59, grid_co2_g_per_kwh: 30, source: 'OEB / Kalibrate June 2026', updated: '2026-07' },
    PE: { name: 'Prince Edward Island', electricity_rate_cad_kwh: 0.197, gas_price_cad_l: 1.75, grid_co2_g_per_kwh: 215, source: 'Maritime Electric / Kalibrate June 2026', updated: '2026-07' },
    QC: { name: 'Quebec', electricity_rate_cad_kwh: 0.083, gas_price_cad_l: 1.76, grid_co2_g_per_kwh: 1, source: 'Hydro-Quebec / Kalibrate June 2026', updated: '2026-07' },
    SK: { name: 'Saskatchewan', electricity_rate_cad_kwh: 0.186, gas_price_cad_l: 1.51, grid_co2_g_per_kwh: 710, source: 'SaskPower / Kalibrate June 2026', updated: '2026-07' },
    YT: { name: 'Yukon', electricity_rate_cad_kwh: 0.210, gas_price_cad_l: 1.52, grid_co2_g_per_kwh: 80, source: 'Yukon Energy / Kalibrate June 2026', updated: '2026-07' },
};

export const INCENTIVES_DATA = {
    federal: {
        BEV: 5000,
        PHEV: 2500,
        Gasoline: 0,
        msrp_cap: 50000,
        notes: 'EVAP program — Transport Canada (replaces iZEV Feb 2026)',
    },
    provinces: {
        BC: { BEV: 0, PHEV: 0 },
        QC: { BEV: 2000, PHEV: 1000 },
        ON: { BEV: 0, PHEV: 0 },
        AB: { BEV: 0, PHEV: 0 },
        SK: { BEV: 0, PHEV: 0 },
        MB: { BEV: 0, PHEV: 0 },
        NB: { BEV: 0, PHEV: 0 },
        NS: { BEV: 0, PHEV: 0 },
        PE: { BEV: 0, PHEV: 0 },
        NL: { BEV: 0, PHEV: 0 },
        YT: { BEV: 0, PHEV: 0 },
        NT: { BEV: 0, PHEV: 0 },
        NU: { BEV: 0, PHEV: 0 },
    },
};

export const FUEL_OPTIONS = [
    { value: 'BEV', label: 'Electric (BEV)', shortLabel: 'Electric' },
    { value: 'PHEV', label: 'Plug-in hybrid (PHEV)', shortLabel: 'Plug-in hybrid' },
    { value: 'Gasoline', label: 'Gasoline', shortLabel: 'Gasoline' },
];

export const PROVINCE_OPTIONS = Object.entries(PROVINCES_DATA)
    .sort((a, b) => a[1].name.localeCompare(b[1].name))
    .map(([code, data]) => ({
        value: code,
        label: data.name,
        elecRate: (data.electricity_rate_cad_kwh * 100).toFixed(1),
        gasPrice: data.gas_price_cad_l.toFixed(3),
    }));

export const OWNERSHIP_OPTIONS = [
    { value: '2', label: '2 years' },
    { value: '4', label: '4 years' },
    { value: '7', label: '7 years' },
    { value: '10', label: '10 years' },
    { value: '14', label: '14 years' },
];

export const ANNUAL_KM_OPTIONS = [
    { value: '15000', label: '15,000 km' },
    { value: '22000', label: '22,000 km' },
    { value: '30000', label: '30,000 km' },
    { value: '43000', label: '43,000 km' },
    { value: '60000', label: '60,000 km' },
    { value: '75000', label: '75,000 km' },
];

export const HIGHWAY_OPTIONS = [
    { value: '10', label: '10%' },
    { value: '30', label: '30%' },
    { value: '50', label: '50%' },
    { value: '60', label: '60%' },
    { value: '70', label: '70%' },
    { value: '90', label: '90%' },
];

export const INITIAL_FORM_DATA = {
    vehicle: 'compact-sedan',
    firstFuel: 'BEV',
    secondFuel: 'PHEV',
    province: 'BC',
    ownershipYears: '4',
    annualKm: '43000',
    highwayPct: '50',
    electricityRate: '12.7',
    gasPrice: '1.740',
    otherIncentivesA: '0',
    otherIncentivesB: '0',
    maintenanceOverrideA: '',
    maintenanceOverrideB: '',
    insuranceOverrideA: '',
    insuranceOverrideB: '',
    depreciationOverrideA: '',
    depreciationOverrideB: '',
};

const GASOLINE_CO2_G_PER_LITRE = 2310;
const HIGHWAY_EFF_FACTOR = { BEV: 0.90, PHEV: 0.90, Gasoline: 1.15 };

export function getVariant(categoryId, fuelType) {
    const category = VEHICLES_DATA.find((v) => v.id === categoryId);
    return category?.variants?.[fuelType] || null;
}

export function getIncentives(fuelType, provinceCode) {
    const federal = INCENTIVES_DATA.federal[fuelType] || 0;
    const provincial = INCENTIVES_DATA.provinces[provinceCode]?.[fuelType] || 0;
    const msrpCap = INCENTIVES_DATA.federal.msrp_cap || null;
    return { federal, provincial, msrpCap };
}

function effectivePurchasePrice(variant, incentives, otherIncentives = 0) {
    const msrp = variant.msrp_avg || 0;
    const { federal, provincial, msrpCap } = incentives;
    const federalAmt = msrpCap == null || msrp <= msrpCap ? federal : 0;
    return {
        msrp,
        federalApplied: federalAmt,
        provincialApplied: provincial,
        otherApplied: Number(otherIncentives) || 0,
        netPrice: Math.max(0, msrp - federalAmt - provincial - (Number(otherIncentives) || 0)),
    };
}

function annualFuelCost(variant, fuelType, formData, provincePrices) {
    const annualKm = Number(formData.annualKm) || 43000;
    const highwayPct = Number(formData.highwayPct) || 50;
    const cityPct = 1 - highwayPct / 100;
    const hwPct = highwayPct / 100;

    const elecRate = formData.electricityRate !== '' && formData.electricityRate != null
        ? Number(formData.electricityRate) / 100
        : provincePrices.electricity_rate_cad_kwh;
    const gasPrice = formData.gasPrice !== '' && formData.gasPrice != null
        ? Number(formData.gasPrice)
        : provincePrices.gas_price_cad_l;

    if (fuelType === 'BEV' || fuelType === 'PHEV') {
        const baseEff = variant.efficiency_kwh_per_100km;
        if (!baseEff) return 0;
        const hwFactor = HIGHWAY_EFF_FACTOR[fuelType] || 1.0;
        const blendedEff = baseEff * (cityPct * 1.0 + hwPct * hwFactor);

        if (fuelType === 'PHEV') {
            const electricKm = Math.min(annualKm, variant.range_km ? variant.range_km * 12 : annualKm * 0.6);
            const gasKm = Math.max(0, annualKm - electricKm);
            const elecCost = (electricKm / 100) * blendedEff * elecRate;
            const gasEff = variant.efficiency_l_per_100km || 6.0;
            const gasBlended = gasEff * (cityPct * 1.0 + hwPct * HIGHWAY_EFF_FACTOR.Gasoline);
            const gasCost = (gasKm / 100) * gasBlended * gasPrice;
            return elecCost + gasCost;
        }

        return (annualKm / 100) * blendedEff * elecRate;
    }

    if (fuelType === 'Gasoline') {
        const baseEff = variant.efficiency_l_per_100km;
        if (!baseEff) return 0;
        const blendedEff = baseEff * (cityPct * 1.0 + hwPct * HIGHWAY_EFF_FACTOR.Gasoline);
        return (annualKm / 100) * blendedEff * gasPrice;
    }

    return 0;
}

function annualEmissions(variant, fuelType, formData, provincePrices) {
    const annualKm = Number(formData.annualKm) || 43000;
    const highwayPct = Number(formData.highwayPct) || 50;
    const cityPct = 1 - highwayPct / 100;
    const hwPct = highwayPct / 100;
    const gridIntensity = provincePrices.grid_co2_g_per_kwh || 0;

    if (fuelType === 'BEV') {
        const baseEff = variant.efficiency_kwh_per_100km || 0;
        const blendedEff = baseEff * (cityPct + hwPct * HIGHWAY_EFF_FACTOR.BEV);
        const kwhUsed = (annualKm / 100) * blendedEff;
        return (kwhUsed * gridIntensity) / 1000;
    }

    if (fuelType === 'PHEV') {
        const electricKm = Math.min(annualKm, variant.range_km ? variant.range_km * 12 : annualKm * 0.6);
        const gasKm = Math.max(0, annualKm - electricKm);
        const baseEff = variant.efficiency_kwh_per_100km || 6.0;
        const kwhUsed = (electricKm / 100) * baseEff;
        const elecCO2 = (kwhUsed * gridIntensity) / 1000;
        const gasEff = variant.efficiency_l_per_100km || 6.0;
        const blendedEff = gasEff * (cityPct + hwPct * HIGHWAY_EFF_FACTOR.Gasoline);
        const litresUsed = (gasKm / 100) * blendedEff;
        return elecCO2 + (litresUsed * GASOLINE_CO2_G_PER_LITRE) / 1000;
    }

    const baseEff = variant.efficiency_l_per_100km || 0;
    const blendedEff = baseEff * (cityPct + hwPct * HIGHWAY_EFF_FACTOR.Gasoline);
    const litresUsed = (annualKm / 100) * blendedEff;
    return (litresUsed * GASOLINE_CO2_G_PER_LITRE) / 1000;
}

function residualValue(variant, years, depreciationPctOverride) {
    const msrp = variant.msrp_avg || 0;
    const pct = (depreciationPctOverride !== '' && depreciationPctOverride != null
        ? Number(depreciationPctOverride)
        : variant.depreciation_pct_annual || 15) / 100;
    return msrp * Math.pow(1 - pct, years);
}

function calculateVehicleTco(variant, fuelType, formData, provincePrices, slot) {
    const years = Number(formData.ownershipYears) || 4;
    const annualKm = Number(formData.annualKm) || 43000;
    const incentives = getIncentives(fuelType, formData.province);
    const otherInc = slot === 'A' ? formData.otherIncentivesA : formData.otherIncentivesB;
    const priceInfo = effectivePurchasePrice(variant, incentives, otherInc);

    const maintOverride = slot === 'A' ? formData.maintenanceOverrideA : formData.maintenanceOverrideB;
    const insurOverride = slot === 'A' ? formData.insuranceOverrideA : formData.insuranceOverrideB;
    const depOverride = slot === 'A' ? formData.depreciationOverrideA : formData.depreciationOverrideB;

    const annualMaint = maintOverride !== '' && maintOverride != null
        ? Number(maintOverride)
        : variant.maintenance_cad_annual || 0;
    const annualInsur = insurOverride !== '' && insurOverride != null
        ? Number(insurOverride)
        : variant.insurance_cad_annual || 0;

    const annualFuel = annualFuelCost(variant, fuelType, formData, provincePrices);
    const annualCo2Kg = annualEmissions(variant, fuelType, formData, provincePrices);
    const resale = residualValue(variant, years, depOverride);

    const totalFuel = annualFuel * years;
    const totalMaint = annualMaint * years;
    const totalInsur = annualInsur * years;
    const total = priceInfo.netPrice + totalFuel + totalMaint + totalInsur - resale;

    return {
        fuelType,
        examples: variant.examples || [],
        ...priceInfo,
        annualFuel,
        annualMaint,
        annualInsur,
        annualCo2Kg,
        totalFuel,
        totalMaint,
        totalInsur,
        resale,
        total,
        annualAvg: total / years,
        monthlyAvg: total / years / 12,
        perKm: total / (years * annualKm),
    };
}

function calculateBreakEvenYear(tcoA, tcoB, years) {
    let cumA = tcoA.netPrice;
    let cumB = tcoB.netPrice;
    const aStartsHigher = cumA > cumB;

    for (let y = 1; y <= years; y++) {
        cumA += tcoA.annualFuel + tcoA.annualMaint + tcoA.annualInsur;
        cumB += tcoB.annualFuel + tcoB.annualMaint + tcoB.annualInsur;
        const effA = y === years ? cumA - tcoA.resale : cumA;
        const effB = y === years ? cumB - tcoB.resale : cumB;
        if (aStartsHigher && effA <= effB) return y;
        if (!aStartsHigher && effB <= effA) return y;
    }
    return null;
}

export function calculateTcoComparison(formData) {
    const years = Number(formData.ownershipYears) || 4;
    const provincePrices = PROVINCES_DATA[formData.province] || PROVINCES_DATA.BC;
    const varA = getVariant(formData.vehicle, formData.firstFuel);
    const varB = getVariant(formData.vehicle, formData.secondFuel);

    if (!varA || !varB) return null;

    const vehicleA = calculateVehicleTco(varA, formData.firstFuel, formData, provincePrices, 'A');
    const vehicleB = calculateVehicleTco(varB, formData.secondFuel, formData, provincePrices, 'B');
    const breakEvenYear = calculateBreakEvenYear(vehicleA, vehicleB, years);

    return {
        years,
        provincePrices,
        vehicleA,
        vehicleB,
        savings: Math.abs(vehicleB.total - vehicleA.total),
        cheaperFuel: vehicleA.total <= vehicleB.total ? formData.firstFuel : formData.secondFuel,
        breakEvenYear,
    };
}