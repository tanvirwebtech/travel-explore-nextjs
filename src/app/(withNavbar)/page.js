import Hero from "../sections/Hero";
import Partner from "./../sections/Partner";

import Services from "./../sections/services/Services";
import SpecialPackage from "./../sections/SpecialPackage";
export default function Home() {
    return (
        <main>
            <Hero></Hero>
            <Partner></Partner>
            <Services></Services>
            <SpecialPackage></SpecialPackage>
        </main>
    );
}
