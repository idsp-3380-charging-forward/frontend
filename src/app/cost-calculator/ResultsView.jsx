"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
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
    onBackToReview,
    onEdit,
}) {
    const { vehicleA, vehicleB, years, savings, cheaperFuel, breakEvenYear } = result;
    const cheaperFuelLabel =
        cheaperFuel === formData.firstFuel ? firstFuelLabel : secondFuelLabel;

    const yearlyRows = calculateYearlyBreakdown(formData);

    const breakdownRows = [
        {
            label: "Net purchase price",
            a: vehicleA.netPrice,
            b: vehicleB.netPrice,
            isTotal: false,
        },
        {
            label: `Fuel / electricity (${years} yrs)`,
            a: vehicleA.totalFuel,
            b: vehicleB.totalFuel,
            isTotal: false,
        },
        {
            label: `Maintenance (${years} yrs)`,
            a: vehicleA.totalMaint,
            b: vehicleB.totalMaint,
            isTotal: false,
        },
        {
            label: `Insurance (${years} yrs)`,
            a: vehicleA.totalInsur,
            b: vehicleB.totalInsur,
            isTotal: false,
        },
        {
            label: "Resale credit",
            a: -vehicleA.resale,
            b: -vehicleB.resale,
            isTotal: false,
        },
        {
            label: `Total Cost of Ownership (${years} yrs)`,
            a: vehicleA.total,
            b: vehicleB.total,
            isTotal: true,
        },
    ];

    const categoryChartData = [
        {
            category: "Net Purchase",
            [firstFuelLabel]: Math.round(vehicleA.netPrice),
            [secondFuelLabel]: Math.round(vehicleB.netPrice),
        },
        {
            category: "Fuel / Energy",
            [firstFuelLabel]: Math.round(vehicleA.totalFuel),
            [secondFuelLabel]: Math.round(vehicleB.totalFuel),
        },
        {
            category: "Maintenance",
            [firstFuelLabel]: Math.round(vehicleA.totalMaint),
            [secondFuelLabel]: Math.round(vehicleB.totalMaint),
        },
        {
            category: "Insurance",
            [firstFuelLabel]: Math.round(vehicleA.totalInsur),
            [secondFuelLabel]: Math.round(vehicleB.totalInsur),
        },
        {
            category: "Resale Credit",
            [firstFuelLabel]: Math.round(vehicleA.resale),
            [secondFuelLabel]: Math.round(vehicleB.resale),
        },
    ];

    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Your Results
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                {vehicleLabel} · {provinceName} · {years}-year ownership ({Number(formData.annualKm).toLocaleString("en-CA")} km/yr, {formData.highwayPct}% highway)
            </Typography>

            <Paper elevation={0} sx={{ bgcolor: "#e0f2f1", border: "1px solid #b2dfdb", borderRadius: 2, p: 2.5, mb: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#004d40" }}>
                    {savings < 100
                        ? `${firstFuelLabel} and ${secondFuelLabel} have nearly identical total ownership costs over ${years} years.`
                        : `${cheaperFuelLabel} is estimated to save ${formatCurrency(savings)} over ${years} years`}
                    {breakEvenYear ? ` (break-even in Year ${breakEvenYear}).` : "."}
                </Typography>
            </Paper>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5, mb: 4 }}>
                <Paper elevation={0} sx={{ p: 2.5, bgcolor: "#f5fafa", borderRadius: 2, border: "1.5px solid #177574" }}>
                    <Typography variant="caption" color="#177574" fontWeight="bold" display="block">
                        {firstFuelLabel.toUpperCase()}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                        e.g., {vehicleA.examples.slice(0, 2).join(", ")}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                        {formatCurrency(vehicleA.total)}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Monthly avg: <strong>{formatCurrency(vehicleA.monthlyAvg)}/mo</strong> · {(vehicleA.perKm * 100).toFixed(1)}¢/km
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Annual fuel: {formatCurrency(vehicleA.annualFuel)} · Net price: {formatCurrency(vehicleA.netPrice)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Annual CO₂: {Math.round(vehicleA.annualCo2Kg).toLocaleString("en-CA")} kg/yr
                    </Typography>
                </Paper>

                <Paper elevation={0} sx={{ p: 2.5, bgcolor: "#fafafa", borderRadius: 2, border: "1px solid #e0e0e0" }}>
                    <Typography variant="caption" color="text.secondary" fontWeight="bold" display="block">
                        {secondFuelLabel.toUpperCase()}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                        e.g., {vehicleB.examples.slice(0, 2).join(", ")}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                        {formatCurrency(vehicleB.total)}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 0.5 }}>
                        Monthly avg: <strong>{formatCurrency(vehicleB.monthlyAvg)}/mo</strong> · {(vehicleB.perKm * 100).toFixed(1)}¢/km
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Annual fuel: {formatCurrency(vehicleB.annualFuel)} · Net price: {formatCurrency(vehicleB.netPrice)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Annual CO₂: {Math.round(vehicleB.annualCo2Kg).toLocaleString("en-CA")} kg/yr
                    </Typography>
                </Paper>
            </Box>

            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 3, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>
                    Cost breakdown &amp; difference
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Difference compares {firstFuelLabel} minus {secondFuelLabel}.
                </Typography>

                <Box sx={{ overflowX: "auto" }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#fafafa" }}>
                                <TableCell sx={{ fontWeight: "bold" }}>Cost Category</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold" }}>{firstFuelLabel}</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold" }}>{secondFuelLabel}</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold" }}>DIFFERENCE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {breakdownRows.map((row) => {
                                const diff = row.a - row.b;
                                const isHigher = diff > 0;
                                const isLower = diff < 0;
                                return (
                                    <TableRow
                                        key={row.label}
                                        sx={row.isTotal ? { bgcolor: "#f5fafa" } : undefined}
                                    >
                                        <TableCell sx={{ fontWeight: row.isTotal ? "bold" : "normal" }}>
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
                                                    color: isHigher ? "#b71c1c" : isLower ? "#177574" : "text.secondary",
                                                }}
                                            >
                                                {isHigher && <ArrowDropUpIcon fontSize="small" />}
                                                {isLower && <ArrowDropDownIcon fontSize="small" />}
                                                {diff === 0 ? "$0" : formatCurrency(Math.abs(diff))}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 4 }}>
                <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 2.5 }}>
                    <Typography fontWeight="bold" gutterBottom>
                        Cumulative cost over time
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                        Cumulative ownership cost across {years} years
                    </Typography>
                    <Box sx={{ width: "100%", height: 260 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={yearlyRows} margin={{ top: 8, right: 12, left: 4, bottom: 4 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#eeeeee" />
                                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                                <YAxis
                                    tick={{ fontSize: 11 }}
                                    tickFormatter={(val) => `$${Math.round(val / 1000)}k`}
                                />
                                <Tooltip formatter={(val) => formatCurrency(val)} />
                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                <Line
                                    type="monotone"
                                    dataKey="cumulativeA"
                                    name={firstFuelLabel}
                                    stroke="#177574"
                                    strokeWidth={2.5}
                                    dot={{ r: 3 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="cumulativeB"
                                    name={secondFuelLabel}
                                    stroke="#546e7a"
                                    strokeWidth={2.5}
                                    dot={{ r: 3 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Box>
                </Paper>

                <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 2.5 }}>
                    <Typography fontWeight="bold" gutterBottom>
                        Cost breakdown by category
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                        Comparison by major ownership component ({years} yrs)
                    </Typography>
                    <Box sx={{ width: "100%", height: 260 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryChartData} margin={{ top: 8, right: 12, left: 4, bottom: 4 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#eeeeee" />
                                <XAxis dataKey="category" tick={{ fontSize: 10 }} />
                                <YAxis
                                    tick={{ fontSize: 11 }}
                                    tickFormatter={(val) => `$${Math.round(val / 1000)}k`}
                                />
                                <Tooltip formatter={(val) => formatCurrency(val)} />
                                <Legend wrapperStyle={{ fontSize: 12 }} />
                                <Bar dataKey={firstFuelLabel} fill="#177574" radius={[4, 4, 0, 0]} />
                                <Bar dataKey={secondFuelLabel} fill="#90a4ae" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Paper>
            </Box>

            <Paper elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2, p: 3, mb: 4 }}>
                <Typography fontWeight="bold" gutterBottom>
                    Year-by-year Cost breakdown
                </Typography>
                <Box sx={{ overflowX: "auto" }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow sx={{ bgcolor: "#fafafa" }}>
                                <TableCell sx={{ fontWeight: "bold" }}>Year</TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                                    {firstFuelLabel} Cumulative
                                </TableCell>
                                <TableCell align="right" sx={{ fontWeight: "bold" }}>
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
                                    <TableCell>{row.year}</TableCell>
                                    <TableCell align="right">{formatCurrency(row.cumulativeA)}</TableCell>
                                    <TableCell align="right">{formatCurrency(row.cumulativeB)}</TableCell>
                                    <TableCell align="right">
                                        {row.diffAminusB < 0
                                            ? `-${formatCurrency(Math.abs(row.diffAminusB))}`
                                            : formatCurrency(row.diffAminusB)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Paper>

            <Divider sx={{ mb: 3 }} />

            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, width: { xs: "100%", sm: "auto" } }}>
                    <Button
                        variant="outlined"
                        onClick={onBackToReview}
                        sx={{
                            borderColor: "#177574",
                            color: "#177574",
                            py: 1.25,
                            px: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                    >
                        ← Back to review
                    </Button>
                    <Button
                        variant="contained"
                        onClick={onEdit}
                        sx={{
                            bgcolor: "#177574",
                            "&:hover": { bgcolor: "#125c5b" },
                            py: 1.25,
                            px: 3,
                            textTransform: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Edit comparison inputs
                    </Button>
                </Box>

                <Button
                    component={Link}
                    href="/learn"
                    variant="contained"
                    sx={{
                        width: { xs: "100%", sm: "auto" },
                        bgcolor: "#80cbc4",
                        color: "#004d40",
                        "&:hover": { bgcolor: "#4db6ac" },
                        py: 1.25,
                        px: 3,
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