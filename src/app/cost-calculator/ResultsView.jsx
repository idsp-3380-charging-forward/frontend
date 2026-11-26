"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Link from "next/link";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { calculateYearlyBreakdown } from "./calculatorData";

const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0,
    }).format(amount);

export default function ResultsView({
    formData,
    result,
    vehicleLabel,
    provinceName,
    firstFuelLabel,
    secondFuelLabel,
    onEdit,
}) {
    const { vehicleA, vehicleB, years, savings, cheaperFuel, breakEvenYear } = result;
    const cheaperFuelLabel =
        cheaperFuel === formData.firstFuel ? firstFuelLabel : secondFuelLabel;

    const yearlyRows = calculateYearlyBreakdown(formData);

    const fuelLabelA = `${firstFuelLabel.toUpperCase()} (${vehicleA.fuelType})`;
    const fuelLabelB = `${secondFuelLabel.toUpperCase()} (${vehicleB.fuelType})`;

    const breakdownRows = [
        {
            label: "Purchase price (net)",
            a: vehicleA.netPrice,
            b: vehicleB.netPrice,
            diff: vehicleA.netPrice - vehicleB.netPrice,
            isTotal: false,
        },
        {
            label: "Fuel costs",
            a: vehicleA.totalFuel,
            b: vehicleB.totalFuel,
            diff: vehicleA.totalFuel - vehicleB.totalFuel,
            isTotal: false,
        },
        {
            label: "Maintenance",
            a: vehicleA.totalMaint,
            b: vehicleB.totalMaint,
            diff: vehicleA.totalMaint - vehicleB.totalMaint,
            isTotal: false,
        },
        {
            label: "Insurance",
            a: vehicleA.totalInsur,
            b: vehicleB.totalInsur,
            diff: vehicleA.totalInsur - vehicleB.totalInsur,
            isTotal: false,
        },
        {
            label: "Resale value (credit)",
            a: -vehicleA.resale,
            b: -vehicleB.resale,
            diff: -vehicleA.resale - (-vehicleB.resale),
            isTotal: false,
        },
        {
            label: "Total Cost of Ownership",
            a: vehicleA.total,
            b: vehicleB.total,
            diff: vehicleA.total - vehicleB.total,
            isTotal: true,
        },
    ];

    const categoryChartData = [
        {
            category: "Purchase",
            [fuelLabelA]: Math.round(vehicleA.netPrice),
            [fuelLabelB]: Math.round(vehicleB.netPrice),
        },
        {
            category: "Fuel",
            [fuelLabelA]: Math.round(vehicleA.totalFuel),
            [fuelLabelB]: Math.round(vehicleB.totalFuel),
        },
        {
            category: "Maintenance",
            [fuelLabelA]: Math.round(vehicleA.totalMaint),
            [fuelLabelB]: Math.round(vehicleB.totalMaint),
        },
        {
            category: "Insurance",
            [fuelLabelA]: Math.round(vehicleA.totalInsur),
            [fuelLabelB]: Math.round(vehicleB.totalInsur),
        },
        {
            category: "Resale (credit)",
            [fuelLabelA]: -Math.round(vehicleA.resale),
            [fuelLabelB]: -Math.round(vehicleB.resale),
        },
    ];

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#0f2f2e" }}>
                Your Results
            </Typography>
            <Typography variant="body1" sx={{ color: "#37474f", fontWeight: 500, mb: 1 }}>
                Total cost of ownership
            </Typography>

            <Typography variant="h5" fontWeight="bold" sx={{ color: "#2e7d32", mb: 4 }}>
                {savings < 100
                    ? `${firstFuelLabel} and ${secondFuelLabel} have nearly identical total ownership costs over ${years} years`
                    : `${cheaperFuelLabel} (${cheaperFuel}) saves you ${formatCurrency(savings)} over ${years} years`}
            </Typography>

            {/* Comparison Summary Cards */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4 }}>
                {/* Vehicle A Card */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: 2.5,
                        border: "1px solid #c8e6c9",
                        borderTop: "6px solid #2e7d32",
                        p: 2.5,
                        bgcolor: "white",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "#2e7d32" }}>
                            {firstFuelLabel.toUpperCase()} ({vehicleA.fuelType})
                        </Typography>
                        <Box sx={{ textAlign: "right" }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Total Cost of Ownership
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{ color: "#0f2f2e" }}>
                                {formatCurrency(vehicleA.total)}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Monthly avg
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {formatCurrency(vehicleA.monthlyAvg)}
                            </Typography>
                        </Box>

                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Cost per km
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {(vehicleA.perKm * 100).toFixed(1)}¢/km
                            </Typography>
                        </Box>

                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Annual fuel
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {formatCurrency(vehicleA.annualFuel)}
                            </Typography>
                        </Box>

                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Annual CO₂
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {Math.round(vehicleA.annualCo2Kg).toLocaleString("en-CA")} kg CO₂
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Net purchase price
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                            {formatCurrency(vehicleA.netPrice)}
                        </Typography>
                    </Box>
                </Paper>

                {/* Vehicle B Card */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: 2.5,
                        border: "1px solid #ffcdd2",
                        borderTop: "6px solid #c62828",
                        p: 2.5,
                        bgcolor: "white",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                        <Typography variant="subtitle2" fontWeight="bold" sx={{ color: "#c62828" }}>
                            {secondFuelLabel.toUpperCase()} ({vehicleB.fuelType})
                        </Typography>
                        <Box sx={{ textAlign: "right" }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Total Cost of Ownership
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" sx={{ color: "#0f2f2e" }}>
                                {formatCurrency(vehicleB.total)}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Monthly avg
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {formatCurrency(vehicleB.monthlyAvg)}
                            </Typography>
                        </Box>

                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Cost per km
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {(vehicleB.perKm * 100).toFixed(1)}¢/km
                            </Typography>
                        </Box>

                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Annual fuel
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {formatCurrency(vehicleB.annualFuel)}
                            </Typography>
                        </Box>

                        <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                            <Typography variant="caption" color="text.secondary" display="block">
                                Annual CO₂
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                                {Math.round(vehicleB.annualCo2Kg).toLocaleString("en-CA")} kg CO₂
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ bgcolor: "#f5f5f5", p: 1.5, borderRadius: 1.5 }}>
                        <Typography variant="caption" color="text.secondary" display="block">
                            Net purchase price
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" sx={{ color: "#263238" }}>
                            {formatCurrency(vehicleB.netPrice)}
                        </Typography>
                    </Box>
                </Paper>
            </Box>

            {/* Cost Breakdown Table */}
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2.5, p: 3, mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#0f2f2e", mb: 2 }}>
                    Cost breakdown
                </Typography>

                <Box sx={{ overflowX: "auto" }}>
                    <Table size="medium">
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                                <TableCell sx={{ fontWeight: "bold", color: "#37474f" }}>CATEGORY</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
                                    {fuelLabelA}
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold", color: "#c62828" }}>
                                    {fuelLabelB}
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold", color: "#37474f" }}>
                                    DIFFERENCE
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {breakdownRows.map((row) => {
                                const isHigher = row.diff > 0;
                                const isLower = row.diff < 0;
                                return (
                                    <TableRow
                                        key={row.label}
                                        sx={row.isTotal ? { bgcolor: "#f1f8e9", fontWeight: "bold" } : undefined}
                                    >
                                        <TableCell sx={{ fontWeight: row.isTotal ? "bold" : 500, color: "#263238" }}>
                                            {row.label}
                                        </TableCell>
                                        <TableCell align="right" sx={{ fontWeight: row.isTotal ? "bold" : "normal" }}>
                                            {row.a < 0 ? `-${formatCurrency(Math.abs(row.a))}` : formatCurrency(row.a)}
                                        </TableCell>
                                        <TableCell align="right" sx={{ fontWeight: row.isTotal ? "bold" : "normal" }}>
                                            {row.b < 0 ? `-${formatCurrency(Math.abs(row.b))}` : formatCurrency(row.b)}
                                        </TableCell>
                                        <TableCell align="right" sx={{ fontWeight: row.isTotal ? "bold" : "medium" }}>
                                            <Box
                                                component="span"
                                                sx={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    justifyContent: "flex-end",
                                                    color: isHigher ? "#c62828" : isLower ? "#2e7d32" : "text.secondary",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {isHigher && "▲ "}
                                                {isLower && "▼ "}
                                                {row.diff === 0 ? "$0" : formatCurrency(Math.abs(row.diff))}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>

            {/* Cumulative cost over time Chart */}
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2.5, p: 3, mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#0f2f2e" }}>
                    Cumulative cost over time
                </Typography>
                <Typography variant="body2" sx={{ color: "#2e7d32", fontWeight: "bold", mb: 2 }}>
                    {breakEvenYear ? `Break-even at year ${breakEvenYear}` : `No break-even point reached within ${years} years`}
                </Typography>

                <Box sx={{ width: "100%", height: 320 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={yearlyRows} margin={{ top: 12, right: 20, left: 10, bottom: 8 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                            <YAxis
                                tick={{ fontSize: 12 }}
                                tickFormatter={(val) => `$${Math.round(val / 1000)}k`}
                            />
                            <Tooltip formatter={(val) => formatCurrency(val)} />
                            <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
                            <Line
                                type="monotone"
                                dataKey="cumulativeA"
                                name={fuelLabelA}
                                stroke="#2e7d32"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="cumulativeB"
                                name={fuelLabelB}
                                stroke="#c62828"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center", mt: 1 }}>
                    Year of ownership
                </Typography>
            </Paper>

            {/* Year-by-year Cost Breakdown Accordion */}
            <Accordion
                disableGutters
                elevation={0}
                sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px !important",
                    mb: 4,
                    "&:before": { display: "none" },
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold" sx={{ color: "#0f2f2e" }}>
                        Year-by-year Cost breakdown
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2.5 }}>
                    <Box sx={{ overflowX: "auto" }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow sx={{ bgcolor: "#fafafa" }}>
                                    <TableCell sx={{ fontWeight: "bold" }}>Year</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold", color: "#2e7d32" }}>
                                        {firstFuelLabel} Cumulative
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold", color: "#c62828" }}>
                                        {secondFuelLabel} Cumulative
                                    </TableCell>
                                    <TableCell align="right" sx={{ fontWeight: "bold" }}>
                                        Difference ({firstFuelLabel} - {secondFuelLabel})
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {yearlyRows.map((row) => (
                                    <TableRow key={row.year}>
                                        <TableCell sx={{ fontWeight: 500 }}>{row.year}</TableCell>
                                        <TableCell align="right">{formatCurrency(row.cumulativeA)}</TableCell>
                                        <TableCell align="right">{formatCurrency(row.cumulativeB)}</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 500 }}>
                                            {row.diffAminusB < 0
                                                ? `-${formatCurrency(Math.abs(row.diffAminusB))}`
                                                : formatCurrency(row.diffAminusB)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Cost breakdown by category Chart */}
            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2.5, p: 3, mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color: "#0f2f2e", mb: 2 }}>
                    Cost breakdown by category
                </Typography>

                <Box sx={{ width: "100%", height: 320 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryChartData} margin={{ top: 12, right: 20, left: 10, bottom: 8 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                            <YAxis
                                tick={{ fontSize: 12 }}
                                tickFormatter={(val) =>
                                    val < 0 ? `-$${Math.abs(Math.round(val / 1000))}k` : `$${Math.round(val / 1000)}k`
                                }
                            />
                            <Tooltip
                                formatter={(val) =>
                                    val < 0 ? `-${formatCurrency(Math.abs(val))} (Credit)` : formatCurrency(val)
                                }
                            />
                            <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
                            <ReferenceLine y={0} stroke="#9e9e9e" />
                            <Bar dataKey={fuelLabelA} fill="#2e7d32" radius={[4, 4, 0, 0]} />
                            <Bar dataKey={fuelLabelB} fill="#c62828" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>

            {/* Methodology, data sources, & FAQ Accordion */}
            <Accordion
                disableGutters
                elevation={0}
                sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px !important",
                    mb: 4,
                    "&:before": { display: "none" },
                }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight="bold" sx={{ color: "#0f2f2e" }}>
                        Methodology, data sources, &amp; FAQ
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2.5 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Electricity &amp; fuel rates: {result.provincePrices.source} ({result.provincePrices.updated}) · Grid carbon intensity:{" "}
                        {result.provincePrices.grid_co2_g_per_kwh} g CO₂/kWh.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Total Cost of Ownership (TCO) combines net purchase price (average MSRP minus applicable federal/provincial rebates), blended city/highway fuel or electricity costs, annual maintenance and insurance estimates, and compound annual depreciation over your chosen ownership period.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Divider sx={{ mb: 3 }} />

            {/* Bottom Navigation Buttons (matching Prototype Page 36 & 43) */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    variant="contained"
                    onClick={onEdit}
                    sx={{
                        width: { xs: "100%", sm: "auto" },
                        bgcolor: "#b0bec5",
                        color: "#263238",
                        "&:hover": { bgcolor: "#90a4ae" },
                        py: 1.5,
                        px: 3.5,
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: "none",
                    }}
                >
                    ← Edit comparison inputs
                </Button>

                <Button
                    component={Link}
                    href="/learn"
                    variant="contained"
                    sx={{
                        width: { xs: "100%", sm: "auto" },
                        bgcolor: "#80cbc4",
                        color: "#004d40",
                        "&:hover": { bgcolor: "#4db6ac" },
                        py: 1.5,
                        px: 3.5,
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: "none",
                    }}
                >
                    Explore the EV costs guide <span>&nbsp;→</span>
                </Button>
            </Box>
        </Box>
    );
}