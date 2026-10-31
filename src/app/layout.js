import "./globals.css";
import NavBtn from "../components/ui/NavBtn";

export const metadata = {
    title: "Charging Forward",
    description:
        "Zero-emission vehicles (ZEVs) learning hub",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang='en'
            suppressHydrationWarning>
            <body suppressHydrationWarning>
                <main>{children}</main>
            </body>
        </html>
    );
}
