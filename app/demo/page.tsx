import { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
    title: "Demo",
    description: "Vysera Demo Videos",
    alternates: {
        canonical: "https://getvysera.com/demo",
    },
}

export default function Demo() {
    return <DemoClient />;
}
